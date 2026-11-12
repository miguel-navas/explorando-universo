import {Download, Sparkles} from 'lucide-react';
import NasaMedia from './NasaMedia';

const composition = [
  ['Estrelas e sistemas planetários', 'As estrelas produzem a maior parte da luz visível da galáxia. Muitas têm planetas em órbita.'],
  ['Gás e poeira', 'Nuvens frias de gás, principalmente hidrogênio, podem dar origem a novas estrelas. A poeira pode esconder regiões inteiras na luz visível.'],
  ['Matéria escura', 'Sua presença é inferida pelo efeito da gravidade sobre as estrelas e o gás e pela forma como desvia a luz. Em muitas galáxias, ela forma um halo que se estende além da região visível.'],
  ['Buraco negro central', 'A maioria das galáxias grandes abriga um buraco negro supermassivo no centro. Alguns revelam sua presença por jatos de partículas.'],
];

const messier = 'https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-';
const eso = 'https://www.eso.org/public/images/';

const examples = [
  ['via-lactea', 'Via Láctea', 'Espiral barrada', 'Nossa galáxia, fotografada em panorama a partir da Terra. O Sistema Solar fica no Esporão de Órion.', eso + 'eso0932a/', 'ESO/S. Brunier'],
  ['andromeda', 'Andrômeda (M31)', 'Espiral barrada', 'A galáxia de grande porte mais próxima da Via Láctea. O mosaico mostra parte de seu disco.', messier + '31/', 'NASA, ESA, J. Dalcanton, B. F. Williams, L. C. Johnson, equipe PHAT e R. Gendler'],
  ['triangulo', 'Triângulo (M33)', 'Espiral', 'Vizinha do Grupo Local, com regiões de formação de estrelas bem visíveis.', messier + '33/', 'NASA, ESA, M. Durbin, J. Dalcanton e B. F. Williams'],
  ['redemoinho', 'Redemoinho (M51)', 'Espiral', 'Seus braços bem definidos se destacam na interação com uma galáxia companheira.', messier + '51/', 'NASA, ESA, S. Beckwith e Hubble Heritage Team (STScI/AURA)'],
  ['sombrero', 'Sombrero (M104)', 'Disco visto de perfil', 'Um centro brilhante e uma faixa escura de poeira dão à galáxia o aspecto de um chapéu.', messier + '104/', 'NASA e Hubble Heritage Team (STScI/AURA)'],
  ['m87', 'Messier 87 (M87)', 'Elíptica gigante', 'Uma das maiores galáxias do aglomerado de Virgem, com um jato lançado da região do buraco negro central.', messier + '87/', 'NASA, ESA e Hubble Heritage Team (STScI/AURA). Agradecimentos a P. Côté e E. Baltz'],
  ['grande-nuvem', 'Grande Nuvem de Magalhães', 'Anã irregular', 'Satélite da Via Láctea que abriga a Nebulosa da Tarântula.', eso + 'eso1914a/', 'ESO/VMC Survey'],
  ['pequena-nuvem', 'Pequena Nuvem de Magalhães', 'Anã irregular', 'Vizinha da Grande Nuvem e visível a olho nu em céus escuros do hemisfério sul. Aqui aparece em infravermelho.', eso + 'eso1714a/', 'ESO/VISTA VMC'],
];

const types = [
  ['Espirais', 'redemoinho', 'Redemoinho (M51)', messier + '51/', 'NASA, ESA, S. Beckwith e Hubble Heritage Team (STScI/AURA)', 'Têm um disco com braços que abrigam gás, poeira e regiões de formação de estrelas. Nas espirais barradas, como a Via Láctea, os braços partem de uma barra central.'],
  ['Elípticas', 'm87', 'Messier 87 (M87)', messier + '87/', 'NASA, ESA e Hubble Heritage Team (STScI/AURA). Agradecimentos a P. Côté e E. Baltz', 'Têm forma arredondada ou oval. Muitas contêm principalmente estrelas antigas e pouco gás frio. M87 é um exemplo.'],
  ['Lenticulares', 'ngc-5866', 'NGC 5866', 'https://science.nasa.gov/asset/hubble/acs-image-of-ngc-5866/', 'NASA, ESA e Hubble Heritage Project. Agradecimentos a W. Keel', 'Têm disco e bojo central, mas seus braços espirais não são bem definidos.'],
  ['Irregulares', 'grande-nuvem', 'Grande Nuvem de Magalhães', eso + 'eso1914a/', 'ESO/VMC Survey', 'Têm formas variadas, sem o padrão de braços ou o contorno regular das elípticas. As Nuvens de Magalhães são exemplos.'],
];

const structures = [
  ['Grupos e aglomerados', 'Galáxias reunidas pela gravidade. A Via Láctea, Andrômeda e Triângulo fazem parte do Grupo Local. Aglomerados, como o de Virgem, são maiores.'],
  ['Superaglomerados', 'Regiões que reúnem grupos e aglomerados em escalas ainda maiores. O Grupo Local fica na região conhecida como Laniakea.'],
  ['Filamentos e paredes', 'Faixas e lâminas onde a matéria se concentra. Muitos aglomerados ficam nas junções dos filamentos.'],
  ['Vazios cósmicos', 'Grandes regiões entre filamentos e paredes onde há bem menos galáxias do que nas regiões ao redor.'],
];

const studies = [
  ['Gaia e as Nuvens de Magalhães', 'A equipe usou medições de posição e movimento das estrelas para estudar a rotação e a estrutura dessas duas galáxias.', 'https://arxiv.org/abs/2012.01771'],
  ['PHANGS–JWST e o nascimento de estrelas', 'O levantamento combina observações infravermelhas do Webb com dados de outros telescópios para estudar onde novas estrelas se formam e como interagem com o gás e a poeira.', 'https://phangs.stsci.edu/'],
  ['Event Horizon Telescope e M87', 'Uma rede de radiotelescópios registrou um anel de emissão ao redor da sombra do buraco negro supermassivo no centro de M87.', 'https://doi.org/10.3847/2041-8213/AB0EC7'],
];

export default function GalaxyGuide({description}: {description: string}) {
  return (
    <div className="galaxy-guide">
      <div className="galaxy-intro">
        <header className="galaxy-heading">
          <p className="eyebrow">EXPLORANDO O UNIVERSO · DESTINO 02</p>
          <Sparkles className="destination-icon" size={50} aria-hidden="true"/>
          <h1>Galáxias</h1>
          <p>{description}</p>
        </header>
        <section className="destination-panel" aria-labelledby="galaxy-definition">
          <h2 id="galaxy-definition">O que é uma galáxia?</h2>
          <p>Uma galáxia é um sistema de estrelas, gás, poeira e, em geral, matéria escura, mantido unido pela gravidade. A Via Láctea é a galáxia onde fica o nosso Sistema Solar.</p>
        </section>
      </div>

      <section className="destination-panel" aria-labelledby="galaxy-composition">
        <h2 id="galaxy-composition">Do que uma galáxia é feita?</h2>
        <p>A composição varia. Galáxias espirais costumam ter mais gás frio e poeira. Muitas elípticas têm pouco desses materiais e são dominadas por estrelas antigas.</p>
        <dl className="galaxy-grid">
          {composition.map(([name, description]) => (
            <div className="galaxy-item" key={name}>
              <dt>{name}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="destination-panel" aria-labelledby="galaxy-types">
        <h2 id="galaxy-types">Tipos de galáxias</h2>
        <p>A forma do disco, dos braços e do centro ajuda os astrônomos a classificar as galáxias.</p>
        <ul className="galaxy-grid galaxy-gallery">
          {types.map(([name, image, example, source, credit, description]) => (
            <li className="galaxy-item" key={name}>
              <img src={import.meta.env.BASE_URL + 'assets/galaxies/' + image + '.jpg'} alt={example} width="640" height="400" loading="lazy" decoding="async"/>
              <div className="galaxy-card-text">
                <h3>{name}</h3>
                <span>{example}</span>
                <p>{description}</p>
                <a className="galaxy-credit" href={source}>{credit}</a>
                <a className="nasa-image-download" href={import.meta.env.BASE_URL + 'assets/galaxies/' + image + '.jpg'} download>
                  <Download size={15} aria-hidden="true"/>Baixar imagem
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="destination-panel" aria-labelledby="galaxy-examples">
        <h2 id="galaxy-examples">8 galáxias conhecidas</h2>
        <p>Uma seleção para conhecer formas diferentes, das nossas vizinhas às galáxias gigantes.</p>
        <ul className="galaxy-grid galaxy-gallery">
          {examples.map(([id, name, type, description, source, credit]) => (
            <li className="galaxy-item" key={id}>
              <img src={import.meta.env.BASE_URL + 'assets/galaxies/' + id + '.jpg'} alt={'Imagem de ' + name} width="640" height="400" loading="lazy" decoding="async"/>
              <div className="galaxy-card-text">
                <h3>{name}</h3>
                <span>{type}</span>
                <p>{description}</p>
                <a className="galaxy-credit" href={source}>{credit}</a>
                <a className="nasa-image-download" href={import.meta.env.BASE_URL + 'assets/galaxies/' + id + '.jpg'} download>
                  <Download size={15} aria-hidden="true"/>Baixar imagem
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="destination-panel" aria-labelledby="galaxy-structures">
        <h2 id="galaxy-structures">Estruturas em grande escala <span className="galaxy-english" lang="en">Large Scale Structures</span></h2>
        <p>Em escalas de milhões de anos-luz, a gravidade concentra matéria em uma rede chamada <strong>teia cósmica</strong>. Nela, galáxias e aglomerados se distribuem ao longo de filamentos e paredes, separados por grandes vazios.</p>
        <dl className="galaxy-grid">
          {structures.map(([name, description]) => (
            <div className="galaxy-item" key={name}>
              <dt>{name}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
        <p className="galaxy-structure-links">
          <a href="https://science.nasa.gov/universe/galaxies/large-scale-structures/">Teia cósmica na NASA</a>
          <a href="https://www.desi.lbl.gov/2026/07/03/exploring-what-desi-measures-an-interactive-cosmic-web-in-your-browser/">Explorar o mapa interativo do DESI</a>
        </p>
      </section>

      <section className="destination-panel" aria-labelledby="galaxy-evolution">
        <h2 id="galaxy-evolution">Como as galáxias evoluem?</h2>
        <p>Imagens de galáxias a diferentes distâncias mostram épocas diferentes da história cósmica. Comparando essas populações, astrônomos investigam como as galáxias crescem e mudam de forma.</p>
        <dl className="galaxy-grid">
          <div className="galaxy-item">
            <dt>Gravidade e formação de estrelas</dt>
            <dd>O gás se concentra pela gravidade e pode formar novas estrelas. A quantidade de gás disponível influencia o ritmo desse processo.</dd>
          </div>
          <div className="galaxy-item">
            <dt>Encontros e caudas de maré</dt>
            <dd>Quando duas galáxias se aproximam, a atração gravitacional pode deformar seus discos e produzir longas caudas. A compressão das nuvens de gás pode estimular o nascimento de estrelas.</dd>
          </div>
          <div className="galaxy-item">
            <dt>Fusões</dt>
            <dd>Alguns encontros terminam com as duas galáxias formando um único sistema. A distribuição das estrelas, do gás e da poeira pode mudar bastante, e parte do material pode alimentar o buraco negro central.</dd>
          </div>
        </dl>
      </section>

      <NasaMedia topic="galaxias" id="galaxy-multimedia"/>

      <section className="destination-panel" aria-labelledby="galaxy-studies">
        <h2 id="galaxy-studies">Como as galáxias são estudadas</h2>
        <ul className="galaxy-grid">
          {studies.map(([name, description, source]) => (
            <li className="galaxy-item" key={name}>
              <h3><a href={source}>{name}</a></h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="galaxy-sources">
        Fontes: <a href="https://science.nasa.gov/universe/galaxies/">Galáxias (NASA)</a>
        {' · '}<a href="https://science.nasa.gov/universe/galaxies/types/">Tipos de galáxias (NASA)</a>
        {' · '}<a href="https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/">Catálogo Messier (Hubble)</a>
      </p>
    </div>
  );
}
