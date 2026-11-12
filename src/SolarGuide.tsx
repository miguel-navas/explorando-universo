import {Download} from 'lucide-react';

const smallBodies = [
  {
    name: 'Plutão e os planetas anões',
    image: 'plutao.jpg',
    alt: 'Plutão com sua região clara em forma de coração, observado pela New Horizons.',
    description: 'Planetas anões orbitam o Sol e têm gravidade suficiente para uma forma aproximadamente arredondada, mas compartilham sua região orbital com muitos outros corpos. Plutão, Ceres, Eris, Haumea e Makemake pertencem a essa classe.',
    caption: 'Plutão, fotografado pela New Horizons em julho de 2015, com cores próximas às naturais.',
    credit: 'NASA/Johns Hopkins APL/SwRI/Alex Parker',
  },
  {
    name: 'Asteroides',
    image: 'bennu.jpg',
    alt: 'Mosaico do asteroide Bennu com sua superfície coberta de rochas.',
    description: 'São remanescentes rochosos da formação do Sistema Solar. A maioria está no cinturão principal, entre Marte e Júpiter. Outros têm órbitas que passam pela vizinhança da Terra ou acompanham planetas.',
    caption: 'Bennu, registrado pela câmera PolyCam da missão OSIRIS-REx em dezembro de 2018.',
    credit: 'NASA/Goddard/University of Arizona',
  },
  {
    name: 'Cometas',
    image: 'cometa-67p.jpg',
    alt: 'Núcleo do cometa 67P com jatos de material saindo de sua superfície.',
    description: 'Misturam gelo, poeira e material rochoso. Ao se aproximar do Sol, seus gelos podem passar diretamente para gás, liberando poeira e formando a cabeleira e as caudas.',
    caption: 'Cometa 67P/Churyumov–Gerasimenko, observado pela Rosetta em março de 2015.',
    credit: 'ESA/Rosetta/NAVCAM',
  },
];

const regions = [
  ['Cinturão principal', 'Entre Marte e Júpiter, reúne muitos asteroides e o planeta anão Ceres. Seus corpos guardam pistas sobre os materiais que existiam no início do Sistema Solar.'],
  ['Cinturão de Kuiper', 'Além de Netuno, abriga numerosos corpos gelados, incluindo Plutão. A região principal se estende aproximadamente de 30 a 50 unidades astronômicas do Sol.'],
  ['Nuvem de Oort', 'É uma região hipotética, aproximadamente esférica, muito além dos planetas. Sua existência é inferida a partir das órbitas de cometas de longo período e de modelos dinâmicos. Ainda não foi observada diretamente.'],
];

const rocks = [
  ['Meteoroide', 'Pequeno corpo sólido que viaja pelo espaço. Pode ser um fragmento de asteroide ou material liberado por um cometa.'],
  ['Meteoro', 'Fenômeno luminoso produzido quando esse material entra na atmosfera. É o que chamamos de estrela cadente.'],
  ['Meteorito', 'Parte do material que sobrevive à passagem pela atmosfera e chega ao solo.'],
  ['Chuva de meteoros', 'Ocorre quando a Terra atravessa uma região rica em detritos, frequentemente deixados por um cometa. Os rastros parecem partir de uma mesma região do céu.'],
];

export default function SolarGuide() {
  const asset = import.meta.env.BASE_URL + 'assets/solar-guide/';

  return (
    <section className="solar-library" aria-labelledby="solar-library-title">
      <section className="solar-panel">
        <h2 id="solar-library-title">Além dos oito planetas</h2>
        <p>O Sistema Solar começou a se formar há cerca de 4,6 bilhões de anos. Além do Sol, dos planetas e de suas luas, inclui planetas anões e inúmeros corpos menores de rocha, metal e gelo.</p>
        <p>Para comparar essas distâncias, usamos a unidade astronômica, abreviada UA. Uma UA equivale aproximadamente à distância média entre a Terra e o Sol, cerca de 150 milhões de quilômetros.</p>
      </section>

      <section className="solar-panel" aria-labelledby="solar-small-bodies">
        <h2 id="solar-small-bodies">Pequenos mundos, grandes pistas</h2>
        <ul className="galaxy-grid galaxy-gallery">
          {smallBodies.map(body => (
            <li className="galaxy-item" key={body.name}>
              <img src={asset + body.image} alt={body.alt} width="640" height="400" loading="lazy" decoding="async"/>
              <div className="galaxy-card-text">
                <h3>{body.name}</h3>
                <p>{body.description}</p>
                <p className="solar-library-caption">{body.caption}</p>
                <small>Imagem · {body.credit}</small>
                <a className="nasa-image-download" href={asset + body.image} download>
                  <Download size={15} aria-hidden="true"/>Baixar imagem
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="solar-panel" aria-labelledby="solar-regions">
        <h2 id="solar-regions">Onde ficam esses objetos?</h2>
        <dl className="galaxy-grid">
          {regions.map(([title, description]) => (
            <div className="galaxy-item" key={title}>
              <dt>{title}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="solar-panel" aria-labelledby="solar-meteors">
        <h2 id="solar-meteors">Meteoroide, meteoro ou meteorito?</h2>
        <dl className="galaxy-grid">
          {rocks.map(([title, description]) => (
            <div className="galaxy-item" key={title}>
              <dt>{title}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </section>
      <p className="solar-library-credit">Conteúdo adaptado de Solar System Exploration, da NASA. Créditos das imagens indicados em cada cartão.</p>
    </section>
  );
}
