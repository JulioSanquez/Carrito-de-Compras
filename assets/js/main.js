import { activeProduct } from "./components/activeProduct.js";
import { cartMenu } from "./components/cartMenu.js";
import { darkTheme } from "./components/darkTheme.js";
import { headerScroll } from "./components/headerScroll.js";
import { load } from "./components/load.js";
import { navMenu } from "./components/navMenu.js";
import { sectionActive } from "./components/sectionActive.js";
import { cart } from "./components/cart.js";
import { carrusel } from "./components/carrusel.js";

const db = [
  {
    id: 1,
    name: "Kirby and the Forgotten Land",
    description:
      "Toma control de la bola rosada conocida como Kirby y muévete con libertad en escenarios en 3D mientras descubres un misterioso mundo con estructuras abandonadas de una civilización pasada… ¡¿como un centro comercial?!,¡Respira profundamente y prepárate para una aventura inolvidable!",
    price: 1099,
    image: "assets/img/featured1.png",
    imageHover: "assets/img/hover-featured1.png",
    category: "Nintendo Switch",
    quantity: 10,
    offer: true,
  },
  {
    id: 2,
    name: "Super Mario Odyssey™",
    description:
      "Explora increíbles lugares lejos del reino Champiñón al unirte a Mario y su nuevo amigo Cappy en una increíble aventura al mejor estilo trotamundos en 3D. Usa asombrosas habilidades como: el poder de capturar y controlar objetos, animales y enemigos; para conseguir energilunas necesarias para recargar la nave Odyssey y salvar a la princesa Peach de los planes de boda de Bowser",
    price: 1099,
    image: "assets/img/featured2.png",
    imageHover: "assets/img/hover-featured2.png",
    category: "Nintendo Switch",
    quantity: 10,
    offer: false,
  },
  {
    id: 3,
    name: "The Legend of Zelda: Breath of the Wild",
    description:
      "The Legend of Zelda: Breath of the Wild es la nueva aventura de acción de Nintendo para Wii U y Nintendo Switch que nos presenta el título más ambicioso de la saga con un mundo abierto por explorar y en el que realizar todo tipo de acciones como escalar además de otras clásicas como nadar o montar a caballo.",
    price: 1099,
    image: "assets/img/featured3.png",
    imageHover: "assets/img/hover-featured3.png",
    category: "Nintendo Switch",
    quantity: 10,
    offer: false,
  },
  {
    id: 4,
    name: "Super Smash Bros. Ultimate",
    description:
      "Un auténtico duelo de titanes de los videojuegos que podrás jugar donde, cuando y como quieras:",
    price: 1099,
    image: "assets/img/featured4.png",
    imageHover: "assets/img/hover-featured4.png",
    category: "Nintendo Switch",
    quantity: 10,
    offer: true,
  },
  {
    id: 5,
    name: "Mario Kart™ 8 Deluxe",
    description:
      "¡Calienta motores en la versión definitiva de Mario Kart™ 8 y juega donde y cuando quieras! Compite con tus amigos en carreras o en el modo batalla, que incluye circuitos nuevos y otros ya conocidos. Juega en el modo local y en 1080p en partidas de hasta 4 jugadores en el modo televisor. Todos los circuitos de la versión de Wii U, incluyendo el contenido descargable, están disponibles. Además, ¡los inklings aparecen como personajes invitados junto con otro personajes de juegos anteriores, como el Rey Bú, Huesitos y Bowser Jr!",
    price: 1099,
    image: "assets/img/featured5.png",
    imageHover: "assets/img/hover-featured5.png",
    category: "Nintendo Switch",
    quantity: 10,
    offer: false,
  },
  {
    id: 6,
    name: "Pokémon™ Legends: Arceus",
    description:
      "Prepárate para un nuevo tipo de aventura en Pokémon™ Legends: Arceus, un nuevo juego desarrollado por Game Freak que combina elementos de acción y exploración con las bases de juego de rol de la serie Pokémon. Embárcate en una serie de misiones en la antigua región de Hisui. Explora territorios llenos de naturaleza para atrapar Pokémon salvajes al observar y aprender su comportamiento, acercarte a ellos con sumo cuidado y lanzar una Poké Ball™ bien dirigida. También podrás lanzar la Poké Ball que contiene a tu Pokémon cerca de un Pokémon salvaje y el combate se iniciará automáticamente. Viaja a través de tierra, mar y cielo a lomos de un Pokémon para explorar cada rincón de la región de Hisui.",
    price: 1099,
    image: "assets/img/featured6.png",
    imageHover: "assets/img/hover-featured6.png",
    category: "Nintendo Switch",
    quantity: 10,
    offer: false,
  },
  {
    id: 7,
    name: "Sonic Frontiers",
    description:
      "¡Los mundos chocan en la nueva aventura de alta velocidad de Sonic the Hedgehog! En busca de las esmeraldas del Caos desaparecidas, Sonic se queda varado en una antigua isla repleta de criaturas inusuales. Combate contra hordas de poderosos enemigos mientras exploras un impresionante mundo de acción, aventura y misterio. Acelera hasta nuevas alturas y experimenta la emoción de la libertad de plataformas en zona abierta a alta velocidad mientras corres por las cinco enormes islas Starfall. Lánzate a la aventura, empuña el poder de los Antiguos y lucha para detener a estos nuevos y misteriosos enemigos. ¡Te damos la bienvenida a la evolución de los juegos de Sonic!.Experimenta el nuevo sistema de plataformas de zona abierta",
    price: 1099,
    image: "assets/img/featured7.png",
    imageHover: "assets/img/hover-featured7.png",
    category: "Nintendo Switch",
    quantity: 10,
    offer: true,
  },
  {
    id: 8,
    name: "Animal Crossing™: New Horizons",
    description:
      "Escapa a una isla desierta y crea tu propio paraíso mientras exploras, creas y personalizas en el juego Animal Crossing: New Horizons. Tu isla cuenta con riquezas naturales que podrás utilizar para construir de todo, desde herramientas hasta objetos que harán tu vida más placentera. Podrás cazar insectos al amanecer, decorar tu pequeño paraíso durante el día o disfrutar del atardecer en la playa mientras pescas en el océano. La hora del día y la estación coinciden con las de la vida real, así que cada día en la isla es una oportunidad para encontrar y descubrir sorpresas.",
    price: 1099,
    image: "assets/img/featured8.png",
    imageHover: "assets/img/hover-featured8.png",
    category: "Nintendo Switch",
    quantity: 10,
    offer: false,
  },
  {
    id: 9,
    name: "God of War Ragnarök",
    description:
      "Embárcate en un épico y cordial viaje mientras Kratos y Atreus luchan por aferrarse y soltar. Desde Santa Monica Studio llega la secuela del aclamado por la crítica God of War (2018). Fimbulvetr ya está en camino. Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo. En el camino explorarán paisajes increíbles y míticos, y se enfrentarán a aterradores enemigos en la forma de dioses nórdicos y monstruos. La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos.",
    price: 1099,
    image: "assets/img/featured9.png",
    imageHover: "assets/img/hover-featured9.png",
    category: "Play Station 5",
    quantity: 10,
    offer: false,
  },
  {
    id: 10,
    name: " EA SPORTS™ FIFA 22",
    description:
      "En  EA SPORTS™ FIFA 22,  cada momento en el campo de juego se amplifica con  HyperMotion, una tecnología de juego diseñada para aprovechar la potencia de la PlayStation 5. Con la integración de la captura avanzada de partidos 11v11 y el aprendizaje automático, HyperMotion brinda a FIFA 22 datos de movimiento real en tiempo real provenientes de jugadores profesionales en partidos de alta intensidad para obtener la experiencia de juego más realista, eficaz y fluida en la historia de FIFA. ",
    price: 1099,
    image: "assets/img/featured10.png",
    imageHover: "assets/img/hover-featured10.png",
    category: "Play Station 5",
    quantity: 10,
    offer: false,
  },
  {
    id: 11,
    name: "Madden NFL 22",
    description:
      "Madden NFL 22 es todo lo que amas de la NFL inyectado en cada modo mediante el nuevo día del partido dinámico. Tanto si estás haciendo una estrategia para un encuentro en el modo renovado de franquicia o a punto de jugar un cara a cara en Juega ahora o compitiendo online en Madden Ultimate Team, sentirás que el día de partido dinámico afecta las mecánicas en todas partes de Madden NFL 22.",
    price: 1099,
    image: "assets/img/featured11.png",
    imageHover: "assets/img/hover-featured11.png",
    category: "Play Station 5",
    quantity: 10,
    offer: false,
  },
  {
    id: 12,
    name: "Persona 5 Royal",
    description:
      "Vuelve a unirte a los Ladrones Fantasma en una versión extendida y reelaborada del aclamado juego de rol.Como ampliación del lanzamiento original de 2017, Persona 5 Royal viene repleto de nuevos personajes, confidentes, historia y ubicaciones, además de incluir una nueva mecánica de gancho para acceder de forma sigilosa a áreas nunca vistas.Explora Tokio, desbloquea nuevos Personas (demonios de las mazmorras de ensueño que lucharán para ti), personaliza la Guarida de los Ladrones, descubre una nueva historia añadida, nuevas cinemáticas, finales alternativos y mucho más.Persona 5 Royal mantiene su distintivo estilo visual, mientras que el compositor nominado a varios premios, Shoji Meguro, vuelve con una banda sonora totalmente nueva. ",
    price: 1099,
    image: "assets/img/featured12.png",
    imageHover: "assets/img/hover-featured12.png",
    category: "Play Station 5",
    quantity: 10,
    offer: true,
  },
  {
    id: 13,
    name: "Final Fantasy VII Remake",
    description:
      "Final Fantasy VII Remake, una reimaginación moderna de uno de los juegos más icónicos de todos los tiempos, aprovecha la tecnología más reciente para recrear y expandir la aventura RPG legendaria de Square Enix para la generación actual.",
    price: 1099,
    image: "assets/img/featured13.png",
    imageHover: "assets/img/hover-featured13.png",
    category: "Play Station 5",
    quantity: 10,
    offer: false,
  },
  {
    id: 14,
    name: "Crash Bandicoot 4: It's About Time",
    description:
      "Neo Cortex y N. Tropy vuelven a hacer de las suyas y lanzan una ofensiva total no solo contra este universo, sino que para todo el multiverso. Crash y Coco llegan para salvar el día reuniendo las cuatro máscaras cuánticas y torciendo las reglas de la realidad.",
    price: 1099,
    image: "assets/img/featured14.png",
    imageHover: "assets/img/hover-featured14.png",
    category: "Play Station 5",
    quantity: 10,
    offer: false,
  },
  {
    id: 15,
    name: "Grand Theft Auto V",
    description:
      "Bienvenidos a Los Santos. Experimenta los éxitos de taquilla Grand Theft Auto V y GTA Online, ahora actualizados para PlayStation 5 con imágenes impresionantes, carga más rápida, gatillos adaptativos, respuesta háptica, audio 3D Tempest y más, además de contenido exclusivo para los jugadores de GTA Online.",
    price: 1099,
    image: "assets/img/featured15.png",
    imageHover: "assets/img/hover-featured15.png",
    category: "Play Station 5",
    quantity: 10,
    offer: false,
  },
  {
    id: 16,
    name: "The Last of Us™ Part I",
    description:
      "Perdura y sobrevive. Revive el amado juego que lo comenzó todo, reconstruido para la consola PlayStation®5. Conoce la emocionante historia y a los entrañables personajes de The Last of Us, ganador de más de 200 premios del Juego del año. En una civilización devastada, donde los infectados y los empedernidos sobrevivientes proliferan, Joel, un protagonista cansado, es contratado para rescatar de contrabando a una niña de 14 años llamada Ellie de una zona de cuarentena militar. Sin embargo, lo que comienza como un pequeño trabajo pronto se transforma en una brutal travesía por todo el país.Incluye la historia completa para un solo jugador de The Last of Us y el aclamado capítulo de precuela, Left Behind, que explora los eventos que cambiaron para siempre las vidas de Ellie y su mejor amiga, Riley.",
    price: 1099,
    image: "assets/img/featured16.png",
    imageHover: "assets/img/hover-featured16.png",
    category: "Play Station 5",
    quantity: 10,
    offer: false,
  },
  {
    id: 17,
    name: "Halo Infinite",
    description:
      "Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries.",
    price: 1099,
    image: "assets/img/featured17.png",
    imageHover: "assets/img/hover-featured17.png",
    category: "Xbox",
    quantity: 10,
    offer: false,
  },
  {
    id: 18,
    name: "Cuphead",
    description:
      "Cuphead es un juego clásico de acción de disparos muy enfocado en batallas de jefes. Inspirado en las caricaturas de 1930, las imágenes y el audio se crearon de forma minuciosa con las mismas técnicas de la era, esto es, animación tradicional a mano, fondos de marca de agua y grabaciones originales de jazz.",
    price: 1099,
    image: "assets/img/featured18.png",
    imageHover: "assets/img/hover-featured18.png",
    category: "Xbox",
    quantity: 10,
    offer: false,
  },
  {
    id: 19,
    name: "Forza Horizon 5",
    description:
      "TU AVENTURA HORIZON POR EXCELENCIA. ¡Tu aventura Horizon por excelencia te espera! Explora los dinámicos paisajes de mundo abierto y en constante evolución de México con una acción de conducción ilimitada y divertida en cientos de los mejores autos del mundo.",
    price: 1099,
    image: "assets/img/featured19.png",
    imageHover: "assets/img/hover-featured19.png",
    category: "Xbox",
    quantity: 10,
    offer: false,
  },
  {
    id: 20,
    name: "MODERN WARFARE® II",
    description:
      "MODERN WARFARE® II CONECTARÁ CON LA NUEVA EXPERIENCIA DE WARZONE™, QUE ELEVARÁ EL GÉNERO BATTLE ROYALE AL SIGUIENTE NIVEL CON UNA NUEVA ÁREA DE JUEGO Y UN MODO DE TERRENO DE PRUEBAS. PREPÁRATE PARA UN CALENDARIO ABARROTADO DE CONTENIDO POSLANZAMIENTO CON NUEVOS MAPAS, MODOS, EVENTOS DE TEMPORADA, CELEBRACIONES DE LA COMUNIDAD Y MUCHO MÁS.",
    price: 1099,
    image: "assets/img/featured20.png",
    imageHover: "assets/img/hover-featured20.png",
    category: "Xbox",
    quantity: 10,
    offer: false,
  },
  {
    id: 21,
    name: "F1® 22",
    description:
      "FIA FORMULA 2™ CHAMPIONSHIP. Emula a tus héroes en la desafiante Formula 2™ con la temporada 2022 y sus equipos y pilotos. Compite como uno de los 22 pilotos de la parrilla, incluyendo el campeón de 2022 FIA Formula 2™, Felipe Drugovich, o los novatos Logan Sargeant y Jack Doohan, en una temporada de 14 rondas con Esprint de F2™. Ya disponible para todo el mundo.",
    price: 1099,
    image: "assets/img/featured21.png",
    imageHover: "assets/img/hover-featured21.png",
    category: "Xbox",
    quantity: 10,
    offer: false,
  },
  {
    id: 22,
    name: "Microsoft Flight Simulator ",
    description:
      "Microsoft Flight Simulator constituye la próxima generación de una de las series de simulación más queridas. Desde aviones ligeros hasta aviones a reacción de fuselaje ancho, podrás pilotar impresionantes aeronaves muy detalladas en un mundo increíblemente realista.",
    price: 1099,
    image: "assets/img/featured22.png",
    imageHover: "assets/img/hover-featured22.png",
    category: "Xbox",
    quantity: 10,
    offer: false,
  },
  {
    id: 23,
    name: "Gears 5",
    description:
      "Con la llegada de la guerra total, Kait Diaz escapa para investigar su conexión con el enemigo y descubrir el verdadero peligro para Sera: ella misma.Las nuevas funciones de campaña te permiten llevar a tu personaje y diseños de armas a partidas nuevas y disfrutar de dificultades y modificadores adicionales.",
    price: 1099,
    image: "assets/img/featured23.png",
    imageHover: "assets/img/hover-featured23.png",
    category: "Xbox",
    quantity: 10,
    offer: false,
  },
  {
    id: 24,
    name: "Fortnite",
    description:
      "Este juego de Fortnite es prácticamente como Battle Royale, pero sin construcción. Los jugadores disponen del escudo total recargable como método de defensa para que los ayude a mantenerse a cubierto. ¡Luchad con obstinación y pasad a la ofensiva!",
    price: 1099,
    image: "assets/img/featured24.png",
    imageHover: "assets/img/hover-featured24.png",
    category: "Xbox",
    quantity: 10,
    offer: false,
  },
];

const insertarInfo = function (offer, sliderMessage) {
  // console.log(offer)
  let html = `    
    <h1 class="slider__title"><span class='resaltar'>NOVIEMBRE:</span> <br> ${
      offer.name
    }</h1>
    <h2 class="slider__title" style="margin:0;">Descripción:</h2>
    <p class="slider__description">
      ${offer.description}
    </p>
    <span class="slider__price">${numberToCurrency(offer.price * 0.85)}</span>
    `;
  sliderMessage.innerHTML = html;
};

const numberToCurrency = function (value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

const funciones = { insertarInfo, numberToCurrency };

window.addEventListener("load", function () {
  load();
});

document.addEventListener("DOMContentLoaded", function () {
  darkTheme();
  headerScroll();
  navMenu();
  cartMenu();
  sectionActive();
  activeProduct();
  mixitup(".products__content", {
    selectors: {
      target: ".products__card",
    },
    animation: {
      duration: 300,
    },
  }).filter("all");
  cart(db, funciones);
  carrusel(db, funciones);
});

// const products2 = document.getElementById("products");
// console.log(products2);

// products2.addEventListener("mouseover", (e) => {
//   if (e.target.matches(".products__img")) {
//     e.target.src = db.filter((d) =>
//       e.target.src.includes(d.image)
//     )[0].imageHover;
//   }
// });

// products2.addEventListener("mouseout", (e) => {
//   if (e.target.matches(".products__img")) {
//     e.target.src = db.filter((d) =>
//       e.target.src.includes(d.imageHover)
//     )[0].image;
//   }
// });
