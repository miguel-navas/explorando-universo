import {useState} from 'react';
import {ArrowLeftRight, ArrowDown, Layers, Moon as MoonIcon, Rocket, Thermometer} from 'lucide-react';
import {planets, sun, type SolarBody} from './solarData';
import './solar.css';

const bodies = [sun, ...planets];
const asset = '/assets/solar/';
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
    {label: 'Composição', value: planet.composition, icon: Layers},
  ];

  return (
    <section className="solar-system" aria-labelledby="solar-title">
      <div className="solar-content content-width">
        <header className="solar-heading">
          <h1 id="solar-title">Sistema Solar</h1>
          <p>Explore o Sol, os planetas e suas luas</p>
        </header>

        <div className="solar-picker solar-panel" role="group" aria-label="Escolher astro">
          {bodies.map(item => (
            <button key={item.id} type="button" aria-pressed={item.id === planet.id} onClick={() => {
              setPlanet(item);
              changeOrigin(item);
            }}>
              <img className={item.id === sun.id ? 'solar-sun-image' : undefined} src={planetImage(item.id)} alt="" width="72" height="72"/>
              {item.name}
            </button>
          ))}
        </div>

        <div className="solar-grid">
          <article className="solar-panel solar-profile" aria-labelledby="solar-planet">
            <div className="solar-profile-heading">
              <h2 id="solar-planet">{planet.name}</h2>
              <span>{planet.type}</span>
            </div>
            <div className="solar-portrait">
              <img className={planet.id === sun.id ? 'solar-sun-image' : undefined} src={planetImage(planet.id)} alt={planet.name} width="420" height="330"/>
              {planet.id === 'earth' && <img className="solar-orbit-moon" src={asset + 'moon.png'} alt="" width="58" height="58"/>}
            </div>
            <section className="solar-moons" aria-labelledby="solar-moons-title">
              <h3 id="solar-moons-title"><MoonIcon size={20}/> {planet.id === sun.id ? 'Sistema planetário' : planet.moons.length > 2 ? 'Luas em destaque' : 'Luas'}</h3>
              {planet.id === sun.id ? <p>Oito planetas orbitam o Sol.</p> : planet.moons.length === 0 ? <p>{planet.name} não tem luas naturais.</p> : (
                <ul>
                  {planet.moons.map((item, index) => (
                    <li key={item.name}>
                      <button type="button" onClick={() => changeOrigin(planet, 'moon-' + index)} aria-label={'Comparar distância de ' + planet.name + ' até ' + item.name}>
                        {planet.id === 'earth' ? <img src={asset + 'moon.png'} alt="" width="44" height="44"/> : <MoonIcon size={21}/>}
                        <span><strong>{item.name}</strong><small>Diâmetro {number.format(item.diameter)} km</small></span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </article>

          <div className="solar-details">
            <dl className="solar-panel solar-facts" aria-label={'Dados de ' + planet.name}>
              {facts.map(({label, value, icon: Icon}) => (
                <div key={label}>
                  <Icon aria-hidden="true" size={24}/>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

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
        </div>
        <details className="solar-sources">
          <summary>Fontes e créditos</summary>
          <div>
            <a href="https://science.nasa.gov/sun/facts/">Dados do Sol (NASA)</a>
            <a href="https://science.nasa.gov/photojournal/image-of-sun-from-nasas-solar-dynamics-observatory/">Imagem do Sol (NASA/GSFC/SDO)</a>
            <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/">Temperaturas e gravidade (NASA)</a>
            <a href="https://ssd.jpl.nasa.gov/planets/phys_par.html">Diâmetros planetários (JPL)</a>
            <a href="https://ssd.jpl.nasa.gov/sats/phys_par/">Dados das luas (JPL)</a>
            <a href="https://science.nasa.gov/photojournal/photojournal-home-page-graphic-2007/">Fundo (NASA/JPL)</a>
            <a href="https://science.nasa.gov/solar-system/planets/">Retratos planetários (NASA)</a>
            <a href="https://science.nasa.gov/resource/hubble-takes-mars-portrait-near-close-approach/">Marte (NASA/ESA/Hubble)</a>
            <a href="https://spaceplace.nasa.gov/all-about-mercury/en/">Mercúrio (NASA Space Place)</a>
            <a href="https://science.nasa.gov/resource/moon-mosaic/">Retrato da Lua (NASA SVS)</a>
            {isApollo && <a href="https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/">Missão Apollo 11</a>}
          </div>
        </details>
      </div>
    </section>
  );
}
