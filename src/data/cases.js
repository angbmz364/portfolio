const NB = " ";

// Only verified material lives here. Metrics and quotes for the two client
// cases are left out until the real Search Console / GA4 numbers arrive.
export const caseStudies = {
    hospedaje: {
        title: "Albergue Schuler, hospedaje en San Ramón | SaskDev",
        description: "Web del Albergue Schuler: cada habitación, la piscina y el desayuno llevan directo a WhatsApp con la consulta ya escrita.",
        eyebrow: "Hospedaje en Chanchamayo",
        h1: "Un albergue que se consulta desde el celular, en un toque.",
        lead: "Diseñamos la web del Albergue Schuler para que cada habitación, la piscina y el desayuno lleven directo a WhatsApp, con el mensaje de consulta ya escrito.",
        hero: { src: "/agency/albergue-schuler-inicio.webp", alt: "Web del Albergue Schuler, página de inicio con vista aérea del albergue y la piscina", w: 1440, h: 880, pos: "top" },
        context: "Un alojamiento familiar con piscina y vista a las colinas vende con fotos y con confianza. El albergue vivía solo en Facebook: sin web propia, las habitaciones, el desayuno y el contacto quedaban enterrados entre publicaciones.",
        facts: [["Servicios", "Diseño web, arquitectura de contenidos, botones de consulta a WhatsApp, SEO técnico, datos estructurados para Google."]],
        story: [
            ["El reto", "Un visitante que llega desde Google o Facebook quiere tres respuestas rápido: cómo es el lugar, qué incluye y cómo consultar. En Facebook esa información está repartida en publicaciones, y las fotos llegan en baja resolución."],
            ["La solución", "Ordenamos la web por decisiones: primero el alojamiento y la vista, después la piscina y el desayuno, al final la ubicación y el contacto. Cada tarjeta tiene su botón Consultar con un mensaje ya escrito para WhatsApp. Los datos del hospedaje quedaron marcados para Google desde el inicio."],
        ],
        gallery: {
            title: "La página completa",
            cols: 1,
            ar: "auto",
            images: [
                { src: "/agency/albergue-schuler-alojamiento.webp", alt: "Web del Albergue Schuler, sección de alojamiento con habitaciones, piscina y desayuno", w: 1440, h: 1127 },
                { src: "/agency/albergue-schuler-destacados.webp", alt: "Web del Albergue Schuler, banners de piscina al aire libre, desayuno incluido y atención familiar", w: 1440, h: 1104 },
                { src: "/agency/albergue-schuler-ubicacion.webp", alt: "Web del Albergue Schuler, ubicación en el Pasaje Rasquio y pie de página con contacto", w: 1440, h: 1076 },
            ],
        },
        visual: {
            title: "El huésped decide con fotos. La web las ordena.",
            lead: "Fotos grandes de la piscina y la vista, el azul del escudo del albergue para la acción, una sola ruta hacia la consulta.",
        },
        next: "turismo",
        closing: {
            title: "¿Tienes un hospedaje y quieres una web así?",
            msg: "Hola SaskDev, vi el caso del Albergue Schuler y quiero una web así para mi hospedaje.",
        },
    },
    turismo: {
        title: "Chullos Travel Perú, turismo en Cusco | SaskDev",
        description: "Web de Chullos Travel Perú: cada ruta con destino, duración y un botón directo a WhatsApp.",
        eyebrow: "Agencia de turismo en Cusco",
        h1: "Tours que se entienden en un minuto y se reservan en uno.",
        lead: "Diseñamos la web de Chullos Travel Perú para que cada ruta tenga destino, duración y un botón directo a WhatsApp. Sin buscar, sin formularios.",
        hero: { src: "/agency/chullos-inicio.webp", alt: "Web de Chullos Travel Perú, página de inicio con Machu Picchu", w: 1440, h: 901, pos: "top" },
        context: "Una agencia que vende viajes compite con portales y redes. La web tenía que ser lo primero que el viajero ve al buscar Machu Picchu y lo último que necesita antes de escribir.",
        facts: [["Servicios", "Diseño web, arquitectura de rutas, botones a WhatsApp, SEO técnico, analítica web."]],
        story: [
            ["El reto", "Un viajero compara cinco agencias en una tarde. Si no ve qué incluye, cuánto dura y cómo reservar en la primera pantalla, pasa a la siguiente."],
            ["La solución", "Cada ruta es una tarjeta con destino, duración y el botón de consulta con el nombre del tour ya escrito. Las rutas menos pedidas viven en una lista, y los destinos agrupan Cusco, el altiplano y la selva en un toque. La agencia publica solo los precios que confirma."],
        ],
        gallery: {
            title: "Lo más importante de la página",
            cols: 1,
            ar: "auto",
            images: [
                { src: "/agency/chullos-rutas.webp", alt: "Web de Chullos Travel Perú, rutas con tarjetas de Machu Picchu, Valle Sagrado y Montaña de 7 Colores", w: 1440, h: 1433 },
                { src: "/agency/chullos-destinos.webp", alt: "Web de Chullos Travel Perú, destinos del altiplano, la cordillera y la selva amazónica", w: 1440, h: 1034 },
                { src: "/agency/chullos-agencia.webp", alt: "Web de Chullos Travel Perú, sección de la agencia con su equipo de guías", w: 1440, h: 970 },
            ],
        },
        visual: {
            title: "Un destino se vende con una imagen y un precio.",
            lead: "Fotos grandes de cada ruta, precio en la misma línea que el nombre cuando existe, un solo color de acción.",
        },
        next: "centinela",
        closing: {
            title: "¿Vendes viajes y quieres una web que venda por ti?",
            msg: "Hola SaskDev, vi el caso de la agencia de turismo y quiero una web así para mi negocio.",
        },
    },
    centinela: {
        title: "Centinela, detección de mosca de la fruta | SaskDev",
        description: "Centinela es un prototipo de visión por computadora que detecta la mosca sudamericana de la fruta en el campo, sin internet.",
        eyebrow: "Proyecto propio, visión por computadora",
        h1: "Detectamos la mosca de la fruta en el campo, sin depender de internet.",
        lead: "Centinela es una estación de monitoreo para cultivos de cítricos. Una cámara revisa las trampas, un modelo de inteligencia artificial identifica la mosca sudamericana de la fruta y avisa al agricultor antes de que el daño crezca.",
        hero: { src: "/agency/centinela-trampa-hero.webp", alt: "Trampa de monitoreo de mosca de la fruta colgada de un árbol de cítricos de noche", w: 1204, h: 1599, pos: "50% 55%" },
        stats: {
            items: [
                [`99,01${NB}%`, "exactitud en el conjunto de prueba"],
                [`98,8${NB}%`, "moscas objetivo detectadas (sensibilidad)"],
                ["4.041", "imágenes para entrenar y probar"],
                ["0,9976", "ROC AUC en la prueba"],
            ],
            note: "Resultados medidos sobre 608 imágenes de prueba que el modelo no vio al entrenar.",
        },
        context: `La mosca sudamericana de la fruta (Anastrepha fraterculus) causa pérdidas de entre 15${NB}% y 30${NB}% de la producción anual en el Perú. En cítricos, la infestación puede llegar al 45${NB}%.`,
        values: [
            ["Funciona en el campo", "La inferencia corre en la estación. No necesita internet ni una nube."],
            ["Preciso en pruebas", `99,01${NB}% de exactitud. De 333 moscas objetivo, el modelo acertó en 329.`],
            ["Hardware económico", "Corre en una Raspberry Pi 4 con cámara, pensado para costar lo menos posible."],
            ["Avisa a tiempo", `Cuando la confianza supera el 75${NB}%, envía una alerta para que el agricultor actúe.`],
        ],
        facts: [
            ["Servicios", "Visión por computadora, Edge AI, alertas automáticas, diseño de la estación de monitoreo."],
            ["Tecnologías", "Python, PyTorch, MobileNetV3-small, OpenCV, scikit-learn, Raspberry Pi 4."],
        ],
        story: [
            ["El reto", "Revisar trampas a mano es lento, y una alerta tardía significa fruta perdida. Además, la mosca objetivo se parece a otros insectos. El modelo necesitaba distinguirla con fotos reales, de baja calidad y de muchas fuentes distintas."],
            ["La solución", "Entrenamos MobileNetV3-small con transfer learning. El backbone quedó congelado y solo se entrenó el clasificador. Los datos combinan el dataset Dryad, IP102 y fotos de campo con licencia Creative Commons. El modelo final se entrena una sola vez y se exporta para correr localmente."],
            ["El resultado", `El modelo final alcanzó 99,01${NB}% de exactitud y una sensibilidad de 98,8${NB}% sobre la mosca objetivo. Tiene 4 falsos negativos de 333 moscas en la prueba y 2 falsos positivos sobre 275 imágenes de otros insectos. El proyecto sigue en prototipo: falta validarlo en parcelas reales durante una temporada completa.`],
        ],
        gallery: {
            cols: 3,
            ar: "3/4",
            images: [
                { src: "/agency/centinela-trampa-detalle.webp", alt: "Trampa amarilla con cebo dentro de un árbol de cítricos", w: 1200, h: 1600 },
                { src: "/agency/centinela-trampa-huerto.webp", alt: "Trampa colgada en un huerto de cítricos", w: 1200, h: 1600 },
                { src: "/agency/centinela-moscas-tablero.webp", alt: "Moscas capturadas sobre el tablero adhesivo de una trampa", w: 966, h: 1024 },
            ],
        },
        visual: {
            pull: "Cada trampa es un sensor. El modelo solo cuenta lo que la trampa ve.",
            title: "Lo que ve la trampa, lo que ve el modelo.",
            lead: "Una estación sencilla, pensada para el huerto: trampa, cámara y una caja de inferencia. Sin pantallas en el campo, solo una alerta cuando hace falta.",
            images: [
                { src: "/agency/centinela-trampa-cerca.webp", alt: "Trampa de monitoreo vista de cerca, con el cebo sobre el tablero adhesivo", w: 900, h: 1600 },
                { src: "/agency/centinela-trampa-colgada.webp", alt: "Trampa de monitoreo colgada de una rama en un huerto de cítricos", w: 768, h: 1024 },
            ],
            cols: 2,
            ar: "4/5",
        },
        next: "hospedaje",
        closing: {
            title: "¿Tienes un cultivo que quieras monitorear?",
            msg: "Hola SaskDev, vi el caso de Centinela y quiero conversar sobre monitoreo en mi cultivo.",
        },
    },
};

export const nextLabel = {
    hospedaje: "Hospedaje: Albergue Schuler",
    turismo: "Turismo: Chullos Travel Perú",
    centinela: "Proyecto propio: Centinela",
};
