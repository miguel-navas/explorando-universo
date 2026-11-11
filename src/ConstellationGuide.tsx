import {Network} from 'lucide-react';

const charts = [
  {id: 'ORI', file: 'Orion', name: 'Órion', clue: 'Comece pelas Três Marias, três estrelas alinhadas que formam o cinturão. Procure também Betelgeuse, avermelhada, e Rigel, azulada.'},
  {id: 'CRU', file: 'Crux', name: 'Cruzeiro do Sul', clue: 'Procure a cruz compacta formada por quatro estrelas principais. Acrux (Alfa do Cruzeiro) marca a ponta de seu eixo mais longo.'},
  {id: 'SCO', file: 'Scorpius', name: 'Escorpião', clue: 'Encontre Antares, a estrela avermelhada que marca o coração do escorpião. A partir dela, siga a sequência de estrelas até a cauda curvada.'},
  {id: 'CEN', file: 'Centaurus', name: 'Centauro', clue: 'Alfa e Beta Centauri formam um par brilhante próximo do Cruzeiro do Sul. Elas ajudam a localizar a cruz entre as estrelas da região.'},
];

export default function ConstellationGuide() {
  return (
    <section className="destination constellation-destination" aria-labelledby="constellation-title">
      <img className="destination-image" src="/assets/destinations/constelacoes.jpg" alt=""/>
      <div className="destination-content content-width">
        <div className="galaxy-intro">
          <header className="galaxy-heading">
            <p className="eyebrow">EXPLORANDO O UNIVERSO · DESTINO 03</p>
            <Network className="destination-icon" size={44} aria-hidden="true"/>
            <h1 id="constellation-title">Constelações</h1>
            <p>Aprenda a reconhecer padrões de estrelas no céu do Brasil.</p>
          </header>
          <section className="destination-panel" aria-labelledby="constellation-definition">
            <h2 id="constellation-definition">O que é uma constelação?</h2>
            <p>Na astronomia, uma constelação é uma região delimitada do céu. A União Astronômica Internacional reconhece 88 regiões, que juntas cobrem toda a esfera celeste.</p>
            <p>As linhas dos mapas ajudam a reconhecer figuras. Duas estrelas que parecem vizinhas no céu podem estar a distâncias muito diferentes da Terra.</p>
            <a className="galaxy-credit" href="https://www.iau.org/IAU/Astronomy-FAQs/Constellations.aspx">As 88 constelações da IAU</a>
          </section>
        </div>

        <section className="destination-panel" aria-labelledby="constellation-charts">
          <h2 id="constellation-charts">Quatro constelações para começar</h2>
          <p>Abra os mapas para ler os nomes das estrelas e ver os limites de cada região. A posição das figuras no céu muda com a hora, a época do ano e o local de observação.</p>
          <ul className="galaxy-grid galaxy-gallery constellation-charts">
            {charts.map(chart => (
              <li className="galaxy-item" key={chart.id}>
                <a href={'/assets/constellations/' + chart.id + '.svg'} aria-label={'Ampliar mapa de ' + chart.name}>
                  <img src={'/assets/constellations/' + chart.id + '.svg'} alt={'Mapa estelar de ' + chart.name} width="640" height="400" loading="lazy"/>
                </a>
                <div className="galaxy-card-text">
                  <h3>{chart.name}</h3>
                  <span>{chart.file} · {chart.id}</span>
                  <p>{chart.clue}</p>
                  <a className="galaxy-credit" href={'https://commons.wikimedia.org/wiki/File:' + chart.file + '_IAU.svg'}>Mapa: IAU e Sky &amp; Telescope</a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="destination-panel" aria-labelledby="constellation-orion">
          <h2 id="constellation-orion">Órion em fotografia</h2>
          <p>Compare o mapa com a foto. Na imagem, as Três Marias formam uma pequena linha diagonal perto do centro. O brilho difuso à esquerda do cinturão é a Nebulosa de Órion.</p>
          <figure className="cosmos-figure">
            <img src="/assets/destinations/constelacoes.jpg" alt="Fotografia de Órion com o cinturão de três estrelas e a nebulosa brilhante à esquerda." loading="lazy"/>
            <figcaption><a href="https://www.eso.org/public/images/orion-ch17-bardon-cc/">Fotografia de Zdeněk Bardon/ESO</a></figcaption>
          </figure>
        </section>
      </div>
    </section>
  );
}
