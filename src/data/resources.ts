export type ResourceType = "ZIP";

export type StudentResource = {
  id: string;
  title: string;
  description: string;
  date: string;
  type: ResourceType;
  unit: string;
  fileUrl: string;
};

export const resources: StudentResource[] = [
  {
    id: "atencion-farmaceutica-1",
    title: "Atencion farmaceutica 1",
    description: "Paquete descargable con materiales de apoyo para la primera unidad de atencion farmaceutica.",
    date: "2026-01-18",
    type: "ZIP",
    unit: "Atencion farmaceutica",
    fileUrl: "/downloads/atencion-farmaceutica-1.zip"
  },
  {
    id: "atencion-farmaceutica-2",
    title: "Atencion farmaceutica 2",
    description: "Paquete descargable con recursos complementarios para continuidad y practica aplicada.",
    date: "2026-01-25",
    type: "ZIP",
    unit: "Atencion farmaceutica",
    fileUrl: "/downloads/atencion-farmaceutica-2.zip"
  },
  {
    id: "farmacologia-1",
    title: "Farmacologia 1",
    description: "Material descargable para fundamentos, conceptos clave y actividades iniciales de farmacologia.",
    date: "2026-02-08",
    type: "ZIP",
    unit: "Farmacologia",
    fileUrl: "https://1drv.ms/f/c/e390674a3879c5de/IgDmeRk76qzgRq3y_Ws9ts8PAZNHTds5QfSKNkwz7N97ghs?e=NQCYeU"
  },
  {
    id: "farmacologia-2",
    title: "Farmacologia 2",
    description: "Material descargable para seguimiento tematico, ejercicios y documentos de consulta.",
    date: "2026-02-20",
    type: "ZIP",
    unit: "Farmacologia",
    fileUrl: "https://1drv.ms/f/c/e390674a3879c5de/IgDVSiVuIEO9QKSITOsqdAP-AWuG56WJSVR2QCOLDU4hdsI?e=mnezip"
  },
  {
    id: "infectologia-clinica",
    title: "Infectologia clinica",
    description: "Paquete descargable con recursos academicos para el estudio clinico de enfermedades infecciosas.",
    date: "2026-03-04",
    type: "ZIP",
    unit: "Infectologia clinica",
    fileUrl: "/downloads/infectologia-clinica.zip"
  },
  {
    id: "micologia-clinica",
    title: "Micologia clinica",
    description: "Paquete descargable con materiales de apoyo para micologia clinica y analisis de casos.",
    date: "2026-03-12",
    type: "ZIP",
    unit: "Micologia clinica",
    fileUrl: "https://1drv.ms/f/c/e390674a3879c5de/IgBYw4AsPl7RQZx3G9Vw_UewAXmmEkoBjXjPAB24opxzMqw?e=NMLK2s"
  }
];
