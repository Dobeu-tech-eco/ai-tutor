import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://dobeu.info", lastModified: new Date("2026-07-01"), priority: 1 },
  ];
}
