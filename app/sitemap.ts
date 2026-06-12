// app/sitemap.ts
import { MetadataRoute } from "next";

const baseUrl = "https://codebench.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = [
    "json","base64","wordcount","color","regex",
    "markdown","password","hash","cssminifier",
    "diff","jwt","timestamp","gradient","lorem"
  ];
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/cv`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    ...tools.map(t => ({
      url: `${baseUrl}/tools/${t}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  ];
}