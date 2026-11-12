import {RadioTower} from 'lucide-react';

const missions = [
  {
    name: 'Voyager 1 e 2', target: 'Planetas gigantes e espaço interestelar',
    image: import.meta.env.BASE_URL + 'assets/destinations/sondas.jpg', alt: 'Ilustração de uma sonda Voyager no espaço.',
    description: 'As duas sondas passaram por Júpiter e Saturno. A Voyager 2 também sobrevoou Urano e Netuno. Ambas cruzaram a heliopausa, o limite da região dominada pelo vento solar.',
    mission: 'https://science.nasa.gov/mission/voyager/',
    source: 'https://www.jpl.nasa.gov/images/pia26353-nasas-voyager-probe-speeds-through-space-artists-concept/',
    credit: 'Ilustração de NASA/JPL-Caltech',
  },
  {
    name: 'Cassini–Huygens', target: 'Saturno, seus anéis e suas luas',
    image: import.meta.env.BASE_URL + 'assets/probes/cassini.jpg', alt: 'Ilustração da Cassini atravessando uma pluma de Encélado.',
    description: 'Cassini orbitou Saturno e investigou seus anéis e luas. Em 2005, a sonda europeia Huygens desceu de paraquedas pela atmosfera de Titã e transmitiu dados da superfície.',
    mission: 'https://science.nasa.gov/mission/cassini-huygens/',
    source: 'https://science.nasa.gov/resource/cassini-at-enceladus-illustration/',
    credit: 'Ilustração de NASA/JPL-Caltech',
  },
  {
    name: 'Juno', target: 'Júpiter',
    image: import.meta.env.BASE_URL + 'assets/probes/juno.jpg', alt: 'Ilustração da sonda Juno sobre o polo sul de Júpiter.',
    description: 'A órbita polar da Juno permite estudar as nuvens, a gravidade e o campo magnético de Júpiter. Essas medições ajudam a investigar o interior do planeta.',
    mission: 'https://science.nasa.gov/mission/juno/',
    source: 'https://science.nasa.gov/photojournal/juno-over-jupiters-south-pole-illustration/',
    credit: 'Ilustração de NASA/JPL-Caltech',
  },
  {
    name: 'New Horizons', target: 'Plutão e o Cinturão de Kuiper',
    image: import.meta.env.BASE_URL + 'assets/probes/plutao.jpg', alt: 'Mosaico de imagens da superfície de Plutão registradas pela New Horizons.',
    description: 'Em 2015, realizou o primeiro sobrevoo de Plutão e suas luas. Em 2019, passou por Arrokoth, um pequeno corpo gelado do Cinturão de Kuiper.',
    mission: 'https://science.nasa.gov/mission/new-horizons/',
    source: 'https://science.nasa.gov/photojournal/plutos-surface-in-detail/',
    credit: 'Imagem de Plutão por NASA/JHUAPL/SwRI',
  },
];

const missionTypes = [
  ['Sobrevoo', 'A sonda passa perto do alvo, coleta dados durante o encontro e segue viagem. Foi assim que a New Horizons estudou Plutão.'],
  ['Orbitador', 'A nave entra em órbita para observar o mesmo astro repetidas vezes. Cassini fez isso em Saturno e Juno, em Júpiter.'],
  ['Sonda de descida', 'Atravessa a atmosfera para medi-la de perto. Huygens também pousou e fotografou a superfície de Titã.'],
];

export default function ProbeGuide() {
  return (
    <section className="destination probe-destination" aria-labelledby="probe-title">
      <img className="destination-image" src={import.meta.env.BASE_URL + 'assets/destinations/sondas.jpg'} alt=""/>
      <div className="destination-content content-width">
        <div className="galaxy-intro">
          <header className="galaxy-heading">
            <p className="eyebrow">EXPLORANDO O UNIVERSO · DESTINO 06</p>
            <RadioTower className="destination-icon" size={44} aria-hidden="true"/>
            <h1 id="probe-title">Sondas</h1>
            <p>Conheça as missões robóticas que estudaram planetas, luas e regiões além do Sistema Solar.</p>
          </header>
          <section className="destination-panel" aria-labelledby="probe-definition">
            <h2 id="probe-definition">O que é uma sonda espacial?</h2>
            <p>É uma nave sem tripulação equipada para investigar o espaço. Seus instrumentos podem fotografar superfícies, analisar atmosferas ou medir campos magnéticos. A trajetória depende do que a missão quer descobrir.</p>
          </section>
        </div>

        <section className="destination-panel" aria-labelledby="probe-missions">
          <h2 id="probe-missions">Missões em destaque</h2>
          <ul className="galaxy-grid galaxy-gallery">
            {missions.map(mission => (
              <li className="galaxy-item" key={mission.name}>
                <a href={mission.source}>
                  <img src={mission.image} alt={mission.alt} width="640" height="400" loading="lazy" decoding="async"/>
                </a>
                <div className="galaxy-card-text">
                  <h3>{mission.name}</h3>
                  <span>{mission.target}</span>
                  <p>{mission.description}</p>
                  <a className="galaxy-credit" href={mission.source}>{mission.credit}</a>
                  <br/>
                  <a className="galaxy-credit" href={mission.mission}>Conheça a missão</a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="destination-panel" aria-labelledby="probe-types">
          <h2 id="probe-types">Como as sondas exploram?</h2>
          <dl className="galaxy-grid">
            {missionTypes.map(([name, description]) => (
              <div className="galaxy-item" key={name}>
                <dt>{name}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
          <a className="galaxy-credit" href="https://science.nasa.gov/learn/basics-of-space-flight/chapter9-1/">Tipos de espaçonaves (NASA)</a>
        </section>

        <section className="destination-panel" aria-labelledby="probe-communication">
          <h2 id="probe-communication">Como os dados chegam à Terra?</h2>
          <p>As sondas transformam imagens e medições em dados digitais e os enviam por ondas de rádio. As grandes antenas da Deep Space Network, rede da NASA, recebem esses sinais e também transmitem comandos às naves.</p>
          <p>As ondas de rádio viajam à velocidade da luz. Quanto mais distante a sonda, maior a espera. Uma troca de comandos leva pelo menos o tempo de ida do sinal mais o tempo de volta da resposta.</p>
          <a className="galaxy-credit" href="https://science.nasa.gov/resource/how-do-we-communicate-with-faraway-spacecraft/">Comunicação com sondas distantes (NASA)</a>
        </section>
      </div>
    </section>
  );
}
