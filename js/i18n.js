(function () {
  'use strict';

  var STORAGE_KEY = 'site-lang';

  var dict = {
    en: {
      nav: { home: 'Home', work: 'Work Experience', expertise: 'Scientific Expertise', downloadCV: 'Download CV', toggleMenu: 'Toggle navigation menu', skipLink: 'Skip to main content', langSwitch: 'Switch to Spanish' },
      footer: { rights: 'References available upon request.' },
      home: {
        docTitle: 'David Revoltós | Gastronomic Sciences Specialist',
        kicker: 'Culinary Sciences · Michelin-Starred Kitchens',
        role: 'Gastronomic Sciences Specialist',
        lede: 'Professional cook and food-science specialist shaping fine-dining experiences across Michelin-starred kitchens in Copenhagen, Madrid and Barcelona. Proactive, disciplined, and driven by culinary innovation.',
        viewWork: 'View Work Experience',
        viewExpertise: 'View Scientific Expertise',
        emailAria: "Email David Revoltós",
        linkedinAria: "David Revoltós on LinkedIn (opens in a new tab)",
        heroAlt: "David Revoltós, in chef's whites, portrait outdoors",
        fact1Num: '5 stars', fact1Label: 'Across Geranium &amp; Paco Roncero',
        fact2Num: '4-year Bachelor', fact2Label: 'Basque Culinary Center University',
        fact3Num: 'Barcelona', fact3Label: 'Based here, open to relocate',
        fact4Num: '3 languages', fact4Label: 'Spanish, Catalan, English',
        quoteHtml: 'I believe great cooking begins where <span>scientific curiosity</span> meets kitchen discipline.',
        item1: 'Working across kitchens in Denmark and Spain has sharpened my ability to adapt quickly to new teams, languages and culinary traditions, while staying disciplined under pressure.',
        item2: "My path has combined rigorous kitchen practice: running stations inside a 3-Michelin-star kitchen, plating tableside for guests, and keeping pace with high-end tasting menus. Alongside that, I've followed a genuine curiosity for the science behind food, from fermentation and enzymology to hydrocolloids and the data and 3D-design tools that let me prototype new techniques.",
        item3: 'My goal is to drive culinary innovation and contribute with passion to every project I join.',
        eduEyebrow: 'Education', eduTitle: 'Formal training in culinary science',
        eduCardEyebrow: '2021-2026 · 4-year program',
        eduCardTitle: "Bachelor's Degree in Culinary Sciences",
        eduCardMeta: 'Basque Culinary Center University',
        eduCardDesc: "A four-year degree pairing professional kitchen training with the scientific study of food (Food Physical Chemistry, Food Technologies and Industrial Processes, Nutrition and Dietetics, Senses). I paused for a year to work as Chef de Partie at Geranium, then returned to complete a Bachelor's Thesis on food-waste fermentation.",
        eduPhotoAlt: "David Revoltós examining a dish during hands-on training at Basque Culinary Center",
        skillsEyebrow: 'Skills', skillsTitle: 'What I bring to a kitchen',
        skillsLede: 'A blend of hospitality, culinary craft and business discipline, built across Michelin-starred kitchens.',
        skill1T: 'Fermentation Techniques', skill1D: 'Enzymatic and microbial fermentation for new ingredients.',
        skill2T: 'Guest Interaction &amp; Service', skill2D: 'Tableside engagement inside high-end dining rooms.',
        skill3T: 'FOH Synergy', skill3D: 'Seamless coordination between kitchen and front of house.',
        skill4T: 'Tableside Dish Presentation', skill4D: 'Interactive plating performed in front of guests.',
        skill5T: 'Inventory Management', skill5D: 'Stock control and waste reduction under pressure.',
        skill6T: 'Culinary Innovation', skill6D: 'Developing original techniques and dishes.',
        skill7T: 'Storytelling Design', skill7D: 'Framing dishes and menus as a guest narrative.',
        skill8T: 'HACCP &amp; Food Safety', skill8D: 'Rigorous hygiene protocol across every station.',
        skill9T: 'Menu Engineering &amp; Recipe Costing', skill9D: 'Balancing creativity with margin and profitability.',
        skill10T: 'P&amp;L &amp; Financial Accounting', skill10D: "Reading and managing a kitchen's financial performance.",
        skill11T: 'Cross-Departmental Collaboration', skill11D: 'Maintaining consistency across kitchen teams and departments.',
        certsEyebrow: 'Certifications', certsTitle: 'Professional certifications',
        cert1T: 'Official Degree Certificate', cert2T: 'Academic Transcript',
        cert3T: 'Food Handler Certificate', cert4T: 'DOP Jerez Certification',
        downloadPdf: 'Download PDF',
        ctaTitle: "Let's create something exceptional together.",
        ctaLede: 'Open to Chef de Partie, R&amp;D and culinary-science roles across fine dining and food innovation. Based in Barcelona, open to relocation.',
        emailLabel: 'Email', phoneLabel: 'Phone', linkedinLabel: 'LinkedIn', locationLabel: 'Location',
        locationValue: 'Barcelona, Spain'
      },
      work: {
        docTitle: 'Work Experience | David Revoltós',
        pageTitle: 'Work Experience',
        lede: 'Four years of hands-on kitchen practice, from a first internship in Barcelona to running stations inside a 3-Michelin-star restaurant in Copenhagen.',
        j1Role: 'R&amp;D Intern &amp; Chef de Partie', j1Dates: 'Feb 2026 – Jul 2026',
        j1B1: "Re-hired with the main purpose of developing the University's Bachelor's Thesis.",
        j1B2: 'Investigated the application of food enzymes.',
        j1B3: 'Developed scalable methods to transform food waste into fermented subproducts, creating solutions for sustainable ingredient production.',
        j1Img1Alt: 'Swirl-molded beetroot gel developed during the thesis research',
        j1Img2Alt: 'Two fermentation bottles fitted with airlocks, one holding beetroot wine, the other a bottle of red wine',
        j2Role: 'Chef de Partie', j2Dates: 'Feb 2024 – Aug 2025',
        j2B1: 'Managed and took responsibility for four different kitchen stations within a rigorous 3-Michelin-star kitchen.',
        j2B2: 'Maintained consistency through team collaboration and cross-departmental collaboration.',
        j2B3: 'Engaged directly with diners during service to perform tableside plating and deliver an elevated, interactive guest experience.',
        j2Img1Alt: "David Revoltós standing in front of the Geranium restaurant sign",
        j2Img2Alt: 'Table setting at Geranium with a plated dish and wine pairing',
        j3Role: 'Intern', j3Dates: 'May 2023 – Jul 2023',
        j3B1: 'Assisted in the meticulous daily preparation and execution of high-end tasting menus in a fast-paced 2-Michelin-star kitchen.',
        j3B2: 'Advanced culinary techniques, discipline and organization.',
        j3Img1Alt: 'Delicate flower-shaped tart dessert plated at Paco Roncero',
        j3Img2Alt: 'Prawn and seaweed dish plated at Paco Roncero',
        j4Role: 'Intern', j4Dates: 'Jun 2022 – Jul 2022',
        j4B1: 'Mise en place and daily menu execution.',
        j4B2: 'Foundational fine-dining skills and rigorous practical demands.',
        j4Img1Alt: "David Revoltós with a fellow chef during his time at Nectari",
        j4Img2Alt: 'Pan-seared fish with seaweed and a light foam sauce plated at Nectari',
        j5Role: "Bachelor's Degree in Culinary Sciences", j5Dates: '2021 – 2026',
        j5B1: 'A four-year program, foundation for every placement above, combining professional kitchen training with the scientific study of food.',
        j5B2: 'Paused for a year to work as Chef de Partie at Geranium before returning to complete the degree.',
        j5Img1Alt: "David Revoltós working alongside a chef instructor at Basque Culinary Center",
        j5Img2Alt: 'Chocolate dessert plated during training at Basque Culinary Center',
        badge3: '3 Michelin stars', badge2: '2 Michelin stars',
        ctaTitle: 'Curious about the science behind the plates?',
        ctaLede: 'See how fermentation, data and 3D design shape my approach to food on the Scientific Expertise page.',
        ctaNextLabel: 'Next', ctaNextValue: 'Explore Scientific Expertise',
        ctaTouchLabel: 'Get in touch'
      },
      sci: {
        docTitle: 'Scientific Expertise | David Revoltós',
        pageTitle: 'Scientific Expertise',
        lede: 'Where the kitchen meets the lab: fermentation science, financial rigor, and the software tools I use to design, measure and report on food.',
        featureEyebrow: "Featured Project · Bachelor's Thesis",
        featureTitle: 'From food waste to fermented innovation',
        featureRole: 'R&amp;D Intern &amp; Chef de Partie · Geranium, Copenhagen · Feb–Jul 2026',
        featureSubtitle: 'Turning kitchen waste into scalable fermented ingredients',
        featureDesc: "Re-hired by Geranium specifically to develop my University Bachelor's Thesis, I investigated the application of food enzymes and developed scalable methods to transform food waste into fermented subproducts, creating solutions for sustainable ingredient production inside a 3-Michelin-star kitchen.",
        thesisAlt: "Cover page of David Revoltós's Final Degree Project thesis, Bioconversion of vegetable food waste",
        tagEnzymology: 'Enzymology', tagFermentationSci: 'Fermentation Science', tagSustainability: 'Sustainability', tagIngredientRD: 'Ingredient R&amp;D',
        downloadThesis: 'Download &amp; Read Full Thesis',
        pillarsEyebrow: 'Areas of Expertise',
        pillarsTitle: 'Three pillars, one discipline',
        pillarsLede: 'Directly from my academic and professional training: the technical range behind the plate.',
        p1Title: 'Food Science &amp; R&amp;D',
        p1Tag1: 'Fermentation &amp; Enzymology', p1Tag2: 'Gastro-Science Machinery', p1Tag3: 'pH &amp; Brix Monitoring',
        p1Tag4: 'HACCP Protocol', p1Tag5: 'Hydrocolloids &amp; Modernist Formulation', p1Tag6: 'Advanced Pastry Formulation',
        p1Cap1: 'Mushroom garum, in a home-made incubator', p1Cap2: 'Mushroom garum, in jars',
        p1Cap3: 'Vegetable vinegars, fermenting', p1Cap4: 'Finished vegetable vinegars',
        p1Cap5: 'Liquefied-vegetable dessert, mise en place', p1Cap6: 'Plated, with a glass of beetroot wine',
        p1Alt1: 'Jars of mushroom garum fermenting inside a home-made incubator',
        p1Alt2: 'Jars of different mushroom garums',
        p1Alt3: 'Labeled jars of vegetable vinegar fermenting, for boiled beet, roasted potato, steamed pumpkin and roasted Jerusalem artichoke, fitted with air pumps',
        p1Alt4: 'Five bottles of finished vegetable vinegar: roasted potato, pumpkin, boiled beetroot, roasted celeriac and Jerusalem artichoke',
        p1Alt5: 'Mise en place for a dessert based on liquefied vegetables, including swirl-molded gels',
        p1Alt6: 'The finished liquefied-vegetable dessert served at the table with a glass of beetroot wine',
        p2Title: 'Software, Data &amp; AI',
        p2Tag1: '3D Design of Custom Molds &amp; Experimental Apparatus', p2Tag2: 'Jamovi (Sensory Analysis &amp; Statistics)',
        p2Tag3: 'Scientific Research &amp; Reporting', p2Tag4: 'Applied AI (Claude)',
        p2Cap1: 'Spiral mold — Blender sculpt', p2Cap2: 'Spiral mold — Fusion 360 print prep', p2Cap3: 'Spiral mold — printed &amp; cast',
        p2Cap4: 'Rose mold — Blender sculpt', p2Cap5: 'Rose mold — Fusion 360 render', p2Cap6: 'Rose mold — printed &amp; cast',
        p2Alt1: 'Spiral mold sculpted in Blender',
        p2Alt2: 'Spiral mold prepared for 3D printing in Fusion 360',
        p2Alt3: 'The 3D-printed spiral mold next to its cast, cream-colored piece',
        p2Alt4: 'Rose mold sculpted in Blender',
        p2Alt5: 'Botanical rose mold modeled in Fusion 360, rendered in red',
        p2Alt6: 'The 3D-printed rose mold with its black cast, next to the open mold lid',
        p3Title: 'Culinary Management',
        p3Tag1: 'P&amp;L &amp; Accounting', p3Tag2: 'Advanced Excel (Costing &amp; Financial Modeling)', p3Tag3: 'Recipe Costing',
        p3Tag4: 'Menu Engineering', p3Tag5: 'Inventory Management', p3Tag6: 'Labor Cost Control', p3Tag7: 'OPEX', p3Tag8: 'CAPEX',
        p3Cap1: 'Multi-year P&amp;L projection', p3Cap2: 'Annual P&amp;L breakdown',
        p3Cap3: 'Revenue &amp; cash flow dashboard', p3Cap4: 'Menu engineering analysis',
        p3Alt1: 'Three-year profit and loss projection spreadsheet with KPI columns',
        p3Alt2: 'Annual profit and loss statement with a cost-distribution donut chart',
        p3Alt3: 'Dashboard of restaurant revenue, occupancy and cash flow charts',
        p3Alt4: 'Menu engineering quadrant analysis spreadsheet',
        ctaTitle: "Let's talk about your kitchen.",
        ctaLede: "Whether it's a fine-dining pass or a food-science lab, I'd love to hear about the project.",
        ctaFullLabel: 'Full details', ctaFullValue: 'Download CV (PDF)'
      },
      notfound: {
        docTitle: 'Page Not Found | David Revoltós',
        title: 'Page not found',
        lede: "The page you're looking for doesn't exist or may have moved.",
        backHome: 'Back to Home'
      }
    },
    es: {
      nav: { home: 'Inicio', work: 'Experiencia Laboral', expertise: 'Experiencia Científica', downloadCV: 'Descargar CV', toggleMenu: 'Alternar menú de navegación', skipLink: 'Saltar al contenido principal', langSwitch: 'Cambiar a inglés' },
      footer: { rights: 'Referencias disponibles a petición.' },
      home: {
        docTitle: 'David Revoltós | Especialista en Ciencias Gastronómicas',
        kicker: 'Ciencias Culinarias · Cocinas con Estrella Michelin',
        role: 'Especialista en Ciencias Gastronómicas',
        lede: 'Cocinero profesional y especialista en ciencia de los alimentos, dando forma a experiencias de alta cocina en restaurantes con estrella Michelin en Copenhague, Madrid y Barcelona. Proactivo, disciplinado e impulsado por la innovación culinaria.',
        viewWork: 'Ver Experiencia Laboral',
        viewExpertise: 'Ver Experiencia Científica',
        emailAria: "Enviar correo a David Revoltós",
        linkedinAria: "David Revoltós en LinkedIn (se abre en una pestaña nueva)",
        heroAlt: "David Revoltós, con chaqueta de cocinero, retrato al aire libre",
        fact1Num: '5 estrellas', fact1Label: 'Entre Geranium y Paco Roncero',
        fact2Num: 'Grado de 4 años', fact2Label: 'Basque Culinary Center University',
        fact3Num: 'Barcelona', fact3Label: 'Vive aquí, abierto a mudarse',
        fact4Num: '3 idiomas', fact4Label: 'Español, catalán, inglés',
        quoteHtml: 'Creo que la gran cocina comienza donde la <span>curiosidad científica</span> se une a la disciplina de cocina.',
        item1: 'Trabajar en cocinas de Dinamarca y España ha agudizado mi capacidad de adaptarme rápidamente a nuevos equipos, idiomas y tradiciones culinarias, manteniendo la disciplina bajo presión.',
        item2: 'Mi trayectoria ha combinado una práctica rigurosa en cocina: llevando partidas dentro de una cocina de 3 estrellas Michelin, emplatando en mesa para los comensales y siguiendo el ritmo de menús degustación de alta gama. Junto a ello, he seguido una curiosidad genuina por la ciencia detrás de los alimentos, desde la fermentación y la enzimología hasta los hidrocoloides y las herramientas de datos y diseño 3D que me permiten prototipar nuevas técnicas.',
        item3: 'Mi objetivo es impulsar la innovación culinaria y contribuir con pasión a cada proyecto en el que participo.',
        eduEyebrow: 'Formación', eduTitle: 'Formación reglada en ciencia culinaria',
        eduCardEyebrow: '2021-2026 · Programa de 4 años',
        eduCardTitle: 'Grado en Ciencias Culinarias',
        eduCardMeta: 'Basque Culinary Center University',
        eduCardDesc: 'Un grado de cuatro años que combina formación profesional en cocina con el estudio científico de los alimentos (Física y Química de los Alimentos, Tecnología de los Alimentos y Procesos Industriales, Nutrición y Dietética, Sentidos). Pausé un año para trabajar como Chef de Partie en Geranium, y después volví para completar un Trabajo de Fin de Grado sobre la fermentación de residuos alimentarios.',
        eduPhotoAlt: "David Revoltós examinando un plato durante una práctica en Basque Culinary Center",
        skillsEyebrow: 'Habilidades', skillsTitle: 'Lo que aporto a una cocina',
        skillsLede: 'Una combinación de hospitalidad, oficio culinario y disciplina empresarial, forjada en cocinas con estrella Michelin.',
        skill1T: 'Técnicas de Fermentación', skill1D: 'Fermentación enzimática y microbiana para nuevos ingredientes.',
        skill2T: 'Interacción con el Cliente y Servicio', skill2D: 'Atención en mesa dentro de salas de alta gama.',
        skill3T: 'Sinergia Sala-Cocina', skill3D: 'Coordinación fluida entre cocina y sala.',
        skill4T: 'Presentación de Platos en Mesa', skill4D: 'Emplatado interactivo realizado frente a los comensales.',
        skill5T: 'Gestión de Inventario', skill5D: 'Control de stock y reducción de desperdicio bajo presión.',
        skill6T: 'Innovación Culinaria', skill6D: 'Desarrollo de técnicas y platos originales.',
        skill7T: 'Diseño Narrativo', skill7D: 'Presentación de platos y menús como una narrativa para el comensal.',
        skill8T: 'APPCC y Seguridad Alimentaria', skill8D: 'Protocolo riguroso de higiene en cada partida.',
        skill9T: 'Ingeniería de Menús y Costeo de Recetas', skill9D: 'Equilibrio entre creatividad, margen y rentabilidad.',
        skill10T: 'Cuenta de Resultados y Contabilidad Financiera', skill10D: 'Lectura y gestión del rendimiento financiero de una cocina.',
        skill11T: 'Colaboración Interdepartamental', skill11D: 'Mantenimiento de la consistencia entre equipos y departamentos de cocina.',
        certsEyebrow: 'Certificaciones', certsTitle: 'Certificaciones profesionales',
        cert1T: 'Certificado Oficial de Grado', cert2T: 'Expediente Académico',
        cert3T: 'Certificado de Manipulador de Alimentos', cert4T: 'Certificación DOP Jerez',
        downloadPdf: 'Descargar PDF',
        ctaTitle: 'Creemos algo excepcional juntos.',
        ctaLede: 'Abierto a puestos de Chef de Partie, I+D y ciencia culinaria en alta cocina e innovación alimentaria. Ubicado en Barcelona, abierto a reubicación.',
        emailLabel: 'Email', phoneLabel: 'Teléfono', linkedinLabel: 'LinkedIn', locationLabel: 'Ubicación',
        locationValue: 'Barcelona, España'
      },
      work: {
        docTitle: 'Experiencia Laboral | David Revoltós',
        pageTitle: 'Experiencia Laboral',
        lede: 'Cuatro años de práctica de cocina, desde unas primeras prácticas en Barcelona hasta llevar partidas dentro de un restaurante de 3 estrellas Michelin en Copenhague.',
        j1Role: 'Becario de I+D y Chef de Partie', j1Dates: 'Feb 2026 – Jul 2026',
        j1B1: 'Recontratado con el objetivo principal de desarrollar el Trabajo de Fin de Grado universitario.',
        j1B2: 'Investigó la aplicación de enzimas alimentarias.',
        j1B3: 'Desarrolló métodos escalables para transformar residuos alimentarios en subproductos fermentados, creando soluciones para la producción sostenible de ingredientes.',
        j1Img1Alt: 'Gel de remolacha moldeado en espiral desarrollado durante la investigación de la tesis',
        j1Img2Alt: 'Dos botellas de fermentación con válvulas de aire, una con vino de remolacha y la otra una botella de vino tinto',
        j2Role: 'Chef de Partie', j2Dates: 'Feb 2024 – Ago 2025',
        j2B1: 'Gestionó y se responsabilizó de cuatro partidas de cocina distintas dentro de una exigente cocina de 3 estrellas Michelin.',
        j2B2: 'Mantuvo la consistencia mediante la colaboración en equipo y entre departamentos.',
        j2B3: 'Interactuó directamente con los comensales durante el servicio para realizar emplatados en mesa y ofrecer una experiencia elevada e interactiva.',
        j2Img1Alt: "David Revoltós de pie frente al cartel del restaurante Geranium",
        j2Img2Alt: 'Mesa puesta en Geranium con un plato emplatado y maridaje de vino',
        j3Role: 'Becario', j3Dates: 'May 2023 – Jul 2023',
        j3B1: 'Colaboró en la meticulosa preparación y ejecución diaria de menús degustación de alta gama en una exigente cocina de 2 estrellas Michelin.',
        j3B2: 'Perfeccionó técnicas culinarias, disciplina y organización.',
        j3Img1Alt: 'Delicada tarta con forma de flor emplatada en Paco Roncero',
        j3Img2Alt: 'Plato de gamba y algas emplatado en Paco Roncero',
        j4Role: 'Becario', j4Dates: 'Jun 2022 – Jul 2022',
        j4B1: 'Mise en place y ejecución diaria de la carta.',
        j4B2: 'Habilidades fundamentales de alta cocina y exigencias prácticas rigurosas.',
        j4Img1Alt: "David Revoltós con un compañero de cocina durante su etapa en Nectari",
        j4Img2Alt: 'Pescado a la plancha con algas y una ligera salsa de espuma emplatado en Nectari',
        j5Role: 'Grado en Ciencias Culinarias', j5Dates: '2021 – 2026',
        j5B1: 'Un programa de cuatro años, base de todas las experiencias anteriores, que combina formación profesional en cocina con el estudio científico de los alimentos.',
        j5B2: 'Pausó un año para trabajar como Chef de Partie en Geranium antes de volver a completar el grado.',
        j5Img1Alt: "David Revoltós trabajando junto a un chef instructor en Basque Culinary Center",
        j5Img2Alt: 'Postre de chocolate emplatado durante la formación en Basque Culinary Center',
        badge3: '3 estrellas Michelin', badge2: '2 estrellas Michelin',
        ctaTitle: '¿Curiosidad por la ciencia detrás de los platos?',
        ctaLede: 'Descubre cómo la fermentación, los datos y el diseño 3D moldean mi enfoque de la gastronomía en la página de Experiencia Científica.',
        ctaNextLabel: 'Siguiente', ctaNextValue: 'Explorar Experiencia Científica',
        ctaTouchLabel: 'Contactar'
      },
      sci: {
        docTitle: 'Experiencia Científica | David Revoltós',
        pageTitle: 'Experiencia Científica',
        lede: 'Donde la cocina se encuentra con el laboratorio: ciencia de la fermentación, rigor financiero y las herramientas de software que utilizo para diseñar, medir e informar sobre los alimentos.',
        featureEyebrow: 'Proyecto Destacado · Trabajo de Fin de Grado',
        featureTitle: 'De los residuos alimentarios a la innovación fermentada',
        featureRole: 'Becario de I+D y Chef de Partie · Geranium, Copenhague · Feb–Jul 2026',
        featureSubtitle: 'Convirtiendo residuos de cocina en ingredientes fermentados escalables',
        featureDesc: 'Recontratado por Geranium específicamente para desarrollar mi Trabajo de Fin de Grado universitario, investigué la aplicación de enzimas alimentarias y desarrollé métodos escalables para transformar residuos alimentarios en subproductos fermentados, creando soluciones para la producción sostenible de ingredientes dentro de una cocina de 3 estrellas Michelin.',
        thesisAlt: 'Portada del Trabajo de Fin de Grado de David Revoltós, Bioconversión de residuos vegetales alimentarios',
        tagEnzymology: 'Enzimología', tagFermentationSci: 'Ciencia de la Fermentación', tagSustainability: 'Sostenibilidad', tagIngredientRD: 'I+D de Ingredientes',
        downloadThesis: 'Descargar y Leer la Tesis Completa',
        pillarsEyebrow: 'Áreas de Especialización',
        pillarsTitle: 'Tres pilares, una disciplina',
        pillarsLede: 'Directamente de mi formación académica y profesional: el rango técnico detrás del plato.',
        p1Title: 'Ciencia de los Alimentos e I+D',
        p1Tag1: 'Fermentación y Enzimología', p1Tag2: 'Maquinaria Gastrocientífica', p1Tag3: 'Monitoreo de pH y Brix',
        p1Tag4: 'Protocolo APPCC', p1Tag5: 'Hidrocoloides y Formulación Modernista', p1Tag6: 'Formulación Avanzada de Pastelería',
        p1Cap1: 'Garum de setas, en una incubadora casera', p1Cap2: 'Garum de setas, en tarros',
        p1Cap3: 'Vinagres vegetales, fermentando', p1Cap4: 'Vinagres vegetales terminados',
        p1Cap5: 'Postre de vegetales licuados, mise en place', p1Cap6: 'Emplatado, con una copa de vino de remolacha',
        p1Alt1: 'Tarros de garum de setas fermentando dentro de una incubadora casera',
        p1Alt2: 'Tarros de distintos garums de setas',
        p1Alt3: 'Tarros etiquetados de vinagre vegetal fermentando, de remolacha hervida, patata asada, calabaza al vapor y aguaturma asada, con bombas de aire',
        p1Alt4: 'Cinco botellas de vinagre vegetal terminado: patata asada, calabaza, remolacha hervida, apionabo asado y aguaturma',
        p1Alt5: 'Mise en place de un postre a base de vegetales licuados, con geles moldeados en espiral',
        p1Alt6: 'El postre de vegetales licuados terminado, servido en mesa con una copa de vino de remolacha',
        p2Title: 'Software, Datos e IA',
        p2Tag1: 'Diseño 3D de Moldes Personalizados y Aparatos Experimentales', p2Tag2: 'Jamovi (Análisis Sensorial y Estadística)',
        p2Tag3: 'Investigación Científica e Informes', p2Tag4: 'IA Aplicada (Claude)',
        p2Cap1: 'Molde espiral — escultura en Blender', p2Cap2: 'Molde espiral — preparación en Fusion 360', p2Cap3: 'Molde espiral — impreso y fundido',
        p2Cap4: 'Molde de rosa — escultura en Blender', p2Cap5: 'Molde de rosa — render en Fusion 360', p2Cap6: 'Molde de rosa — impreso y fundido',
        p2Alt1: 'Molde espiral esculpido en Blender',
        p2Alt2: 'Molde espiral preparado para impresión 3D en Fusion 360',
        p2Alt3: 'El molde espiral impreso en 3D junto a su pieza fundida de color crema',
        p2Alt4: 'Molde de rosa esculpido en Blender',
        p2Alt5: 'Molde botánico de rosa modelado en Fusion 360, renderizado en rojo',
        p2Alt6: 'El molde de rosa impreso en 3D con su pieza fundida en negro, junto a la tapa abierta del molde',
        p3Title: 'Gestión Culinaria',
        p3Tag1: 'Cuenta de Resultados y Contabilidad', p3Tag2: 'Excel Avanzado (Costeo y Modelado Financiero)', p3Tag3: 'Costeo de Recetas',
        p3Tag4: 'Ingeniería de Menús', p3Tag5: 'Gestión de Inventario', p3Tag6: 'Control de Costes Laborales', p3Tag7: 'OPEX', p3Tag8: 'CAPEX',
        p3Cap1: 'Proyección de resultados multianual', p3Cap2: 'Desglose anual de resultados',
        p3Cap3: 'Panel de ingresos y flujo de caja', p3Cap4: 'Análisis de ingeniería de menús',
        p3Alt1: 'Hoja de cálculo de proyección de resultados a tres años con columnas de KPI',
        p3Alt2: 'Cuenta de resultados anual con un gráfico circular de distribución de costes',
        p3Alt3: 'Panel con gráficos de ingresos, ocupación y flujo de caja del restaurante',
        p3Alt4: 'Hoja de cálculo de análisis por cuadrantes de ingeniería de menús',
        ctaTitle: 'Hablemos de tu cocina.',
        ctaLede: 'Ya sea un pase de alta cocina o un laboratorio de ciencia alimentaria, me encantaría conocer el proyecto.',
        ctaFullLabel: 'Detalles completos', ctaFullValue: 'Descargar CV (PDF)'
      },
      notfound: {
        docTitle: 'Página No Encontrada | David Revoltós',
        title: 'Página no encontrada',
        lede: 'La página que buscas no existe o puede haberse movido.',
        backHome: 'Volver al inicio'
      }
    }
  };

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'en';
    } catch (e) {
      return 'en';
    }
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function resolve(langDict, key) {
    var parts = key.split('.');
    var node = langDict;
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return null;
      node = node[parts[i]];
    }
    return node;
  }

  function setText(el, value) {
    for (var i = 0; i < el.childNodes.length; i++) {
      var node = el.childNodes[i];
      if (node.nodeType === 3 && node.nodeValue.trim().length > 0) {
        node.nodeValue = value;
        return;
      }
    }
    el.appendChild(document.createTextNode(value));
  }

  function decodeEntities(str) {
    var el = document.createElement('textarea');
    el.innerHTML = str;
    return el.value;
  }

  function apply(lang) {
    var langDict = dict[lang] || dict.en;

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = resolve(langDict, el.getAttribute('data-i18n'));
      if (value != null) setText(el, decodeEntities(value));
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var value = resolve(langDict, el.getAttribute('data-i18n-html'));
      if (value != null) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var value = resolve(langDict, el.getAttribute('data-i18n-alt'));
      if (value != null) el.setAttribute('alt', decodeEntities(value));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var value = resolve(langDict, el.getAttribute('data-i18n-aria'));
      if (value != null) el.setAttribute('aria-label', decodeEntities(value));
    });

    var doctitleKey = document.documentElement.getAttribute('data-i18n-doctitle');
    if (doctitleKey) {
      var titleValue = resolve(langDict, doctitleKey);
      if (titleValue != null) document.title = decodeEntities(titleValue);
    }

    var toggle = document.querySelector('.lang-toggle');
    if (toggle) {
      var isEs = lang === 'es';
      toggle.textContent = isEs ? 'EN' : 'ES';
      toggle.setAttribute('aria-label', resolve(langDict, 'nav.langSwitch') || '');
      toggle.setAttribute('data-lang', lang);
    }
  }

  function init() {
    var lang = getLang();
    apply(lang);

    var toggle = document.querySelector('.lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('lang') === 'es' ? 'es' : 'en';
        var next = current === 'es' ? 'en' : 'es';
        setLang(next);
        apply(next);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
