import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ResourceCard } from "@/components/resource-card";
import { SectionHeading } from "@/components/section-heading";
import { resources } from "@/data/resources";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Recursos para estudiantes",
  description:
    "Material descargable para estudiantes en formato ZIP: atencion farmaceutica, farmacologia, infectologia clinica y micologia clinica.",
  alternates: {
    canonical: "/recursos"
  },
  openGraph: {
    title: `Recursos para estudiantes | ${siteConfig.shortName}`,
    description: "Portal academico con materiales descargables para alumnos.",
    url: "/recursos"
  }
};

const groupedResources = resources.reduce<Record<string, typeof resources>>((acc, resource) => {
  acc[resource.unit] = acc[resource.unit] ?? [];
  acc[resource.unit].push(resource);
  return acc;
}, {});

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-slateAcademic py-14">
          <div className="section-shell">
            <Link href="/" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900">
              <ArrowLeft aria-hidden="true" size={16} />
              Volver al perfil
            </Link>
            <div className="mt-8">
              <SectionHeading
                eyebrow="Portal de alumnos"
                title="Recursos academicos descargables"
                description="Repositorio organizado para paquetes ZIP de apoyo academico por area de estudio."
              />
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              {["Atencion farmaceutica", "Farmacologia", "Infectologia clinica", "Micologia clinica"].map((label) => (
                <div key={label} className="rounded border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-navy-900">{label}</p>
                  <p className="mt-1 text-xs text-slate-500">Archivos ZIP</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="section-shell grid gap-8">
            {Object.entries(groupedResources).map(([unit, items]) => (
              <section key={unit} aria-labelledby={unit.replaceAll(" ", "-")} className="rounded border border-slate-200 bg-white p-6 shadow-sm">
                <h2 id={unit.replaceAll(" ", "-")} className="font-serif text-2xl font-bold text-navy-900">
                  {unit}
                </h2>
                <div className="mt-6">
                  {items.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
