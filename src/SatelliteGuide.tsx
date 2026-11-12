import {Satellite} from 'lucide-react';

const examples = [
  {
    name: 'Lua', type: 'Satélite natural', image: import.meta.env.BASE_URL + 'assets/satellites/moon-apollo11.jpg', imageClass: 'satellite-moon-photo',
    alt: 'Disco inteiro da Lua fotografado pela tripulação da Apollo 11.',
    text: 'A Lua orbita a Terra. As fases que vemos mudam conforme nossa perspectiva da parte iluminada pelo Sol.',
    source: 'https://esrs.jsc.nasa.gov/SearchPhotos/photo.pl?frame=6667&mission=AS11&roll=44', credit: 'Fotografia da Apollo 11 (NASA)',
  },
  {
    name: 'Estação Espacial Internacional', type: 'Pesquisa em órbita', image: import.meta.env.BASE_URL + 'assets/destinations/satelites.jpg',
    alt: 'Estação Espacial Internacional com seus painéis solares acima da Terra.',
    text: 'A estação é um laboratório em órbita baixa. A tripulação realiza experimentos em microgravidade e usa instrumentos para observar a Terra.',
    source: 'https://science.nasa.gov/image-article/apod-2016-april-18-the-international-space-station-over-earth/',
    credit: 'Tripulações STS-132 e Expedição 23/NASA',
  },
  {
    name: 'Landsat 9', type: 'Observação da Terra', image: import.meta.env.BASE_URL + 'assets/satellites/landsat.jpg',
    alt: 'Ilustração do Landsat 9 em órbita sobre a Terra.',
    text: 'O satélite da NASA e do USGS registra a superfície em várias faixas de luz. Suas imagens ajudam a acompanhar mudanças na vegetação, na água e nas cidades.',
    source: 'https://science.nasa.gov/mission/landsat/news/mission-success-celebrating-landsat-9s-five-year-design-life-milestone/',
    credit: 'Ilustração de NASA/Ross Walter',
  },
  {
    name: 'GOES-19', type: 'Meteorologia', image: import.meta.env.BASE_URL + 'assets/satellites/goes.jpg',
    alt: 'Ilustração do satélite meteorológico GOES-19 em órbita.',
    text: 'Da órbita geoestacionária, acompanha a mesma região da Terra. Isso permite observar a evolução de nuvens, tempestades e furacões.',
    source: 'https://www.noaa.gov/news-release/noaas-goes-19-satellite-now-operational-providing-critical-new-data-to-forecasters',
    credit: 'Ilustração de NOAA/Lockheed Martin, via NASA',
  },
];

const orbits = [
  ['Órbita baixa (LEO)', 'A proximidade da superfície favorece observações detalhadas. A Estação Espacial Internacional e o Landsat 9 usam órbitas baixas.'],
  ['Órbita média (MEO)', 'Os satélites do GPS orbitam a cerca de 20.200 km de altitude. Seus sinais ajudam receptores a calcular a posição e a sincronizar relógios.'],
  ['Órbita geoestacionária (GEO)', 'A cerca de 35.786 km sobre o equador, um satélite nessa órbita acompanha a rotação da Terra e parece fixo no céu. Isso favorece o monitoramento do tempo e a transmissão de sinais de comunicação.'],
];

export default function SatelliteGuide() {
  return (
    <section className="destination satellite-destination" aria-labelledby="satellite-title">
      <img className="destination-image" src={import.meta.env.BASE_URL + 'assets/destinations/satelites.jpg'} alt=""/>
      <div className="destination-content content-width">
        <div className="galaxy-intro">
          <header className="galaxy-heading">
            <p className="eyebrow">EXPLORANDO O UNIVERSO · DESTINO 05</p>
            <Satellite className="destination-icon" size={44} aria-hidden="true"/>
            <h1 id="satellite-title">Satélites</h1>
            <p>Da Lua aos instrumentos que ajudam a observar a Terra, prever o tempo e navegar.</p>
          </header>
          <section className="destination-panel" aria-labelledby="satellite-definition">
            <h2 id="satellite-definition">O que é um satélite?</h2>
            <p>Um satélite é um objeto que orbita outro corpo. Pode ser natural, como a Lua, ou artificial, como uma estação espacial. A gravidade curva sua trajetória enquanto ele avança, mantendo-o em órbita.</p>
            <a className="galaxy-credit" href="https://spaceplace.nasa.gov/satellite/en/">O que é um satélite? (NASA)</a>
          </section>
        </div>

        <section className="destination-panel" aria-labelledby="satellite-examples">
          <h2 id="satellite-examples">Satélites em destaque</h2>
          <ul className="galaxy-grid galaxy-gallery">
            {examples.map(example => (
              <li className="galaxy-item" key={example.name}>
                <a href={example.source}>
                  <img className={example.imageClass} src={example.image} alt={example.alt} width="640" height="400" loading="lazy" decoding="async"/>
                </a>
                <div className="galaxy-card-text">
                  <h3>{example.name}</h3>
                  <span>{example.type}</span>
                  <p>{example.text}</p>
                  <a className="galaxy-credit" href={example.source}>{example.credit}</a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="destination-panel" aria-labelledby="satellite-orbit-motion">
          <h2 id="satellite-orbit-motion">Como uma órbita funciona?</h2>
          <p>Imagine lançar uma bola para a frente. Ela avança enquanto a gravidade a puxa para baixo. Um satélite faz algo parecido. Na altitude e na velocidade adequadas, ele avança tão rápido que a superfície da Terra se curva abaixo dele enquanto cai. A gravidade muda a direção de seu movimento continuamente, mantendo-o em queda livre ao redor do planeta.</p>
          <p>A velocidade e a direção determinam a forma da trajetória. Em uma órbita elíptica, o satélite se move mais rápido no ponto mais próximo da Terra, o perigeu, e mais devagar no mais distante, o apogeu. Se a trajetória entrar nas camadas densas da atmosfera, o arrasto pode levar à reentrada.</p>
          <a className="galaxy-credit" href="https://spaceplace.nasa.gov/orbits/en/">Como funcionam as órbitas (NASA)</a>
        </section>

        <section className="destination-panel" aria-labelledby="satellite-orbits">
          <h2 id="satellite-orbits">Por que existem órbitas diferentes?</h2>
          <p>A órbita determina que partes do planeta um satélite consegue observar, por quanto tempo e com que frequência passa sobre a mesma região.</p>
          <dl className="galaxy-grid">
            {orbits.map(([name, text]) => (
              <div className="galaxy-item" key={name}>
                <dt>{name}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
          <p className="galaxy-structure-links">
            <a href="https://oceanservice.noaa.gov/facts/gps.html">Como funciona o GPS (NOAA)</a>
          </p>
        </section>
      </div>
    </section>
  );
}
