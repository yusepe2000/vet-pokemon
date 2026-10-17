import charmander from './image/Charmander.webp';
import ligaPoke from './image/liga_poke.webp';
import pikachu from './image/pikachuu.webp';
import machop from './image/machop.webp';
import marshtomp from './image/marshtomp.webp';
import magikarp from './image/magikarp.webp';
import bulbasaur from './image/bulbasaur.webp';
import gengar from './image/gengaar.webp';
import onix from './image/onix.webp';
import jigglypuff from './image/jigglypuff.webp';

const posts = [
  {
    id: 1,
    titulo: 'UN CHARMANDER LLEGÓ CON LA COLA APAGADA Y YA ESTÁ RECUPERADO',
    fecha: '3 sep 2025',
    categoria: 'Urgencias',
    texto: 'El Centro Pokémon recibió de madrugada a un Charmander cuya llama de la cola se había apagado tras una pelea. El equipo trabajó toda la noche y hoy ya está de vuelta con su entrenador, sano y con la llama...',
    image: charmander,
    alt: 'Charmander recuperado'
  },
  {
    id: 2,
    titulo: 'FILA DE ENTRENADORES ESPERA POR CHEQUEOS ANTES DE LA LIGA REGIONAL',
    fecha: '28 ago 2025',
    categoria: 'Cuidados',
    texto: 'Con la Liga Regional a la vuelta de la esquina, el Centro Pokémon amaneció con una fila larga de entrenadores que quieren asegurarse de que sus Pokémon estén al cien antes de competir...',
    image: ligaPoke,
    alt: 'Liga Pokémon'
  },
  {
    id: 3,
    titulo: '¿QUÉ HACER SI TU PIKACHU SE QUEDA SIN ENERGÍA DESPUÉS DE UNA BATALLA?',
    fecha: '22 ago 2025',
    categoria: 'Consejos',
    texto: 'Es normal que después de usar Impactrueno varias veces un Pikachu quede agotado. Te explicamos qué hacemos en el Centro para que recupere sus cargas eléctricas más rápido...',
    image: pikachu,
    alt: 'Pikachu descarga'
  },
  {
    id: 4,
    titulo: 'UN MACHOP SE TORCIÓ UN BRAZO ENTRENANDO SOLO EN LA MONTAÑA',
    fecha: '18 ago 2025',
    categoria: 'Urgencias',
    texto: 'El Machop de un entrenador novato llegó con dolor tras entrenar levantamiento de piedras sin supervisión. Le hicimos reposo y una revisión completa, y ya está mucho mejor...',
    image: machop,
    alt: 'Machop lesionado'
  },
  {
    id: 5,
    titulo: 'POR QUÉ LOS POKÉMON TIPO AGUA NECESITAN HIDRATACIÓN CONSTANTE EN VERANO',
    fecha: '14 ago 2025',
    categoria: 'Cuidados',
    texto: 'Con el calor de estos días, hemos recibido varios casos de Squirtle y Totodile algo decaídos. Te contamos por qué pasa esto y qué revisamos apenas llegan al Centro...',
    image: marshtomp,
    alt: 'Pokémon deshidratado'
  },
  {
    id: 6,
    titulo: 'EL CASO MÁS RARO DE LA SEMANA: UN MAGIKARP QUE NO PARABA DE SALTAR',
    fecha: '10 ago 2025',
    categoria: 'Historias',
    texto: 'Un entrenador trajo a su Magikarp preocupado porque no dejaba de saltar fuera del agua. Después de revisarlo, descubrimos que solo estaba muy emocionado por su próxima evolución...',
    image: magikarp,
    alt: 'Magikarp'
  },
  {
    id: 7,
    titulo: 'UN BULBASAUR PRESENTÓ ALERGIA A UN NUEVO TIPO DE BAYA',
    fecha: '6 ago 2025',
    categoria: 'Nutrición',
    texto: 'Su entrenadora notó que después de comer Bayas Zreza el bulbo de su espalda se veía irritado. En el Centro confirmamos que era una alergia leve y ya le cambiamos la dieta...',
    image: bulbasaur,
    alt: 'Bulbasaur con alergia'
  },
  {
    id: 8,
    titulo: 'TURNO NOCTURNO: ASÍ ATENDEMOS A LOS POKÉMON TIPO FANTASMA',
    fecha: '2 ago 2025',
    categoria: 'Cuidados',
    texto: 'Los Pokémon tipo fantasma como Gengar suelen estar más activos de noche, así que habilitamos un turno especial para revisarlos cuando están más tranquilos y cooperan mejor...',
    image: gengar,
    alt: 'Gengar en revisión nocturna'
  },
  {
    id: 9,
    titulo: 'CÓMO REVISAMOS A UN ONIX CUANDO ES DEMASIADO GRANDE PARA LA CAMILLA',
    fecha: '29 jul 2025',
    categoria: 'Curiosidades',
    texto: 'No todos los días llega un Onix al Centro. Tuvimos que improvisar un espacio afuera para revisarlo completo, ya que ni la sala más grande le quedaba cómoda...',
    image: onix,
    alt: 'Onix'
  },
  {
    id: 10,
    titulo: 'JIGGLYPUFF PIERDE LA VOZ TRAS CANTAR DEMASIADO EN UN CONCURSO',
    fecha: '25 jul 2025',
    categoria: 'Historias',
    texto: 'Después de participar en un concurso de canto que duró casi tres horas, un Jigglypuff llegó afónico. Le recomendamos reposo vocal y ya está cantando de nuevo...',
    image: jigglypuff,
    alt: 'Jigglypuff con la garganta cansada'
  }
];

export default posts;