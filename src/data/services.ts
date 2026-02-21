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
    shortDescription: "Espacio privado para trabajar ansiedad, estrés, autoestima y crecimiento personal con técnicas basadas en evidencia.",
    description: "Espacio confidencial para trabajar dificultades emocionales. Abordamos ansiedad, estrés, problemas de autoestima y procesos de cambio personal mediante técnicas efectivas.",
    approaches: ["Cognitivo-Conductual", "Tercera Generación", "Mindfulness"],
    duration: "50 minutos",
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>`
  },
  {
    id: "pareja",
    number: "02",
    title: "Terapia de Pareja",
    shortDescription: "Mejoramos comunicación y resolvemos conflictos para reconstruir la confianza y el vínculo en la relación de pareja.",
    description: "Mejoramos comunicación y resolvemos conflictos para reconstruir la confianza. Un espacio neutral donde ambos podéis expresaros y encontrar soluciones juntos.",
    approaches: ["Comunicación efectiva", "Resolución de conflictos", "Reconstrucción"],
    duration: "60 minutos",
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12.375 12.375h.008v.008h-.008v-.008zm0-9.375h.008v.008h-.008V3zm-3.375.375h.008v.008h-.008v-.008zm6.75 0h.008v.008h-.008v-.008z" /></svg>`
  },
  {
    id: "familiar",
    number: "03",
    title: "Terapia Familiar",
    shortDescription: "Intervención sistémica para mejorar la dinámica familiar, comunicación y establecer límites saludables.",
    description: "Intervención para mejorar la dinámica familiar y comunicación entre miembros. Orientación especializada para familias en transiciones o situaciones de crisis.",
    approaches: ["Sistémica", "Comunicación", "Límites"],
    duration: "75 minutos",
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`
  },
  {
    id: "evaluacion",
    number: "04",
    title: "Evaluación Neuropsicológica",
    shortDescription: "Diagnóstico completo mediante pruebas estandarizadas para entender dificultades cognitivas, atencionales o de memoria.",
    description: "Diagnóstico completo mediante entrevistas y pruebas psicométricas estandarizadas. Fundamental para entender dificultades cognitivas, atencionales o de memoria.",
    approaches: ["Entrevista clínica", "Pruebas estandarizadas", "Informe completo"],
    duration: "90-120 minutos",
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>`
  },
  {
    id: "cognitiva",
    number: "05",
    title: "Estimulación Cognitiva",
    shortDescription: "Programas personalizados a domicilio para mantener y mejorar funciones cognitivas en personas mayores.",
    description: "Intervención personalizada a domicilio para personas mayores. Programas diseñados para mantener y mejorar funciones cognitivas como memoria, atención y orientación.",
    approaches: ["A domicilio", "Materiales personalizados", "Seguimiento"],
    duration: "45-60 minutos",
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>`
  }
];

export const mainServices = services.slice(0, 3);
export const allServices = services;

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
