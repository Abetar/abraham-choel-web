import type { MetadataRoute } from "next";
import { resources } from "@/data/resources";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteConfig.url}/recursos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    ...resources.map((resource) => ({
      url: `${siteConfig.url}/recursos#${resource.id}`,
      lastModified: new Date(resource.date),
      changeFrequency: "monthly" as const,
      priority: 0.5
    }))
  ];
}
