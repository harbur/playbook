import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

const baseUrl = 'https://docs.harbur.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.data.lastModified ?? new Date(),
    changeFrequency: 'weekly' as const,
    priority: page.url === '/' ? 1.0 : 0.8,
  }));

  // Sort by URL to ensure consistency
  return pages.sort((a, b) => a.url.localeCompare(b.url));
}
