import { Download, FileText } from "lucide-react";
import type { StudentResource } from "@/data/resources";

export function ResourceCard({ resource }: { resource: StudentResource }) {
  const formattedDate = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium"
  }).format(new Date(resource.date));

  return (
    <article
      id={resource.id}
      className="grid gap-5 border-b border-slate-200 py-6 first:pt-0 last:border-b-0 md:grid-cols-[1fr_auto]"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded bg-navy-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-navy-700">
            <FileText aria-hidden="true" size={14} />
            {resource.type}
          </span>
          <time className="text-sm text-slate-500" dateTime={resource.date}>
            {formattedDate}
          </time>
        </div>
        <h3 className="mt-4 text-xl font-bold text-navy-900">{resource.title}</h3>
        <p className="mt-2 text-sm font-semibold text-navy-700">{resource.unit}</p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{resource.description}</p>
      </div>
      <div className="flex items-start md:justify-end">
        <a
          href={resource.fileUrl}
          download
          className="focus-ring inline-flex h-11 items-center gap-2 rounded bg-navy-900 px-4 text-sm font-semibold text-white transition hover:bg-navy-700"
        >
          <Download aria-hidden="true" size={16} />
          Descargar
        </a>
      </div>
    </article>
  );
}
