import { Github, Linkedin, Download, Mail, MapPin, Phone } from "lucide-react";


export const navLinks = [
    {
        label: "Inicio",
        url: "/",
    },
    {
        label: "Acerca de",
        url: "/about",
    },
    {
        label: "Portafolio",
        url: "/portfolio",
    },
    {
        label: "Contacto",
        url: "/contact",
    },
];
export const skills = [
    {
        id: 1,
        name: "Front-end Development",
        description:
            "Como desarrollador front-end, convierto diseños creativos en código eficiente y escalable. Me enfoco en crear interfaces visualmente atractivas y optimizadas para el rendimiento, asegurando una experiencia de usuario excepcional.",
        icon: "/icons/service-1.svg",
    },
    {
        id: 2,
        name: "Interfaz De Usuario (UI)",
        description:
            "Mi pasión por el desarrollo UI se refleja en cada interfaz. Combino diseño y código limpio para resultados excepcionales. Me especializo en interfaces intuitivas que mejoran la interacción del usuario.",
        icon: "/icons/service-2.svg",
    },
    {
        id: 3,
        name: "Experiencia De Usuario (UX)",
        description:
            "Mi prioridad es crear experiencias digitales que resuenen con los usuarios. Desarrollo interfaces funcionales e intuitivas basadas en investigación y análisis.",
        icon: "/icons/service-3.svg",
    },
    {
        id: 4,
        name: "Desarollo web responsivo",
        description:
            "Mi experiencia en desarrollo web responsivo me permite crear sitios web adaptables a cualquier dispositivo. Uso técnicas avanzadas de CSS y frameworks modernos para mantener la integridad visual y funcional en cualquier tamaño de pantalla.",
        icon: "/icons/service-4.svg",
    },
    {
        id: 5,
        name: "Prototipado y pruebas de desarrollo",
        description:
            "Me destaco en la creación de prototipos funcionales y pruebas exhaustivas. Mi metodología identifica y resuelve problemas desde el inicio, asegurando que cada característica cumpla con los estándares de calidad antes de la puesta a producción.",
        icon: "/icons/service-5.svg",
    },
    {
        id: 6,
        name: "Codificación adaptada a dispositivos móviles",
        description:
            "Me enfoco en el desarrollo mobile-friendly usando las mejores prácticas de codificación. Domino técnicas de optimización para móviles, asegurando tiempos de carga rápidos y navegación intuitiva.",
        icon: "/icons/service-6.svg",
    },
];

export const portfolios = [
    {
        id: 1,
        title: "App Web de Gestión de Cursos",
        link: "https://github.com/luismanuelcldev/ApicacionWeb_GestionDeCursos",
        images: [
            "/images/portfolio-1.png",
            "/images/portfolio-1.png",
            "/images/portfolio-1.png",
        ],
    },
    {
        id: 2,
        title: "Sitio Web Dr. Danilo Brito V.",
        link: "https://drdanilobrito.com/",
        images: [
            "/images/portfolio-2.png",
            "/images/portfolio-2.png",
            "/images/portfolio-2.png",
        ],
    },
    {
        id: 3,
        title: "REST API Robusta - Prisma ORM",
        link: "https://github.com/luismanuelcldev/ORM_REST_API",
        images: [
            "/images/portfolio-3.png",
            "/images/portfolio-3.png",
            "/images/portfolio-3.png",
        ],
    },
    {
        id: 4,
        title: "RESTful API para Gestión de Vehículos",
        link: "https://github.com/luismanuelcldev/APIREST_NodejsExpressjs_CRUD",
        images: [
            "/images/portfolio-4.png",
            "/images/portfolio-4.png",
            "/images/portfolio-4.png",
        ],
    },
    
];

export const faqs = [
    {
        id: 1,
        question: "¿Qué tecnologías y lenguajes de programación dominas?",
        answer:
            "Mi Stack tecnológico principal incluye Interfaz de Usuario (UI): HTML5, Handlebars (HBS), CSS 3, Tailwind CSS (v3+), Bootstrap (v5+), JavaScript (ES6+), TypeScript (v5+), React (v18+), Redux y  React Router. Back End: NodeJS (v18+), ExpressJS. ORM: Prisma. Bases de datos: SQL | Microsoft SQL Server, Postgresql & NoSQL | MongoDB.",
    },
    {
        id: 2,
        question: "¿Cuál es tu proceso de trabajo para nuevos proyectos?",
        answer:
            "Mi metodología se basa en una fase inicial de planificación detallada, seguida de prototipos y desarrollo iterativo.",
    },
    {
        id: 3,
        question: "¿Cuales herramientas de Desarrollo utilizas?",
        answer:
            "Git, GitHub, npm(administrador de paquetes NodeJS), Prettier, Husky (preconfirmaciones), Postman, Swagger, Seleniun, Figma, Miro, Drawio y Excalidraw.",
    },
    {
        id: 4,
        question: "¿Cómo manejas los proyectos con plazos ajustados?",
        answer:
            "Mi experiencia trabajando bajo metodolodias agiles como SCRUM, y Herramientas como GanttProject me permite gestionar eficientemente proyectos, comprometiendome con la calidad, para optimizar el tiempo y cumplir con las fechas límites establecidas.",
    },
    {
        id: 5,
        question: "¿Cómo te mantienes actualizado con las últimas tecnologías?",
        answer:
            "Me dedico constantemente a la formación continua, participando en conferencias, realizando cursos y comunidades de desarrollo. Esto me permite ofrecer soluciones eficientes y actualizadas.",
    },
];
export const socialLinks = [
    {
        id: 1,
        label: "GitHub",
        icon: Github,
        url: "https://github.com/luismanuelcldev",
    },
    {
        id: 2,
        label: "Linkedin",
        icon: Linkedin,
        url: "https://www.linkedin.com/in/luis-manuel-de-la-cruz-ledesma/",
    },
    {
        id: 3,
        label: "CV",
        icon: Download,
        url: "https://drive.google.com/drive/folders/1b0pKQIdWRzt9ajNj9zFbEcOy8x49I8Ll?usp=sharing",
    },
];
export const contactDetails = [
    {
        id: 1,
        icon: Phone,
        text: "+1 (829)-727-3392",
    },
    {
        id: 2,
        icon: Mail,
        text: "ledesmadelacruzluismanuel@gmail.com",
    },
    {
        id: 3,
        icon: MapPin,
        text: "La Vega, Republica Dominicana",
    },
];

export const education = [
    {
        title: "Tecnólogo Superior en Desarrollo de Aplicaciones Multiplataformas ",
        duration: "Presente",
        description: "Centro de Tecnología y Educación Permanente De La Pontificia Universidad Católica Madre y Maestra (TEP PUCMM).",
        location: "Santiago De Los Caballeros, República Dominicana."
    },
    {
        title: "Club de Programación Competitiva ICPC",
        duration: "(Enero 2024 - Marzo 2024)",
        description: "Pontificia Universidad Católica Madre y Maestra (PUCMM).",
        location: "Santiago De Los Caballeros, República Dominicana."
    },
    {
        title: "Bachiller Técnico en Desarrollo y Administración de Aplicaciones Informáticas.",
        duration: "(Agosto 2017 –  Junio 2021)",
        description: "Politécnico Padre Fantino (PPF).",
        location: "Fantino, Prov. Sánchez Ramírez, República Dominicana."
    },

];

export const timeline = [
    {
        id: 1,
        title: "Desarrollador Backend (Contrato de Prácticas - Remoto)",
        duration: "(Septiembre  2024 – Noviembre 2024)",
        description: {
            line1: "- Responsable del desarrollo y optimización de sistemas internos y bases de datos.",
            line2: "- Implementación de aplicaciones utilizando Express.js y el patrón de diseño MVC, garantizando aplicaciones robustas y bien estructuradas.",
            line3: "- Utilización de Node.js para crear soluciones eficientes y escalables.",
            line4: "- Gestión del control de versiones con GIT, facilitando una colaboración eficiente y un desarrollo ordenado a lo largo del ciclo de vida del software.",
        },
        location: "CYCLOPESOFT SOLUTIONS S.R.L, Santo Domingo, D.N. República Dominicana."
    },

];