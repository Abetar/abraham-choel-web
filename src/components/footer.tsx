import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy-900 text-white">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-xl font-bold">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
            Perfil academico, experiencia institucional, docencia y recursos para estudiantes.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">Enlaces</p>
          <div className="mt-4 grid gap-2 text-sm">
            <Link href="/recursos" className="text-slate-300 hover:text-white">Recursos para estudiantes</Link>
            <Link href="/#docencia" className="text-slate-300 hover:text-white">Docencia</Link>
            <Link href="/#contacto" className="text-slate-300 hover:text-white">Contacto</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">Contacto</p>
          <a className="mt-4 block text-sm text-slate-300 hover:text-white" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <p className="mt-6 text-xs text-slate-400">Todos los derechos reservados © 2026</p>
        </div>
      </div>
    </footer>
  );
}
