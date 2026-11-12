import {useState} from 'react';
import {ArrowLeftRight, ArrowDown, Layers, Moon as MoonIcon, Rocket, Ruler, Thermometer} from 'lucide-react';
import {planets, sun, bodyDescriptions, moonCountReference, type SolarBody} from './solarData';
import SolarGuide, {type SolarGuideTab} from './SolarGuide';
import PlanetAtmosphere from './PlanetAtmosphere';
import './solar.css';

const bodies = [sun, ...planets];
const tabs = [{id: 'planetas', name: 'Planetas'}, {id: 'luas', name: 'Luas'}, {id: 'corpos', name: 'Pequenos corpos'}, {id: 'regioes', name: 'Origem e regiões'}, {id: 'missoes', name: 'Missões e imagens'}] as const;
type SolarTab = 'planetas' | SolarGuideTab;
const asset = import.meta.env.BASE_URL + 'assets/solar/';
const kmPerLightYear = 9_460_730_472_581;
const exampleSpeed = 40_000;
const number = new Intl.NumberFormat('pt-BR', {maximumFractionDigits: 2});
const scientific = new Intl.NumberFormat('pt-BR', {notation: 'scientific', maximumSignificantDigits: 3});

function planetImage(id: string) {
  if (id === 'mercury' || id === 'mars') return asset + id + '-full-disk.jpg';
  return asset + id + (id === 'uranus' ? '.webp' : '.jpg');
}

function defaultDestination(planet: SolarBody) {
  return planet.moons.length ? 'moon-0' : 'earth';
}

function lightTime(km: number) {
  const seconds = km / 299_792.458;
  if (seconds >= 3600) return number.format(seconds / 3600) + ' h';
  if (seconds >= 60) return number.format(seconds / 60) + ' min';
  if (seconds < .01) return number.format(seconds * 1000) + ' ms';
  return number.format(seconds) + ' s';
}

function modelTravelTime(km: number) {
  const hours = km / exampleSpeed;
  if (hours >= 24) return number.format(hours / 24) + ' dias';
  if (hours >= 1) return number.format(hours) + ' h';
  return number.format(hours * 60) + ' min';
}

export default function SolarSystem() {
  const [tab, setTab] = useState<SolarTab>('planetas');
  const [planet, setPlanet] = useState(planets[2]);
  const [origin, setOrigin] = useState(planets[2]);
  const [destinationId, setDestinationId] = useState('moon-0');
  const destinations = bodies.filter(item => item.id !== origin.id);
  const destination = destinations.find(item => item.id === destinationId);
  const moon = origin.moons[Number(destinationId.replace('moon-', ''))];
  const near = moon?.orbit ?? Math.abs(origin.orbit - destination!.orbit);
  const far = destination ? origin.orbit + destination.orbit : near;
  const isApollo = origin.id === 'earth' && moon?.name === 'Lua';
  const isSolarRoute = origin.id === sun.id || destination?.id === sun.id;
  const hasRange = near !== far;
  const distance = moon
    ? number.format(near) + ' km'
    : number.format(near / 1e6) + (hasRange ? ' a ' + number.format(far / 1e6) : '') + ' milhões de km';
  const time = hasRange ? lightTime(near) + ' a ' + lightTime(far) : lightTime(near);
  const travel = isApollo ? '≈ 3 dias' : !hasRange
    ? modelTravelTime(near)
    : modelTravelTime(near) + ' a ' + modelTravelTime(far);

  function changeOrigin(next: SolarBody, destination = defaultDestination(next)) {
    setOrigin(next);
    setDestinationId(destination);
  }

  const facts = [
    {label: 'Diâmetro médio', value: number.format(planet.diameter) + ' km', icon: ArrowLeftRight},
    {label: planet.id === sun.id ? 'Temperatura da fotosfera' : 'Temperatura média', value: number.format(planet.temperature) + ' °C', icon: Thermometer},
    {label: 'Gravidade', value: number.format(planet.gravity) + ' m/s²', icon: ArrowDown},
    {label: 'Distância média ao Sol', value: planet.id === sun.id ? '—' : number.format(planet.orbit / 149_600_000) + ' UA', icon: Ruler},
    {label: 'Composição', value: planet.composition, icon: Layers},
  ];

  const description = bodyDescriptions[planet.id];
  return (
    <section className="solar-system" aria-labelledby="solar-title">
      <div className="solar-content content-width">
        <header className="solar-heading">
          <div><p className="solar-eyebrow">NOSSA VIZINHANÇA NO COSMOS</p><h1 id="solar-title">Sistema Solar</h1><p>Conheça os mundos, suas histórias e as missões que os exploram.</p></div>
          <dl className="solar-overview"><div><dt>Planetas</dt><dd>8</dd></div><div><dt>Planetas anões reconhecidos</dt><dd>5</dd></div><div><dt>Anos de história</dt><dd>4,6 bi</dd></div></dl>
        </header>
        <div className="solar-tabs" role="group" aria-label="Conteúdos do Sistema Solar">
          {tabs.map(item => <button type="button" key={item.id} id={'solar-tab-' + item.id} aria-pressed={tab === item.id} aria-controls="solar-tab-content" onClick={() => setTab(item.id)}>{item.name}</button>)}
        </div>
        <section id="solar-tab-content" aria-labelledby={'solar-tab-' + tab}>
          {tab === 'planetas' ? <>
            <div className="solar-picker solar-panel" role="group" aria-label="Escolher astro">
              {bodies.map(item => <button key={item.id} type="button" aria-pressed={item.id === planet.id} onClick={() => {setPlanet(item); changeOrigin(item);}}>
                <img className={item.id === sun.id ? 'solar-sun-image' : undefined} src={planetImage(item.id)} alt="" width="72" height="72"/>{item.name}
              </button>)}
            </div>
            <div className="solar-grid">
              <article className="solar-panel solar-profile" aria-labelledby="solar-planet">
                <div className="solar-profile-heading"><h2 id="solar-planet">{planet.name}</h2><span>{planet.type}</span></div>
                <div className="solar-portrait"><img className={planet.id === sun.id ? 'solar-sun-image' : undefined} src={planetImage(planet.id)} alt={planet.name} width="420" height="330"/></div>
                <p className="solar-planet-story">{description.description}</p>
                <section className="solar-moons" aria-labelledby="solar-moons-title">
                  <h3 id="solar-moons-title"><MoonIcon size={16} aria-hidden="true"/>{planet.id === sun.id ? 'Sistema planetário' : `${planet.moonCount} ${planet.moonCount === 1 ? 'lua confirmada' : 'luas confirmadas'}`}</h3>
                  {planet.id === sun.id ? <p>Oito planetas orbitam o Sol.</p> : planet.moons.length === 0 ? <p>{planet.name} não tem luas naturais.</p> : <>
                    {planet.moonCount! > planet.moons.length && <p className="solar-moon-selection">Em destaque</p>}
                    <ul aria-label={'Luas apresentadas de ' + planet.name}>
                    {planet.moons.map((item, index) => <li key={item.name}><button type="button" onClick={() => changeOrigin(planet, 'moon-' + index)} aria-label={'Comparar distância de ' + planet.name + ' até ' + item.name}>{item.name}</button></li>)}
                  </ul></>}
                </section>
                <p className="solar-image-note">Retrato NASA · tamanhos das imagens fora de escala</p>
              </article>
              <article className="solar-panel solar-information" aria-labelledby="solar-information-title">
                <h2 id="solar-information-title">Conheça este mundo</h2>
                <dl className="solar-facts" aria-label={'Dados de ' + planet.name}>
                  {facts.map(({label, value, icon: Icon}) => <div key={label} className={label === 'Composição' ? 'solar-composition' : undefined}><Icon aria-hidden="true" size={18}/><dt>{label}</dt><dd>{value}</dd></div>)}
                </dl>
                <div className="solar-discovery"><h3>Uma descoberta para explorar</h3><p>{description.discovery}</p></div>
                <PlanetAtmosphere body={planet}/>
              </article>
            <section className="solar-panel solar-travel" aria-labelledby="solar-travel-title">
              <h2 id="solar-travel-title"><Rocket size={25}/> Distâncias e viagens</h2>
              <div className="solar-travel-selects">
                <label><span id="solar-origin-label">Origem</span>
                  <select aria-labelledby="solar-origin-label" value={origin.id} onChange={event => changeOrigin(bodies.find(item => item.id === event.target.value)!)}>
                    {bodies.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                  </select>
                </label>
                <label><span id="solar-destination-label">Destino</span>
                  <select aria-labelledby="solar-destination-label" value={destinationId} onChange={event => setDestinationId(event.target.value)}>
                    {origin.moons.map((item, index) => <option key={item.name} value={'moon-' + index}>{item.name}</option>)}
                    {destinations.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                  </select>
                </label>
              </div>
              <dl className="solar-results" aria-live="polite">
                <div>
                  <dt>{hasRange ? 'Faixa de distância' : 'Distância média'}</dt>
                  <dd>{distance}<small>{scientific.format(near / kmPerLightYear)}{hasRange ? ' a ' + scientific.format(far / kmPerLightYear) : ''} anos-luz</small></dd>
                </div>
                <div><dt>Tempo-luz</dt><dd>{time}</dd></div>
                <div><dt>Tempo de viagem</dt><dd>{travel}<small>{isApollo ? 'Apollo 11, até a órbita lunar' : 'Simulação a 40.000 km/h'}</small></dd></div>
              </dl>
              <details className="solar-note">
                <summary>Como calculamos</summary>
                <p>
                  {hasRange ? 'Faixa aproximada com órbitas circulares. A distância real varia com a posição dos planetas.' : 'Distância aproximada entre os centros dos astros.'}
                  {' '}O tempo-luz é calculado em um só sentido.
                  {!isApollo && (isSolarRoute ? ' A simulação em linha reta é apenas uma referência de escala.' : ' A simulação em linha reta usa velocidade constante.')}
                </p>
              </details>
            </section>
            </div>
          </> : <SolarGuide tab={tab}/>}
        </section>
        <details className="solar-sources">
          <summary>Fontes e créditos</summary>
          <div>
            <a href="https://science.nasa.gov/solar-system/">Sistema Solar (NASA)</a>
            <a href="https://science.nasa.gov/sun/facts/">Dados do Sol (NASA)</a>
            <a href="https://science.nasa.gov/photojournal/image-of-sun-from-nasas-solar-dynamics-observatory/">Imagem do Sol (NASA/GSFC/SDO)</a>
            <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/">Temperaturas e gravidade (NASA)</a>
            <a href="https://ssd.jpl.nasa.gov/planets/phys_par.html">Diâmetros planetários (JPL)</a>
            <a href="https://ssd.jpl.nasa.gov/sats/phys_par/">Dados das luas (JPL)</a>
            <a href={moonCountReference.source}>Luas reconhecidas pela IAU · NASA/JPL · consulta {moonCountReference.checkedAt}</a>
            <a href="https://science.nasa.gov/photojournal/photojournal-home-page-graphic-2007/">Fundo (NASA/JPL)</a>
            <a href="https://science.nasa.gov/solar-system/planets/">Retratos planetários (NASA)</a>
            <a href="https://science.nasa.gov/resource/hubble-takes-mars-portrait-near-close-approach/">Marte (NASA/ESA/Hubble)</a>
            <a href="https://spaceplace.nasa.gov/all-about-mercury/en/">Mercúrio (NASA Space Place)</a>
            <a href="https://science.nasa.gov/jupiter/jupiter-moons/europa/">Europa (NASA)</a>
            <a href="https://science.nasa.gov/saturn/moons/titan/">Titã (NASA)</a>
            <a href="https://science.nasa.gov/saturn/moons/enceladus/">Encélado (NASA)</a>
            <a href="https://science.nasa.gov/mission/europa-clipper/">Europa Clipper (NASA)</a>
            <a href="https://svs.gsfc.nasa.gov/5587/">Imagem da Lua cheia · NASA SVS/LRO</a>
            <a href="https://svs.gsfc.nasa.gov/5587/">Fases e libração da Lua em 2026 · NASA SVS</a>
            {isApollo && <a href="https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/">Missão Apollo 11</a>}
          </div>
        </details>
      </div>
    </section>
  );
}
