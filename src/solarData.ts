export type Moon = {
  name: string;
  diameter: number;
  orbit: number;
};

export type SolarBody = {
  id: string;
  name: string;
  type: string;
  diameter: number;
  temperature: number;
  gravity: number;
  composition: string;
  orbit: number;
  moonCount: number | null;
  moons: Moon[];
};

// IAU-recognized satellites, checked against NASA/JPL on 2026-11-12.
// Totals are independent of the selected moons with comparison data below.
export const moonCountReference = {checkedAt: '12/11/2026', source: 'https://ssd.jpl.nasa.gov/sats/discovery.html'};

const rocky = 'Planeta rochoso';
const gas = 'Gigante gasoso';
const ice = 'Gigante de gelo';

export const planets: SolarBody[] = [
  {
    id: 'mercury', name: 'Mercúrio', type: rocky, diameter: 4879, temperature: 167,
    gravity: 3.7, composition: 'Rochas de silicato e núcleo rico em ferro',
    orbit: 57_900_000, moonCount: 0, moons: [],
  },
  {
    id: 'venus', name: 'Vênus', type: rocky, diameter: 12104, temperature: 464,
    gravity: 8.9, composition: 'Rochas e metais, com atmosfera rica em CO₂',
    orbit: 108_200_000, moonCount: 0, moons: [],
  },
  {
    id: 'earth', name: 'Terra', type: rocky, diameter: 12742, temperature: 15,
    gravity: 9.81, composition: 'Rochas e metais',
    orbit: 149_600_000, moonCount: 1, moons: [{ name: 'Lua', diameter: 3475, orbit: 384_400 }],
  },
  {
    id: 'mars', name: 'Marte', type: rocky, diameter: 6779, temperature: -65,
    gravity: 3.7, composition: 'Rochas de silicato, ferro e outros metais',
    orbit: 228_000_000, moonCount: 2, moons: [
      { name: 'Fobos', diameter: 22.2, orbit: 9376 },
      { name: 'Deimos', diameter: 12.4, orbit: 23463 },
    ],
  },
  {
    id: 'jupiter', name: 'Júpiter', type: gas, diameter: 139822, temperature: -110,
    gravity: 23.1, composition: 'Principalmente hidrogênio e hélio',
    orbit: 778_500_000, moonCount: 115, moons: [
      { name: 'Io', diameter: 3643, orbit: 421_800 },
      { name: 'Europa', diameter: 3122, orbit: 671_100 },
      { name: 'Ganimedes', diameter: 5262, orbit: 1_070_400 },
      { name: 'Calisto', diameter: 4821, orbit: 1_882_700 },
    ],
  },
  {
    id: 'saturn', name: 'Saturno', type: gas, diameter: 116464, temperature: -140,
    gravity: 9, composition: 'Principalmente hidrogênio e hélio',
    orbit: 1_432_000_000, moonCount: 293, moons: [
      { name: 'Encélado', diameter: 504, orbit: 238_000 },
      { name: 'Reia', diameter: 1528, orbit: 527_100 },
      { name: 'Titã', diameter: 5150, orbit: 1_221_900 },
    ],
  },
  {
    id: 'uranus', name: 'Urano', type: ice, diameter: 50724, temperature: -195,
    gravity: 8.7, composition: 'Água, amônia e metano, com atmosfera de hidrogênio e hélio',
    orbit: 2_867_000_000, moonCount: 29, moons: [
      { name: 'Miranda', diameter: 472, orbit: 129_900 },
      { name: 'Ariel', diameter: 1158, orbit: 190_900 },
      { name: 'Titânia', diameter: 1578, orbit: 436_300 },
    ],
  },
  {
    id: 'neptune', name: 'Netuno', type: ice, diameter: 49244, temperature: -200,
    gravity: 11, composition: 'Água, amônia e metano, com atmosfera de hidrogênio e hélio',
    orbit: 4_515_000_000, moonCount: 16, moons: [
      { name: 'Tritão', diameter: 2705, orbit: 354_800 },
      { name: 'Nereida', diameter: 357, orbit: 5_513_400 },
    ],
  },
];

export const sun: SolarBody = {
  id: 'sun', name: 'Sol', type: 'Estrela anã amarela', diameter: 1_400_000,
  temperature: 5500, gravity: 274, composition: 'Plasma de hidrogênio e hélio',
  orbit: 0, moonCount: null, moons: [],
};

export const bodyDescriptions: Record<string, {description: string; discovery: string}> = {
  sun: {description: 'Nossa estrela fornece a maior parte da energia que chega aos planetas.', discovery: 'A energia do Sol é produzida por fusão nuclear em seu interior.'},
  mercury: {description: 'O menor planeta e o mais próximo do Sol, com uma superfície marcada por crateras.', discovery: 'Crateras e planícies registram impactos e episódios de atividade geológica.'},
  venus: {description: 'Uma atmosfera espessa envolve o planeta mais quente do Sistema Solar.', discovery: 'O efeito estufa intenso ajuda a explicar suas temperaturas elevadas.'},
  earth: {description: 'Oceanos, continentes e uma atmosfera que abriga a vida.', discovery: 'A água líquida na superfície e uma atmosfera protetora fazem da Terra um mundo singular entre os planetas conhecidos.'},
  mars: {description: 'Vulcões, cânions e sinais de uma história antiga com água.', discovery: 'Missões robóticas analisam rochas para investigar o clima antigo e a história da água no planeta.'},
  jupiter: {description: 'O maior planeta, com nuvens em faixas e tempestades gigantes.', discovery: 'Luas como Europa e Ganimedes ampliam a diversidade de mundos do sistema joviano.'},
  saturn: {description: 'Anéis de gelo e uma família de luas com ambientes muito diferentes.', discovery: 'Titã e Encélado despertam interesse na busca por ambientes que possam reunir condições favoráveis à vida.'},
  uranus: {description: 'Um gigante de gelo cuja rotação é fortemente inclinada.', discovery: 'Seu eixo inclinado produz estações extremas ao longo da órbita.'},
  neptune: {description: 'Um mundo distante com ventos intensos e atmosfera azulada.', discovery: 'Sua lua Tritão tem órbita retrógrada, em sentido contrário à rotação do planeta.'},
};
