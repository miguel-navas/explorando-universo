import {Cloud} from 'lucide-react';

const nebulae = [
  {
    name: 'Carina', type: 'Nebulosa de emissão', image: '/assets/destinations/nebulosas.jpg',
    alt: 'Nuvens luminosas de gás na Nebulosa de Carina.',
    description: 'A radiação de estrelas jovens e quentes ioniza o gás. Ao voltar a estados de menor energia, esse gás emite luz. Carina abriga regiões onde novas estrelas se formam.',
    source: 'https://esahubble.org/images/heic0707a/',
    credit: 'NASA, ESA, N. Smith e Hubble Heritage Team (STScI/AURA)',
  },
  {
    name: 'NGC 1999', type: 'Nebulosa de reflexão', image: '/assets/nebulae/reflexao.jpg',
    alt: 'Nuvem de poeira iluminada por uma estrela em NGC 1999.',
    description: 'A poeira espalha a luz da estrela jovem V380 Orionis. Muitas nebulosas de reflexão parecem azuladas porque os grãos espalham a luz azul com mais eficiência.',
    source: 'https://science.nasa.gov/asset/hubble/reflection-nebula-ngc-1999/',
    credit: 'NASA e Hubble Heritage Team (STScI)',
  },
  {
    name: 'Cabeça de Cavalo', type: 'Nebulosa escura', image: '/assets/nebulae/escura.jpg',
    alt: 'Nuvem escura com a silhueta de uma cabeça de cavalo diante de gás luminoso.',
    description: 'Uma nuvem densa de gás e poeira bloqueia a luz visível que vem de trás. A silhueta aparece contra o brilho da nebulosa de emissão IC 434.',
    source: 'https://science.nasa.gov/asset/hubble/the-horsehead-nebula/',
    credit: 'NASA, NOAO, ESA e Hubble Heritage Team (STScI/AURA)',
  },
  {
    name: 'Anel do Sul (NGC 3132)', type: 'Nebulosa planetária', image: '/assets/nebulae/anel.png',
    alt: 'Duas imagens infravermelhas do Anel do Sul, com camadas de gás ao redor das estrelas centrais.',
    description: 'Quando uma estrela semelhante ao Sol perde suas camadas externas, o gás expelido pode brilhar ao redor do núcleo que se torna uma anã branca. O nome vem da aparência arredondada em telescópios antigos.',
    source: 'https://science.nasa.gov/asset/webb/southern-ring-nebula-nircam-and-miri-images-side-by-side/',
    credit: 'NASA, ESA, CSA e STScI',
  },
  {
    name: 'Caranguejo (M1)', type: 'Remanescente de supernova', image: '/assets/nebulae/caranguejo.png',
    alt: 'Filamentos entrelaçados e emissão difusa na Nebulosa do Caranguejo.',
    description: 'O material lançado na explosão de uma estrela se expande pelo espaço. No centro da Nebulosa do Caranguejo está um pulsar, uma estrela de nêutrons em rotação rápida.',
    source: 'https://science.nasa.gov/asset/webb/crab-nebula-nircam-and-miri-image/',
    credit: 'NASA, ESA, CSA, STScI e Tea Temim. Processamento de Joseph DePasquale (STScI)',
  },
];

export default function NebulaGuide() {
  return (
    <section className="destination nebula-destination" aria-labelledby="nebula-title">
      <img className="destination-image" src="/assets/destinations/nebulosas.jpg" alt=""/>
      <div className="destination-content content-width">
        <div className="galaxy-intro">
          <header className="galaxy-heading">
            <p className="eyebrow">EXPLORANDO O UNIVERSO · DESTINO 04</p>
            <Cloud className="destination-icon" size={44} aria-hidden="true"/>
            <h1 id="nebula-title">Nebulosas</h1>
            <p>Explore as nuvens onde estrelas nascem e as que ficam depois que elas morrem.</p>
          </header>
          <section className="destination-panel" aria-labelledby="nebula-definition">
            <h2 id="nebula-definition">O que é uma nebulosa?</h2>
            <p>Uma nebulosa é uma nuvem de gás, poeira ou ambos no espaço. Algumas fazem parte de regiões de formação estelar. Outras surgem quando uma estrela perde suas camadas externas ou explode.</p>
            <a className="galaxy-credit" href="https://science.nasa.gov/mission/hubble/science/universe-uncovered/hubble-nebulae/">Nebulosas observadas pelo Hubble</a>
          </section>
        </div>

        <section className="destination-panel" aria-labelledby="nebula-types">
          <h2 id="nebula-types">Tipos de nebulosas</h2>
          <p>Emissão, reflexão e nebulosas escuras descrevem como as nuvens aparecem na luz visível. Nebulosas planetárias e remanescentes de supernova descrevem como elas se formaram. Essas categorias podem se sobrepor.</p>
          <ul className="galaxy-grid galaxy-gallery nebula-gallery">
            {nebulae.map(nebula => (
              <li className="galaxy-item" key={nebula.name}>
                <a href={nebula.source}>
                  <img src={nebula.image} alt={nebula.alt} width="640" height="400" loading="lazy" decoding="async"/>
                </a>
                <div className="galaxy-card-text">
                  <h3>{nebula.type}</h3>
                  <span>{nebula.name}</span>
                  <p>{nebula.description}</p>
                  <a className="galaxy-credit" href={nebula.source}>{nebula.credit}</a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="destination-panel" aria-labelledby="nebula-light">
          <h2 id="nebula-light">O que as cores revelam?</h2>
          <p>Telescópios observam faixas diferentes de luz. O infravermelho pode atravessar parte da poeira que esconde estrelas na luz visível. Nas imagens compostas, cores diferentes podem representar filtros ou faixas de radiação que nossos olhos não enxergam.</p>
          <a className="galaxy-credit" href="https://science.nasa.gov/universe/stories/quick-reads/decoding-nebulae/">Como a NASA interpreta imagens de nebulosas</a>
        </section>
      </div>
    </section>
  );
}
