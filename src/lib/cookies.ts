/**
 * Server-only cookie utility.
 *
 * Enforces secure defaults that cannot be overridden by callers:
 *   • httpOnly  – always true (cookie not readable from JS in the browser)
 *   • secure    – always true (cookie only sent over HTTPS)
 *   • sameSite  – required by the caller, one of 'strict' | 'lax' | 'none'
 *
 * Use inside Route Handlers, Server Actions or Server Components that need
 * to mutate cookies.
 *
 * Note: because `secure` is forced to true, cookies set in local development
 * over plain http://localhost will be rejected by the browser. Run the dev
 * server behind https (e.g. `next dev --experimental-https`) when you need
 * to actually round-trip a cookie.
 */

import { cookies } from 'next/headers';

export type SameSite = 'strict' | 'lax' | 'none';

export type SetCookieOptions = {
  /** REQUIRED – CSRF protection level. Use 'none' only together with cross-site embeds. */
  sameSite: SameSite;
  /** Lifetime in seconds. Omit for a session cookie. */
  maxAge?: number;
  /** Explicit expiry date. Takes precedence over maxAge if both are set. */
  expires?: Date;
  /** Cookie path scope. Defaults to '/'. */
  path?: string;
  /** Domain scope. Omit to default to the current host. */
  domain?: string;
};

export type DeleteCookieOptions = Pick<SetCookieOptions, 'path' | 'domain'>;

/**
 * Set a cookie with mandatory HttpOnly + Secure + SameSite.
 *
 * @example
 *   setCookie('session', token, { sameSite: 'lax', maxAge: 60 * 60 * 24 * 7 });
 */
export function setCookie(name: string, value: string, options: SetCookieOptions): void {
  assertSameSite(options.sameSite);
  cookies().set({
    name,
    value,
    httpOnly: true,
    secure: true,
    sameSite: options.sameSite,
    path: options.path ?? '/',
    domain: options.domain,
    maxAge: options.maxAge,
    expires: options.expires,
  });
}

/** Read a cookie value, or undefined if it does not exist. */
export function getCookie(name: string): string | undefined {
  return cookies().get(name)?.value;
}

/** Check existence without reading the value. */
export function hasCookie(name: string): boolean {
  return cookies().has(name);
}

/**
 * Delete a cookie by clearing it on the same path/domain.
 * Falls back to a zero-maxAge cookie with the same security flags.
 */
export function deleteCookie(name: string, options: DeleteCookieOptions = {}): void {
  cookies().set({
    name,
    value: '',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: options.path ?? '/',
    domain: options.domain,
    maxAge: 0,
  });
}

function assertSameSite(value: SameSite): void {
  if (value !== 'strict' && value !== 'lax' && value !== 'none') {
    throw new Error(
      `Invalid sameSite "${String(value)}". Must be 'strict', 'lax' or 'none'.`,
    );
  }
}
