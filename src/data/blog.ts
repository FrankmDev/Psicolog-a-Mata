export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateShort: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: Record<string, BlogPost> = {
  "beneficios-terapia-individual": {
    slug: "beneficios-terapia-individual",
    title: "Los beneficios de la terapia individual",
    excerpt: "Descubre cómo la terapia individual puede ayudarte a superar obstáculos emocionales, mejorar tu autoestima y alcanzar una vida más plena y satisfactoria.",
    date: "15 Enero 2025",
    dateShort: "15 Ene",
    readTime: "5 min",
    category: "Bienestar",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>La terapia individual es un proceso de autoconocimiento y crecimiento que permite explorar aspectos profundos de nuestra personalidad, emociones y comportamientos. A diferencia de otros enfoques terapéuticos, se centra exclusivamente en ti y tus necesidades específicas.</p>
      
      <h2>¿Qué es exactamente la terapia individual?</h2>
      
      <p>Es un espacio confidencial donde, junto con un profesional de la psicología, exploras tus pensamientos, emociones y comportamientos. El objetivo no es solo aliviar el malestar, sino también desarrollar herramientas que te permitan enfrentar los desafíos de la vida de manera más efectiva.</p>
      
      <h2>Beneficios principales</h2>
      
      <p><strong>Autoconocimiento:</strong> Aprendes a conocerte mejor, a entender por qué reaccionas de cierta manera ante situaciones específicas y a identificar patrones de pensamiento que pueden estar limitándote.</p>
      
      <p><strong>Manejo del estrés y la ansiedad:</strong> Desarrollas técnicas específicas para manejar la ansiedad y el estrés de manera efectiva, herramientas que puedes aplicar en tu día a día.</p>
      
      <p><strong>Mejora de las relaciones:</strong> Aunque es una terapia individual, el trabajo personal impacta positivamente en todas tus relaciones interpersonales.</p>
      
      <p><strong>Toma de decisiones:</strong> Clarificas tus valores y objetivos, lo que facilita tomar decisiones más alineadas con lo que realmente deseas para tu vida.</p>
      
      <h2>¿Cuándo es recomendable iniciar terapia?</h2>
      
      <p>No es necesario estar en crisis para buscar ayuda psicológica. Muchas personas inician terapia como una forma de crecimiento personal, para mejorar su calidad de vida o para prevenir problemas futuros. Sin embargo, es especialmente recomendable cuando experimentas:</p>
      
      <ul>
        <li>Síntomas de ansiedad o depresión</li>
        <li>Dificultades en las relaciones personales</li>
        <li>Problemas de autoestima</li>
        <li>Situaciones de duelo o pérdidas significativas</li>
        <li>Estrés crónico o agotamiento</li>
      </ul>
      
      <h2>El primer paso</h2>
      
      <p>Decidir iniciar terapia es ya un acto de valentía y autocuidado. Si estás considerando dar este paso, te invito a contactar para una primera consulta donde podamos conocer y evaluar cómo puedo ayudarte.</p>
    `
  },
  "comunicacion-pareja": {
    slug: "comunicacion-pareja",
    title: "Mejorar la comunicación en pareja",
    excerpt: "La comunicación efectiva es el pilar de toda relación saludable. Aprende técnicas prácticas para fortalecer el vínculo con tu pareja.",
    date: "8 Enero 2025",
    dateShort: "8 Ene",
    readTime: "7 min",
    category: "Relaciones",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>La comunicación es la base sobre la que se construye toda relación de pareja. Cuando falla, surgen malentendidos, resentimientos y distanciamiento. Cuando funciona, crea intimidad, confianza y conexión profunda.</p>
      
      <h2>¿Por qué es tan difícil comunicarse?</h2>
      
      <p>A menudo pensamos que comunicarnos es simplemente hablar, pero la comunicación efectiva implica mucho más: escuchar activamente, validar las emociones del otro, expresar nuestras necesidades de forma clara y respetuosa, y estar dispuestos a comprometernos.</p>
      
      <h2>Señales de que la comunicación necesita atención</h2>
      
      <ul>
        <li>Las discusiones se repiten sin llegar a resoluciones</li>
        <li>Uno o ambos miembros se sienten no escuchados</li>
        <li>Evitáis ciertos temas por miedo al conflicto</li>
        <li>El silencio se ha convertido en una estrategia de afrontamiento</li>
        <li>Las críticas han sustituido a las quejas constructivas</li>
      </ul>
      
      <h2>Estrategias para mejorar</h2>
      
      <p><strong>Escucha activa:</strong> No se trata solo de oír las palabras, sino de entender el mensaje emocional detrás de ellas. Parafrasea lo que tu pareja te dice para confirmar que has entendido correctamente.</p>
      
      <p><strong>Mensajes "yo":</strong> En lugar de decir "tú siempre..." o "tú nunca...", expresa cómo te sientes: "Yo me siento... cuando... porque...". Esto reduce la defensividad y facilita el diálogo.</p>
      
      <p><strong>Elegir el momento:</strong> No todas las conversaciones deben happen en cualquier momento. Pide a tu pareja cuándo sería un buen momento para hablar de algo importante.</p>
      
      <p><strong>Validar emociones:</strong> Aunque no estés de acuerdo con la postura de tu pareja, puedes validar sus sentimientos. "Entiendo que te sientas así" no significa estar de acuerdo, significa reconocer la legitimidad de sus emociones.</p>
      
      <h2>Cuando la ayuda profesional es necesaria</h2>
      
      <p>A veces, los patrones de comunicación negativos están tan arraigados que es difícil cambiarlos sin ayuda externa. La terapia de pareja proporciona un espacio seguro y estructurado donde aprender nuevas formas de relacionarse.</p>
    `
  },
  "gestion-ansiedad": {
    slug: "gestion-ansiedad",
    title: "Estrategias para gestionar la ansiedad",
    excerpt: "La ansiedad es una respuesta natural, pero cuando interfiere con tu vida diaria, es importante aprender a manejarla. Técnicas basadas en evidencia científica.",
    date: "2 Enero 2025",
    dateShort: "2 Ene",
    readTime: "6 min",
    category: "Salud Mental",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>La ansiedad es una emoción natural y necesaria. Nos alerta ante peligros potenciales y nos prepara para enfrentar desafíos. Sin embargo, cuando se vuelve excesiva o persistente, puede interferir significativamente con nuestra calidad de vida.</p>
      
      <h2>¿Qué es exactamente la ansiedad?</h2>
      
      <p>Es una respuesta del sistema nervioso que incluye pensamientos preocupantes, sensaciones físicas (como palpitaciones, tensión muscular, dificultad para respirar) y comportamientos de evitación. La ansiedad se vuelve problemática cuando aparece sin una amenaza real o cuando su intensidad es desproporcionada a la situación.</p>
      
      <h2>Técnicas respaldadas por la ciencia</h2>
      
      <p><strong>Respiración diafragmática:</strong> Respirar lenta y profundamente desde el diafragma activa el sistema nervioso parasimpático, contrarrestando la respuesta de lucha o huida. Practica: 4 segundos inhalando, 4 segundos manteniendo, 4 segundos exhalando.</p>
      
      <p><strong>Grounding o anclaje:</strong> Cuando la ansiedad te desconecta del presente, usa la técnica 5-4-3-2-1: identifica 5 cosas que puedes ver, 4 que puedes tocar, 3 que puedes oír, 2 que puedes oler y 1 que puedes saborear.</p>
      
      <p><strong>Reestructuración cognitiva:</strong> Cuestiona los pensamientos catastróficos. Pregúntate: ¿Cuál es la evidencia a favor y en contra de este pensamiento? ¿Qué le diría a un amigo en esta situación? ¿Cuál es el escenario más realista?</p>
      
      <h2>Hábitos que ayudan</h2>
      
      <ul>
        <li><strong>Ejercicio regular:</strong> Reduce los niveles de cortisol y aumenta las endorfinas.</li>
        <li><strong>Sueño adecuado:</strong> La privación de sueño aumenta la vulnerabilidad a la ansiedad.</li>
        <li><strong>Limitar cafeína y alcohol:</strong> Ambos pueden exacerbar los síntomas de ansiedad.</li>
        <li><strong>Práctica de mindfulness:</strong> Entrena la mente para estar en el presente en lugar de anticipar futuros catastróficos.</li>
      </ul>
      
      <h2>¿Cuándo buscar ayuda profesional?</h2>
      
      <p>Si la ansiedad está afectando tu trabajo, tus relaciones, tu sueño o tu capacidad para disfrutar de la vida, es momento de consultar con un profesional. La terapia cognitivo-conductual ha demostrado ser especialmente efectiva para tratar los trastornos de ansiedad.</p>
      
      <p>Recuerda: pedir ayuda no es un signo de debilidad, sino de inteligencia y autocuidado.</p>
    `
  }
};

export const blogPostsList = Object.values(blogPosts);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllPosts(): BlogPost[] {
  return blogPostsList;
}
