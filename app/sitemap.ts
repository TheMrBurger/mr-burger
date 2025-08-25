// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.themrburger.com';
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/#menu`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/#locations`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/#about`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 }
  ];
}