export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "¿Cuánto dura una sesión de terapia?",
    answer: "Una sesión de terapia individual o de pareja dura 50 minutos. Es el tiempo estándar que permite profundizar en los temas importantes manteniendo la concentración y el ritmo adecuado."
  },
  {
    question: "¿Con qué frecuencia debo acudir a terapia?",
    answer: "Generalmente recomiendo sesiones semanales, especialmente al principio del proceso. Esta frecuencia permite mantener la continuidad y avanzar de manera consistente. Según vayamos progresando, podemos espaciar las sesiones."
  },
  {
    question: "¿Cuánto tiempo dura el proceso terapéutico?",
    answer: "La duración depende de tus objetivos y de lo que queramos trabajar. Algunas personas logran sus metas en pocas sesiones, mientras que otras prefieren un acompañamiento más prolongado. Lo determinaremos juntos en función de tu evolución."
  },
  {
    question: "¿Es todo lo que digo confidencial?",
    answer: "Absolutamente. La confidencialidad es un pilar fundamental de la terapia. Todo lo que compartas está protegido por el secreto profesional. Solo existen excepciones legales en casos de riesgo grave para ti o para terceros."
  },
  {
    question: "¿Ofreces sesiones online?",
    answer: "Sí, ofrezco sesiones de terapia online para quienes prefieren esta modalidad o no pueden desplazarse a la consulta. Las sesiones online son igual de efectivas y mantienen la misma calidad que las presenciales."
  },
  {
    question: "¿Qué debo hacer si necesito cancelar una cita?",
    answer: "Si necesitas cancelar o cambiar tu cita, te pido que me avises con al menos 24 horas de antelación. De esta manera puedo ofrecer esa hora a otra persona que pueda necesitarla."
  }
];

export function getAllFAQs(): FAQ[] {
  return faqs;
}
