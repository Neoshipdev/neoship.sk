import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { featurePageSlugs } from '@/lib/feature-pages';
import { blogPosts } from '@/lib/blog';
import { navody } from '@/lib/navody';

const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/sluzby/kurierske-sluzby', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/sluzby/hromadna-tvorba-balikov', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/sluzby/expedicny-system-neoship', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/navody', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/o-nas', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/kariera', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/referencie', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/kontakt', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/cennik', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/stante-sa-partnerom', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/pravidla-ochrany-osobnych-udajov', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/vseobecne-obchodne-podmienky', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const featureRoutes = featurePageSlugs.map((slug) => ({
    url: `${SITE_URL}/sluzby/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const navodyRoutes = navody.map((n) => ({
    url: `${SITE_URL}/navody/${n.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...featureRoutes, ...blogRoutes, ...navodyRoutes];
}
