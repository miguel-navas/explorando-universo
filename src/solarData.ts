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
  moons: Moon[];
};

const rocky = 'Planeta rochoso';
const gas = 'Gigante gasoso';
const ice = 'Gigante de gelo';

export const planets: SolarBody[] = [
  {
    id: 'mercury', name: 'Mercúrio', type: rocky, diameter: 4879, temperature: 167,
    gravity: 3.7, composition: 'Rochas de silicato e núcleo rico em ferro',
    orbit: 57_900_000, moons: [],
  },
  {
    id: 'venus', name: 'Vênus', type: rocky, diameter: 12104, temperature: 464,
    gravity: 8.9, composition: 'Rochas e metais, com atmosfera rica em CO₂',
    orbit: 108_200_000, moons: [],
  },
  {
    id: 'earth', name: 'Terra', type: rocky, diameter: 12742, temperature: 15,
    gravity: 9.81, composition: 'Rochas e metais',
    orbit: 149_600_000, moons: [{ name: 'Lua', diameter: 3475, orbit: 384_400 }],
  },
  {
    id: 'mars', name: 'Marte', type: rocky, diameter: 6779, temperature: -65,
    gravity: 3.7, composition: 'Rochas de silicato, ferro e outros metais',
    orbit: 228_000_000, moons: [
      { name: 'Fobos', diameter: 22.2, orbit: 9376 },
      { name: 'Deimos', diameter: 12.4, orbit: 23463 },
    ],
  },
  {
    id: 'jupiter', name: 'Júpiter', type: gas, diameter: 139822, temperature: -110,
    gravity: 23.1, composition: 'Principalmente hidrogênio e hélio',
    orbit: 778_500_000, moons: [
      { name: 'Io', diameter: 3643, orbit: 421_800 },
      { name: 'Europa', diameter: 3122, orbit: 671_100 },
      { name: 'Ganimedes', diameter: 5262, orbit: 1_070_400 },
      { name: 'Calisto', diameter: 4821, orbit: 1_882_700 },
    ],
  },
  {
    id: 'saturn', name: 'Saturno', type: gas, diameter: 116464, temperature: -140,
    gravity: 9, composition: 'Principalmente hidrogênio e hélio',
    orbit: 1_432_000_000, moons: [
      { name: 'Encélado', diameter: 504, orbit: 238_000 },
      { name: 'Reia', diameter: 1528, orbit: 527_100 },
      { name: 'Titã', diameter: 5150, orbit: 1_221_900 },
    ],
  },
  {
    id: 'uranus', name: 'Urano', type: ice, diameter: 50724, temperature: -195,
    gravity: 8.7, composition: 'Água, amônia e metano, com atmosfera de hidrogênio e hélio',
    orbit: 2_867_000_000, moons: [
      { name: 'Miranda', diameter: 472, orbit: 129_900 },
      { name: 'Ariel', diameter: 1158, orbit: 190_900 },
      { name: 'Titânia', diameter: 1578, orbit: 436_300 },
    ],
  },
  {
    id: 'neptune', name: 'Netuno', type: ice, diameter: 49244, temperature: -200,
    gravity: 11, composition: 'Água, amônia e metano, com atmosfera de hidrogênio e hélio',
    orbit: 4_515_000_000, moons: [
      { name: 'Tritão', diameter: 2705, orbit: 354_800 },
      { name: 'Nereida', diameter: 357, orbit: 5_513_400 },
    ],
  },
];

export const sun: SolarBody = {
  id: 'sun', name: 'Sol', type: 'Estrela anã amarela', diameter: 1_400_000,
  temperature: 5500, gravity: 274, composition: 'Plasma de hidrogênio e hélio',
  orbit: 0, moons: [],
};
