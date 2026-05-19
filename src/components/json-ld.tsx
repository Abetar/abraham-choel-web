import { siteConfig } from "@/data/site";

export function AcademicJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.academicTitle,
    description: siteConfig.title,
    email: siteConfig.email,
    affiliation: [
      {
        "@type": "Organization",
        name: "Universidad Autonoma de Chiapas"
      },
      {
        "@type": "Organization",
        name: "Instituto Mexicano del Seguro Social"
      }
    ],
    knowsAbout: siteConfig.keywords,
    sameAs: [
      siteConfig.social.linkedin
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
