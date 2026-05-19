import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, Mail, Microscope } from "lucide-react";
import { AcademicJsonLd } from "@/components/json-ld";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ResourceCard } from "@/components/resource-card";
import { SectionHeading } from "@/components/section-heading";
import { biography, experience, recognitions, researchLines, teaching } from "@/data/profile";
import { resources } from "@/data/resources";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const featuredResources = resources.slice(0, 3);

  return (
    <>
      <AcademicJsonLd />
      <Header />
      <main>
        <section className="bg-slateAcademic">
          <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="eyebrow">Perfil academico institucional</p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl font-bold leading-tight text-navy-900 sm:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-navy-700">
                {siteConfig.academicTitle}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {siteConfig.specialty}. Experiencia en laboratorio clinico, banco de sangre,
                docencia universitaria y formacion academica en ciencias de la salud.
              </p>
              <dl className="mt-8 grid max-w-2xl gap-4 border-y border-slate-300 py-6 sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Institucion</dt>
                  <dd className="mt-2 text-sm font-semibold text-navy-900">{siteConfig.institution}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Especialidad</dt>
                  <dd className="mt-2 text-sm font-semibold text-navy-900">Diagnostico clinico</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Ubicacion</dt>
                  <dd className="mt-2 text-sm font-semibold text-navy-900">{siteConfig.location}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="focus-ring inline-flex h-12 items-center gap-2 rounded bg-navy-900 px-5 text-sm font-semibold text-white transition hover:bg-navy-700" href={`mailto:${siteConfig.email}`}>
                  <Mail aria-hidden="true" size={17} />
                  Contactar
                </a>
                <Link className="focus-ring inline-flex h-12 items-center gap-2 rounded border border-navy-700 px-5 text-sm font-semibold text-navy-900 transition hover:bg-white" href="/recursos">
                  Ver recursos
                  <ArrowRight aria-hidden="true" size={17} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded border border-slate-200 bg-white shadow-soft">
                <Image
                  src="/images/abraham_choel.png"
                  alt="Retrato profesional de Abraham Gomez Choel"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="mx-auto max-w-md border-x border-b border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-navy-900">Laboratorio clinico | Docencia | Recursos academicos</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Una presencia digital seria para consulta institucional, estudiantes y vinculacion academica.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="perfil" className="section-padding bg-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Sobre el academico"
              title="Trayectoria clinica, docente e institucional"
              description="Un perfil construido sobre experiencia profesional, formacion cientifica y acompanamiento academico."
            />
            <div className="grid gap-6">
              {biography.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-9 text-slate-650 text-slate-600">
                  {paragraph}
                </p>
              ))}
              <div className="grid gap-3 sm:grid-cols-2">
                {researchLines.map((line) => (
                  <div key={line} className="border-l-2 border-navy-500 bg-slateAcademic px-4 py-3 text-sm font-semibold text-navy-900">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section-padding bg-slateAcademic">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Experiencia academica"
              title="Instituciones, cargos y proyectos"
              description="Experiencia articulada entre universidad, sistema de salud, docencia y vinculacion profesional."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {experience.map((item) => (
                <article key={`${item.institution}-${item.role}`} className="rounded border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-navy-50 text-navy-700">
                      <Microscope aria-hidden="true" size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-700">{item.period}</p>
                      <h3 className="mt-1 text-xl font-bold text-navy-900">{item.role}</h3>
                      <p className="mt-1 text-base font-semibold text-slate-700">{item.institution}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-slate-600">{item.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[...item.subjects, ...item.projects].map((tag) => (
                      <span key={tag} className="rounded bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="docencia" className="section-padding bg-slateAcademic">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Docencia"
              title="Areas de ensenanza y niveles educativos"
              description="Cursos organizados por area academica para facilitar consulta institucional y posicionamiento SEO."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {teaching.map((item) => (
                <article key={item.area} className="rounded border border-slate-200 bg-white p-6">
                  <BookOpen aria-hidden="true" className="text-navy-700" size={24} />
                  <h3 className="mt-5 text-xl font-bold text-navy-900">{item.area}</h3>
                  <p className="mt-2 text-sm font-semibold text-navy-700">{item.levels}</p>
                  <ul className="mt-5 grid gap-2 text-sm text-slate-600">
                    {item.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Reconocimientos"
              title="Credenciales, membresias y logros"
              description="Elementos de autoridad profesional para reforzar confianza academica e institucional."
            />
            <div className="grid gap-4">
              {recognitions.map((item) => (
                <div key={item} className="flex gap-4 border-b border-slate-200 pb-4">
                  <Award aria-hidden="true" className="mt-1 shrink-0 text-navy-700" size={20} />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-slateAcademic">
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Recursos para estudiantes"
                title="Material academico descargable"
                description="Modulo organizado para paquetes ZIP descargables por materia."
              />
              <Link href="/recursos" className="focus-ring inline-flex h-12 items-center gap-2 rounded bg-navy-900 px-5 text-sm font-semibold text-white transition hover:bg-navy-700">
                Ver todos
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
            <div className="mt-10 rounded border border-slate-200 bg-white p-6">
              {featuredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section-padding bg-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Contacto"
              title="Vinculacion academica e institucional"
              description="Canales para estudiantes, colegas, instituciones y proyectos colaborativos."
            />
            <div className="grid gap-8 rounded border border-slate-200 bg-slateAcademic p-6 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy-500">Redes academicas</p>
                <div className="mt-5 grid gap-3">
                  <a className="font-semibold text-navy-900 hover:text-navy-700" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  <a className="font-semibold text-navy-900 hover:text-navy-700" href={siteConfig.social.linkedin}>LinkedIn</a>
                  <a className="font-semibold text-navy-900 hover:text-navy-700" href={siteConfig.social.researchGate}>ResearchGate</a>
                  <a className="font-semibold text-navy-900 hover:text-navy-700" href={siteConfig.social.googleScholar}>Google Scholar</a>
                </div>
              </div>
              <form className="grid gap-4" aria-label="Formulario de contacto">
                <input className="focus-ring h-11 rounded border border-slate-300 px-4 text-sm" name="name" placeholder="Nombre" type="text" />
                <input className="focus-ring h-11 rounded border border-slate-300 px-4 text-sm" name="email" placeholder="Correo electronico" type="email" />
                <textarea className="focus-ring min-h-28 rounded border border-slate-300 px-4 py-3 text-sm" name="message" placeholder="Mensaje" />
                <button className="focus-ring inline-flex h-11 items-center justify-center rounded bg-navy-900 px-4 text-sm font-semibold text-white transition hover:bg-navy-700" type="submit">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
