"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="section-shell" aria-label="Navegacion principal">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="focus-ring text-sm font-bold uppercase tracking-[0.18em] text-navy-900"
            onClick={() => setIsOpen(false)}
          >
            {siteConfig.shortName}
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring text-sm font-medium text-slate-600 transition hover:text-navy-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:block">
            <a
              href={`mailto:${siteConfig.email}`}
              className="focus-ring inline-flex h-10 items-center gap-2 rounded border border-navy-700 px-4 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-white"
            >
              <Mail aria-hidden="true" size={16} />
              Contactar
            </a>
          </div>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded border border-slate-300 text-navy-900 transition hover:border-navy-700 hover:bg-slateAcademic lg:hidden"
            aria-label={isOpen ? "Cerrar menu de navegacion" : "Abrir menu de navegacion"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
        {isOpen ? (
          <div id="mobile-navigation" className="border-t border-slate-200 py-4 lg:hidden">
            <div className="grid gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded px-2 py-3 text-base font-semibold text-slate-700 transition hover:bg-slateAcademic hover:text-navy-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="focus-ring mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded bg-navy-900 px-4 text-sm font-semibold text-white transition hover:bg-navy-700"
              onClick={() => setIsOpen(false)}
            >
              <Mail aria-hidden="true" size={16} />
              Contactar
            </a>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
