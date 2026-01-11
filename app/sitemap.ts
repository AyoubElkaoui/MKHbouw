import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mkhbouw.nl";

  // Statische pagina's
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/over-ons`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diensten`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // Lokale landing pages
  const lokaleLPs = [
    {
      url: `${baseUrl}/locaties/stucwerk-amsterdam`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locaties/stucwerk-rotterdam`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locaties/stucwerk-utrecht`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locaties/schilderwerk-amsterdam`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locaties/renovatie-amsterdam`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Content/gids pagina's
  const gidsPages = [
    {
      url: `${baseUrl}/blog/wat-kost-stucwerk`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/wat-kost-schilderwerk`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/verschil-spackspuiten-traditioneel`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/hoe-lang-duurt-stucwerk`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/stucwerk-scheuren-repareren`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Diensten pagina's
  const diensten = [
    "stucwerk",
    "schilderwerk",
    "renovatie",
    "spackspuiten",
    "sierpleister",
    "schuurwerk",
    "behangen",
    "sloopwerk",
  ];

  const dienstenRoutes = diensten.map((dienst) => ({
    url: `${baseUrl}/diensten/${dienst}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...lokaleLPs, ...gidsPages, ...dienstenRoutes];
}
