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
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="text-xl leading-relaxed text-stone/80 mb-8">La terapia individual es un proceso de autoconocimiento y crecimiento que permite explorar aspectos profundos de nuestra personalidad, emociones y comportamientos. A diferencia de otros enfoques terapéuticos, se centra exclusivamente en ti y tus necesidades específicas.</p>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80" alt="Espacio tranquilo para reflexión" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">Un espacio seguro permite la introspección y el crecimiento personal</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">¿Qué es exactamente la terapia individual?</h2>
      
      <p>Es un espacio confidencial donde, junto con un profesional de la psicología, exploras tus pensamientos, emociones y comportamientos. El objetivo no es solo aliviar el malestar, sino también desarrollar herramientas que te permitan enfrentar los desafíos de la vida de manera más efectiva.</p>
      
      <blockquote class="border-l-4 border-sage pl-6 py-2 my-10 bg-sage/5 rounded-r-lg">
        <p class="text-lg italic text-charcoal mb-2">"El autoconocimiento es el principio de toda transformación. Solo conociéndonos a fondo podemos decidir quién queremos ser."</p>
        <cite class="text-sm text-stone/60 not-italic">— Carl Rogers</cite>
      </blockquote>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Beneficios principales</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-bg-muted p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">🧠 Autoconocimiento</h3>
          <p class="text-sm text-stone/70">Aprendes a conocerte mejor, a entender por qué reaccionas de cierta manera y a identificar patrones de pensamiento que pueden estar limitándote.</p>
        </div>
        <div class="bg-bg-muted p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">😌 Manejo del estrés</h3>
          <p class="text-sm text-stone/70">Desarrollas técnicas específicas para manejar la ansiedad y el estrés de manera efectiva, herramientas que puedes aplicar en tu día a día.</p>
        </div>
        <div class="bg-bg-muted p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">💝 Mejora de relaciones</h3>
          <p class="text-sm text-stone/70">Aunque es una terapia individual, el trabajo personal impacta positivamente en todas tus relaciones interpersonales.</p>
        </div>
        <div class="bg-bg-muted p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">🎯 Toma de decisiones</h3>
          <p class="text-sm text-stone/70">Clarificas tus valores y objetivos, lo que facilita tomar decisiones más alineadas con lo que realmente deseas para tu vida.</p>
        </div>
      </div>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">¿Cuándo es recomendable iniciar terapia?</h2>
      
      <p>No es necesario estar en crisis para buscar ayuda psicológica. Muchas personas inician terapia como una forma de crecimiento personal, para mejorar su calidad de vida o para prevenir problemas futuros. Sin embargo, es especialmente recomendable cuando experimentas:</p>
      
      <ul class="space-y-3 my-6">
        <li class="flex items-start gap-3">
          <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
          <span>Síntomas de ansiedad o depresión</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
          <span>Dificultades en las relaciones personales</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
          <span>Problemas de autoestima</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
          <span>Situaciones de duelo o pérdidas significativas</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></span>
          <span>Estrés crónico o agotamiento</span>
        </li>
      </ul>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80" alt="Persona en consulta de psicología" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">La terapia proporciona herramientas para gestionar las emociones difíciles</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">El primer paso</h2>
      
      <p class="text-lg">Decidir iniciar terapia es ya un acto de valentía y autocuidado. Si estás considerando dar este paso, te invito a contactar para una primera consulta donde podamos conocernos y evaluar cómo puedo ayudarte.</p>
      
      <div class="bg-sage/10 border border-sage/20 rounded-2xl p-8 my-10">
        <p class="text-lg font-medium text-charcoal mb-2">¿Tienes alguna pregunta sobre la terapia?</p>
        <p class="text-stone/70 mb-4">Estoy aquí para resolver tus dudas. La primera consulta es una oportunidad para conocernos sin compromiso.</p>
        <a href="/contact" class="inline-flex items-center gap-2 text-sage font-medium hover:underline">Reservar consulta <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
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
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="text-xl leading-relaxed text-stone/80 mb-8">La comunicación es la base sobre la que se construye toda relación de pareja. Cuando falla, surgen malentendidos, resentimientos y distanciamiento. Cuando funciona, crea intimidad, confianza y conexión profunda.</p>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80" alt="Pareja conversando" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">La comunicación abierta es fundamental para una relación saludable</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">¿Por qué es tan difícil comunicarse?</h2>
      
      <p>A menudo pensamos que comunicarnos es simplemente hablar, pero la comunicación efectiva implica mucho más: escuchar activamente, validar las emociones del otro, expresar nuestras necesidades de forma clara y respetuosa, y estar dispuestos a comprometernos.</p>
      
      <blockquote class="border-l-4 border-sage pl-6 py-2 my-10 bg-sage/5 rounded-r-lg">
        <p class="text-lg italic text-charcoal mb-2">"La calidad de nuestra vida depende de la calidad de nuestra comunicación."</p>
        <cite class="text-sm text-stone/60 not-italic">— Tony Robbins</cite>
      </blockquote>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Señales de que la comunicación necesita atención</h2>
      
      <div class="bg-red-50 border border-red-100 rounded-2xl p-6 my-8">
        <ul class="space-y-3">
          <li class="flex items-start gap-3 text-stone/80">
            <span class="text-red-400 mt-1">⚠</span>
            <span>Las discusiones se repiten sin llegar a resoluciones</span>
          </li>
          <li class="flex items-start gap-3 text-stone/80">
            <span class="text-red-400 mt-1">⚠</span>
            <span>Uno o ambos miembros se sienten no escuchados</span>
          </li>
          <li class="flex items-start gap-3 text-stone/80">
            <span class="text-red-400 mt-1">⚠</span>
            <span>Evitáis ciertos temas por miedo al conflicto</span>
          </li>
          <li class="flex items-start gap-3 text-stone/80">
            <span class="text-red-400 mt-1">⚠</span>
            <span>El silencio se ha convertido en una estrategia de afrontamiento</span>
          </li>
          <li class="flex items-start gap-3 text-stone/80">
            <span class="text-red-400 mt-1">⚠</span>
            <span>Las críticas han sustituido a las quejas constructivas</span>
          </li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Estrategias para mejorar</h2>
      
      <div class="space-y-8 my-8">
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage font-serif text-lg">1</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Escucha activa</h3>
            <p class="text-stone/70">No se trata solo de oír las palabras, sino de entender el mensaje emocional detrás de ellas. Parafrasea lo que tu pareja te dice para confirmar que has entendido correctamente.</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage font-serif text-lg">2</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Mensajes "yo"</h3>
            <p class="text-stone/70">En lugar de decir "tú siempre..." o "tú nunca...", expresa cómo te sientes: "Yo me siento... cuando... porque...". Esto reduce la defensividad y facilita el diálogo.</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage font-serif text-lg">3</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Elegir el momento</h3>
            <p class="text-stone/70">No todas las conversaciones deben tener lugar en cualquier momento. Pide a tu pareja cuándo sería un buen momento para hablar de algo importante.</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage font-serif text-lg">4</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Validar emociones</h3>
            <p class="text-stone/70">Aunque no estés de acuerdo con la postura de tu pareja, puedes validar sus sentimientos. "Entiendo que te sientas así" no significa estar de acuerdo, significa reconocer la legitimidad de sus emociones.</p>
          </div>
        </div>
      </div>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?auto=format&fit=crop&w=1200&q=80" alt="Pareja conectando emocionalmente" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">La validación emocional fortalece los vínculos de pareja</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Cuando la ayuda profesional es necesaria</h2>
      
      <p>A veces, los patrones de comunicación negativos están tan arraigados que es difícil cambiarlos sin ayuda externa. La terapia de pareja proporciona un espacio seguro y estructurado donde aprender nuevas formas de relacionarse.</p>
      
      <div class="bg-sage/10 border border-sage/20 rounded-2xl p-8 my-10">
        <p class="text-charcoal font-medium mb-2">¿Tu relación necesita un impulso?</p>
        <p class="text-stone/70 mb-4">La terapia de pareja puede ayudaros a reconectar y construir una comunicación más sana.</p>
        <a href="/contact" class="inline-flex items-center gap-2 text-sage font-medium hover:underline">Saber más sobre terapia de pareja <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
    `
  },
  "gestion-ansiedad": {
    slug: "gestion-ansiedad",
    title: "Estrategias para gestionar la ansiedad",
    excerpt: "La ansiedad es una respuesta natural que podemos aprender a manejar. Técnicas basadas en evidencia científica para tu día a día.",
    date: "2 Enero 2025",
    dateShort: "2 Ene",
    readTime: "6 min",
    category: "Salud Mental",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="text-xl leading-relaxed text-stone/80 mb-8">La ansiedad es una emoción natural y necesaria. Nos alerta ante peligros potenciales y nos prepara para enfrentar desafíos. Sin embargo, cuando se vuelve excesiva o persistente, puede interferir significativamente con nuestra calidad de vida.</p>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&w=1200&q=80" alt="Persona practicando mindfulness" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">La respiración consciente es una herramienta poderosa contra la ansiedad</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">¿Qué es exactamente la ansiedad?</h2>
      
      <p>Es una respuesta del sistema nervioso que incluye pensamientos preocupantes, sensaciones físicas (como palpitaciones, tensión muscular, dificultad para respirar) y comportamientos de evitación. La ansiedad se vuelve problemática cuando aparece sin una amenaza real o cuando su intensidad es desproporcionada a la situación.</p>
      
      <blockquote class="border-l-4 border-sage pl-6 py-2 my-10 bg-sage/5 rounded-r-lg">
        <p class="text-lg italic text-charcoal mb-2">"No podemos controlar el viento, pero sí ajustar las velas."</p>
        <cite class="text-sm text-stone/60 not-italic">— Proverbio chino</cite>
      </blockquote>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Técnicas respaldadas por la ciencia</h2>
      
      <div class="grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-bg-muted rounded-2xl p-6 text-center">
          <div class="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🫁</span>
          </div>
          <h3 class="font-serif text-lg text-charcoal mb-2">Respiración diafragmática</h3>
          <p class="text-sm text-stone/70">Respirar lenta y profundamente desde el diafragma activa el sistema nervioso parasimpático. Practica: 4 segundos inhalando, 4 manteniendo, 4 exhalando.</p>
        </div>
        
        <div class="bg-bg-muted rounded-2xl p-6 text-center">
          <div class="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">👁</span>
          </div>
          <h3 class="font-serif text-lg text-charcoal mb-2">Grounding o anclaje</h3>
          <p class="text-sm text-stone/70">Cuando la ansiedad te desconecta del presente, usa la técnica 5-4-3-2-1: identifica 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, 1 que saboreas.</p>
        </div>
        
        <div class="bg-bg-muted rounded-2xl p-6 text-center">
          <div class="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">💭</span>
          </div>
          <h3 class="font-serif text-lg text-charcoal mb-2">Reestructuración cognitiva</h3>
          <p class="text-sm text-stone/70">Cuestiona los pensamientos catastróficos. Pregúntate: ¿Cuál es la evidencia? ¿Qué le diría a un amigo? ¿Cuál es el escenario más realista?</p>
        </div>
      </div>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Hábitos que ayudan</h2>
      
      <ul class="space-y-4 my-6">
        <li class="flex items-start gap-4 bg-bg-muted p-4 rounded-xl">
          <span class="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage">🏃</span>
          <div>
            <strong class="text-charcoal block mb-1">Ejercicio regular</strong>
            <span class="text-stone/70 text-sm">Reduce los niveles de cortisol y aumenta las endorfinas. Solo 30 minutos de caminata diaria pueden marcar la diferencia.</span>
          </div>
        </li>
        <li class="flex items-start gap-4 bg-bg-muted p-4 rounded-xl">
          <span class="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage">😴</span>
          <div>
            <strong class="text-charcoal block mb-1">Sueño adecuado</strong>
            <span class="text-stone/70 text-sm">La privación de sueño aumenta significativamente la vulnerabilidad a la ansiedad. Intenta mantener horarios regulares.</span>
          </div>
        </li>
        <li class="flex items-start gap-4 bg-bg-muted p-4 rounded-xl">
          <span class="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage">☕</span>
          <div>
            <strong class="text-charcoal block mb-1">Limitar cafeína y alcohol</strong>
            <span class="text-stone/70 text-sm">Ambos pueden exacerbar los síntomas de ansiedad. Presta atención a cómo te afectan.</span>
          </div>
        </li>
        <li class="flex items-start gap-4 bg-bg-muted p-4 rounded-xl">
          <span class="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center shrink-0 text-sage">🧘</span>
          <div>
            <strong class="text-charcoal block mb-1">Práctica de mindfulness</strong>
            <span class="text-stone/70 text-sm">Entrena la mente para estar en el presente en lugar de anticipar futuros catastróficos.</span>
          </div>
        </li>
      </ul>
      
      <figure class="my-12">
        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80" alt="Persona meditando" class="w-full rounded-2xl shadow-lg" />
        <figcaption class="text-sm text-stone/50 mt-3 text-center">El mindfulness es una práctica que requiere constancia para ver resultados</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">¿Cuándo buscar ayuda profesional?</h2>
      
      <p>Si la ansiedad está afectando tu trabajo, tus relaciones, tu sueño o tu capacidad para disfrutar de la vida, es momento de consultar con un profesional. La terapia cognitivo-conductual ha demostrado ser especialmente efectiva para tratar los trastornos de ansiedad.</p>
      
      <p class="text-lg mt-4">Recuerda: pedir ayuda no es un signo de debilidad, sino de inteligencia y autocuidado.</p>
      
      <div class="bg-sage/10 border border-sage/20 rounded-2xl p-8 my-10">
        <p class="text-charcoal font-medium mb-2">¿La ansiedad te está limitando?</p>
        <p class="text-stone/70 mb-4">La terapia puede proporcionarte herramientas específicas para gestionar la ansiedad y recuperar tu calidad de vida.</p>
        <a href="/contact" class="inline-flex items-center gap-2 text-sage font-medium hover:underline">Solicitar información <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
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
