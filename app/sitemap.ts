// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = [
    "json","base64","wordcount","color","regex",
    "markdown","password","hash","cssminifier",
    "diff","jwt","timestamp","gradient","lorem"
  ];
  return [
    { url: "https://youdomain.site", lastModified: new Date() },
    { url: "https://yourdomain.site/cv", lastModified: new Date() },
    { url: "https://yourdomain.site/about", lastModified: new Date() },
    { url: "https://yourdomain.site/privacy", lastModified: new Date() },
    ...tools.map(t => ({
      url: `https://yourdomain.site/tools/${t}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  ];
}