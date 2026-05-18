# Sitio academico profesional

Sitio web Next.js para perfil academico, CV online, presencia institucional y portal de recursos para estudiantes.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Componentes reutilizables
- SEO tecnico con metadata, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt` y JSON-LD

## Estructura

```text
src/
  app/
    page.tsx
    recursos/page.tsx
    layout.tsx
    sitemap.ts
    robots.ts
    globals.css
  components/
    footer.tsx
    header.tsx
    json-ld.tsx
    resource-card.tsx
    section-heading.tsx
  data/
    profile.ts
    resources.ts
    site.ts
public/
  downloads/
  images/
```

## Escalabilidad

- Edita datos generales, SEO y enlaces sociales en `src/data/site.ts`.
- Edita biografia, experiencia, docencia y reconocimientos en `src/data/profile.ts`.
- Agrega materiales descargables en `src/data/resources.ts`.
- Sube archivos ZIP a `public/downloads`.
- Reemplaza `public/images/abraham-choel-profile.svg` por una fotografia profesional optimizada en WebP o AVIF.

## SEO recomendado

- Mantener el nombre completo del academico en `title`, `description`, H1 y JSON-LD.
- Conectar Google Search Console y enviar `https://abrahamchoel.com/sitemap.xml`.
- Completar enlaces reales de Google Scholar, ResearchGate, ORCID y LinkedIn.

## Despliegue

Recomendado: Vercel.

1. Conectar el repositorio.
2. Configurar dominio `abrahamchoel.com`.
3. Ejecutar build con `npm run build`.
4. Activar compresion, analytics y verificacion de Core Web Vitals.

## Manejo de archivos

Para pocos documentos, `public/downloads` es suficiente. Para muchos archivos o control por cursos, usar almacenamiento externo como S3, Cloudflare R2, Supabase Storage o Google Drive institucional con URLs publicas controladas.
