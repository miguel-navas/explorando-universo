import {useRef} from 'react';
import {Cloud, Download, X} from 'lucide-react';
import type {SolarBody} from './solarData';

// Composição e características: NASA Science, páginas Facts de cada planeta.
const atmospheres: Record<string, {composition: string; description: string; features: string[]; source: string}> = {
  mercury: {composition: 'Exosfera muito rarefeita com oxigênio, sódio, hidrogênio, hélio e potássio.', description: 'Mercúrio não tem uma atmosfera densa como a da Terra. Seu envoltório de partículas é tão tênue que é chamado de exosfera.', features: ['O vento solar e os impactos de meteoroides liberam átomos da superfície.', 'A exosfera oferece pouca redistribuição de calor entre o dia e a noite.'], source: 'https://science.nasa.gov/mercury/facts/'},
  venus: {composition: 'Principalmente dióxido de carbono, com nitrogênio e nuvens de ácido sulfúrico.', description: 'A atmosfera muito densa retém calor por um intenso efeito estufa. Vênus tem a superfície mais quente entre os planetas do Sistema Solar.', features: ['A pressão na superfície é cerca de 93 vezes a pressão ao nível do mar na Terra.', 'Nuvens espessas escondem a superfície em luz visível.'], source: 'https://science.nasa.gov/venus/venus-facts/'},
  earth: {composition: 'No ar seco próximo à superfície: cerca de 78% de nitrogênio, 21% de oxigênio e 1% de outros gases. O vapor d’água varia.', description: 'A atmosfera participa do clima e do ciclo da água, ajuda a regular a temperatura e protege a superfície de parte da radiação solar e de pequenos meteoroides.', features: ['A divisão em camadas considera como a temperatura muda com a altitude.', 'A ionosfera é uma região ionizada que se sobrepõe a partes de outras camadas.'], source: 'https://science.nasa.gov/earth/facts/'},
  mars: {composition: 'Principalmente dióxido de carbono, com nitrogênio e argônio.', description: 'Marte tem uma atmosfera fina que retém pouco calor. Poeira suspensa deixa o céu avermelhado e pode formar tempestades que cobrem grandes regiões.', features: ['A baixa pressão dificulta a permanência prolongada de água líquida na superfície.', 'A atmosfera oferece menos proteção contra impactos e radiação que a terrestre.'], source: 'https://science.nasa.gov/mars/facts/'},
  jupiter: {composition: 'Principalmente hidrogênio e hélio, com nuvens de compostos como amônia e água.', description: 'Faixas claras e escuras acompanham correntes de vento em sentidos diferentes. A Grande Mancha Vermelha é uma enorme tempestade atmosférica.', features: ['Júpiter não tem uma superfície sólida como a da Terra.', 'Pressão e temperatura aumentam em direção ao interior.'], source: 'https://science.nasa.gov/jupiter/jupiter-facts/'},
  saturn: {composition: 'Principalmente hidrogênio e hélio.', description: 'Nuvens, correntes de jato e tempestades formam faixas de tons amarelos, marrons e cinzentos. No polo norte existe um padrão de ventos em forma de hexágono.', features: ['Ventos na região equatorial podem atingir cerca de 500 metros por segundo.', 'Como gigante gasoso, Saturno não oferece um chão sólido sob suas nuvens.'], source: 'https://science.nasa.gov/saturn/facts/'},
  uranus: {composition: 'Principalmente hidrogênio e hélio, com metano e traços de água e amônia.', description: 'O metano absorve parte da luz vermelha, contribuindo para a aparência azul-esverdeada. Nuvens e ventos mudam com as estações.', features: ['A atmosfera está entre as mais frias dos planetas.', 'A grande inclinação do eixo de rotação produz estações muito diferentes das terrestres.'], source: 'https://science.nasa.gov/uranus/facts/'},
  neptune: {composition: 'Principalmente hidrogênio e hélio, com uma pequena quantidade de metano.', description: 'A atmosfera de Netuno abriga ventos intensos e grandes tempestades. O metano contribui para a coloração observada do planeta.', features: ['A atmosfera se estende a grandes profundidades e se mistura gradualmente ao interior.', 'Não existe uma superfície sólida de referência como a dos planetas rochosos.'], source: 'https://science.nasa.gov/neptune/neptune-facts/'},
};

const layers = [
  ['Troposfera', '0–12 km', 'Camada em que vivemos e onde ocorre a maior parte dos fenômenos meteorológicos.'],
  ['Estratosfera', '12–50 km', 'Abriga a camada de ozônio, que absorve parte da radiação ultravioleta solar.'],
  ['Mesosfera', '50–80 km', 'Região muito fria onde a maioria dos meteoros se desintegra.'],
  ['Termosfera', '80–700 km', 'Gás extremamente rarefeito, auroras e a região orbital da Estação Espacial Internacional.'],
  ['Exosfera', '700–10.000 km', 'Transição muito tênue para o espaço, com partículas que podem escapar da Terra.'],
];

export default function PlanetAtmosphere({body}: {body: SolarBody}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const atmosphere = atmospheres[body.id];
  const diagram = import.meta.env.BASE_URL + 'assets/solar-guide/camadas-atmosfera-terra.svg';
  if (!atmosphere) return null;
  return <>
    <button className="solar-atmosphere-button" type="button" onClick={() => dialog.current?.showModal()}><Cloud size={16} aria-hidden="true"/>{body.id === 'earth' ? 'Atmosfera e camadas da Terra' : 'Atmosfera de ' + body.name}</button>
    <dialog ref={dialog} className="solar-image-dialog solar-atmosphere-dialog" aria-labelledby="solar-atmosphere-title">
      <form method="dialog"><button aria-label="Fechar atmosfera"><X size={20}/></button></form>
      <h2 id="solar-atmosphere-title">Atmosfera de {body.name}</h2>
      <h3>Composição</h3><p>{atmosphere.composition}</p>
      <h3>Como ela funciona</h3><p>{atmosphere.description}</p>
      <ul>{atmosphere.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
      {body.id === 'earth' && <section aria-labelledby="earth-atmosphere-layers">
        <h3 id="earth-atmosphere-layers">Camadas da atmosfera terrestre</h3>
        <figure><img src={diagram} alt="Esquema das cinco camadas, da superfície para o espaço: troposfera, estratosfera, mesosfera, termosfera e exosfera." width="960" height="660"/>
          <figcaption>Ilustração didática em português baseada na NASA. Altitudes aproximadas e variáveis; esquema sem escala.</figcaption>
          <a href={diagram} download><Download size={15} aria-hidden="true"/>Baixar ilustração das camadas</a>
        </figure>
        <dl className="solar-atmosphere-layers">{layers.map(([name, altitude, text]) => <div key={name}><dt>{name} · {altitude}</dt><dd>{text}</dd></div>)}</dl>
        <p>A linha de Kármán, a 100 km de altitude, é uma referência convencional para o início do espaço. A atmosfera continua além dessa altura.</p>
        <a href="https://science.nasa.gov/earth/earth-atmosphere/earths-atmosphere-a-multi-layered-cake/">Fonte das camadas · NASA</a>
      </section>}
      <p className="solar-atmosphere-source">Conteúdo adaptado da <a href={atmosphere.source}>NASA Science · {body.name}</a>.</p>
    </dialog>
  </>;
}
