export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  approaches: string[];
  duration: string;
  icon?: string;
  shortDescription?: string;
}

export const services: Service[] = [
  {
    id: "individual",
    number: "01",
    title: "Terapia Individual",
    shortDescription: "Un espacio privado para trabajar la ansiedad, el estrés, la autoestima o cualquier dificultad que esté limitando tu bienestar y paz mental.",
    description: "Un espacio confidencial para explorar tus dificultades emocionales. Trabajo con ansiedad, estrés, problemas de autoestima y procesos de cambio personal.",
    approaches: ["Cognitivo-Conductual", "Tercera Generación", "Mindfulness"],
    duration: "50 minutos",
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>`
  },
  {
    id: "pareja",
    number: "02",
    title: "Terapia de Pareja",
    shortDescription: "Mejoramos la comunicación y resolvemos conflictos para reconstruir la base del respeto y la intimidad en la relación.",
    description: "Mejora la comunicación, resuelve conflictos y reconstruye la confianza. Un espacio neutral donde ambos podáis expresaros y encontrar soluciones.",
    approaches: ["Comunicación efectiva", "Resolución de conflictos", "Reconstrucción"],
    duration: "60 minutos",
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632l-.046-.022a4.114 4.114 0 01-.15-.084l-.01-.006a4.115 4.115 0 01-.15-.084m12.915 2.193A9.08 9.08 0 0021 18.25m-12.915 2.193a9.08 9.08 0 01-3.741-.479 3 3 0 014.682-2.72m.94 3.198zM15.75 12.75a3 3 0 11-6 0 3 3 0 016 0zM8.25 9.75a3 3 0 11-6 0 3 3 0 016 0zM21.75 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`
  },
  {
    id: "familiar",
    number: "03",
    title: "Terapia Familiar",
    shortDescription: "Intervención sistémica para tratar dinámicas familiares complejas, mejorando el entendimiento y los límites sanos entre miembros.",
    description: "Intervención para mejorar la dinámica familiar y la comunicación entre miembros. Orientación a familias en transiciones o situaciones de crisis.",
    approaches: ["Sistémica", "Comunicación", "Límites"],
    duration: "75 minutos",
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`
  },
  {
    id: "evaluacion",
    number: "04",
    title: "Evaluación Neuropsicológica",
    description: "Diagnóstico mediante entrevistas y pruebas psicométricas. Fundamental para entender dificultades cognitivas, atencionales o de memoria.",
    approaches: ["Entrevista clínica", "Pruebas estandarizadas", "Informe completo"],
    duration: "90-120 minutos"
  },
  {
    id: "cognitiva",
    number: "05",
    title: "Estimulación Cognitiva",
    description: "Intervención a domicilio para personas mayores. Mantenimiento y mejora de funciones cognitivas como memoria, atención y orientación.",
    approaches: ["A domicilio", "Materiales personalizados", "Seguimiento"],
    duration: "45-60 minutos"
  },
  {
    id: "online",
    number: "06",
    title: "Terapia Online",
    description: "Atención psicológica por videoconferencia con la misma calidad que la presencial. Ideal si prefieres la comodidad de tu hogar.",
    approaches: ["Plataforma segura", "Horarios flexibles", "Igual efectividad"],
    duration: "50 minutos"
  }
];

export const mainServices = services.slice(0, 3);
export const allServices = services;

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
