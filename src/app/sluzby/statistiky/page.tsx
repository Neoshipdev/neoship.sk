import type { Metadata } from 'next';
import { FeaturePageTemplate } from '@/components/feature-page/FeaturePageTemplate';
import { featurePages } from '@/lib/feature-pages';
import { buildMetadata } from '@/lib/seo';

const data = featurePages['statistiky'];

export const metadata: Metadata = buildMetadata({
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
  path: `/sluzby/${data.slug}`,
});

export default function Page() {
  return <FeaturePageTemplate data={data} />;
}
