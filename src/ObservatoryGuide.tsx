import {Telescope} from 'lucide-react';

const observatories = [
  {
    name: 'Observatório do Pico dos Dias (OPD)',
    location: 'Brazópolis e Piranguçu, Minas Gerais · Brasil',
    instrument: 'Observação óptica · telescópio principal de 1,60 m',
    description: 'O Laboratório Nacional de Astrofísica opera o observatório na Serra da Mantiqueira. Entre os estudos feitos ali estão observações de estrelas binárias, em que os pesquisadores distinguem as duas estrelas de um mesmo sistema.',
    image: '/assets/observatories/pico-dos-dias.jpg', alt: 'Instalações do Observatório do Pico dos Dias.',
    source: 'https://commons.wikimedia.org/wiki/File:Observat%C3%B3rio_do_Pico_dos_Dias.JPG',
    research: 'https://www.gov.br/mcti/pt-br/acesso-a-informacao/unidades-de-pesquisa/relatorio-executivo/lna-laboratorio-nacional-de-astrofisica/relatorio_tcg_lna_2019_final.pdf',
    credit: 'Foto de Cintia Lemes',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    name: 'Paranal · Very Large Telescope (VLT)',
    location: 'Cerro Paranal, deserto do Atacama · Chile',
    instrument: 'Visível e infravermelho · quatro telescópios principais de 8,2 m',
    description: 'Os telescópios do VLT ajudaram a acompanhar estrelas em órbita ao redor do buraco negro supermassivo no centro da Via Láctea e a obter a primeira imagem direta de um exoplaneta.',
    image: '/assets/destinations/observatorios.jpg', alt: 'Vista aérea das cúpulas do Observatório Paranal ao pôr do sol.',
    source: 'https://www.eso.org/public/images/potw1535a/',
    research: 'https://www.eso.org/public/teles-instr/paranal-observatory/vlt/',
    credit: 'Foto de G. Hüdepohl (atacamaphoto.com)/ESO',
  },
  {
    name: 'ALMA',
    location: 'Planície de Chajnantor, a cerca de 5.000 m de altitude · Chile',
    instrument: 'Ondas milimétricas e submilimétricas · 66 antenas',
    description: 'As antenas combinam seus sinais para revelar gás frio e poeira em regiões onde nascem estrelas. O ALMA também investiga discos onde planetas podem se formar e galáxias distantes.',
    image: '/assets/observatories/alma.jpg', alt: 'Antenas do ALMA sob o arco da Via Láctea no deserto chileno.',
    source: 'https://www.eso.org/public/images/potw2036a/',
    research: 'https://www.hq.eso.org/public/teles-instr/alma/',
    credit: 'Foto de ESO/B. Tafreshi (twanight.org)',
  },
  {
    name: 'Telescópio Espacial James Webb',
    location: 'Ao redor do ponto L2 do sistema Sol–Terra · cerca de 1,5 milhão de km da Terra',
    instrument: 'Infravermelho · espelho principal de 6,5 m',
    description: 'O Webb investiga as primeiras galáxias e a formação de estrelas. Também separa a luz em diferentes comprimentos de onda para identificar gases nas atmosferas de exoplanetas.',
    image: '/assets/observatories/webb.jpg', alt: 'Telescópio James Webb durante a preparação em solo antes do lançamento.',
    source: 'https://www.nasa.gov/universe/nasas-james-webb-space-telescope-has-completed-testing/',
    research: 'https://science.nasa.gov/mission/webb/',
    credit: 'Foto de NASA/Chris Gunn',
  },
];

const observationTypes = [
  ['Luz visível', 'Revela detalhes de estrelas, nebulosas e galáxias. Ao separar a luz em um espectro, os pesquisadores podem identificar elementos químicos e medir velocidades.'],
  ['Infravermelho', 'Em certos comprimentos de onda, permite observar através de nuvens de poeira. Também revela a luz de galáxias distantes que se deslocou para o infravermelho com a expansão do Universo.'],
  ['Ondas de rádio', 'Antenas captam sinais invisíveis aos nossos olhos. Nas faixas milimétrica e submilimétrica, esses sinais revelam gás frio e poeira em regiões de formação estelar.'],
];

export default function ObservatoryGuide() {
  return (
    <section className="destination observatory-destination" aria-labelledby="observatory-title">
      <img className="destination-image" src="/assets/destinations/observatorios.jpg" alt=""/>
      <div className="destination-content content-width">
        <div className="galaxy-intro">
          <header className="galaxy-heading">
            <p className="eyebrow">EXPLORANDO O UNIVERSO · DESTINO 07</p>
            <Telescope className="destination-icon" size={44} aria-hidden="true"/>
            <h1 id="observatory-title">Observatórios</h1>
            <p>Da Serra da Mantiqueira ao espaço, conheça os instrumentos que revelam diferentes partes do Universo.</p>
          </header>
          <section className="destination-panel" aria-labelledby="observatory-count">
            <h2 id="observatory-count">Quantos observatórios existem?</h2>
            <p>Não há um total mundial consolidado. A contagem depende de incluir instalações profissionais, universitárias, amadoras e espaciais. Um mesmo local pode abrigar vários instrumentos. No ALMA, por exemplo, 66 antenas funcionam em conjunto.</p>
            <p>O Minor Planet Center mantém um cadastro de locais e plataformas que registram observações de pequenos corpos do Sistema Solar. É um exemplo de catálogo com uma finalidade específica.</p>
            <a className="galaxy-credit" href="https://docs.minorplanetcenter.net/mpc-ops-docs/apis/obscodes/">Cadastro do Minor Planet Center</a>
          </section>
        </div>

        <section className="destination-panel" aria-labelledby="observatory-examples">
          <h2 id="observatory-examples">Observatórios de referência</h2>
          <p>Quatro exemplos de como a localização e os instrumentos definem o que se pode estudar.</p>
          <ul className="galaxy-grid galaxy-gallery">
            {observatories.map(observatory => (
              <li className="galaxy-item" key={observatory.name}>
                <a href={observatory.source}>
                  <img src={observatory.image} alt={observatory.alt} width="640" height="400" loading="lazy" decoding="async"/>
                </a>
                <div className="galaxy-card-text">
                  <h3>{observatory.name}</h3>
                  <span>{observatory.location}</span>
                  <p><strong>{observatory.instrument}</strong></p>
                  <p>{observatory.description}</p>
                  <a className="galaxy-credit" href={observatory.source}>{observatory.credit}</a>
                  {observatory.license && <> · <a className="galaxy-credit" href={observatory.license}>CC BY-SA 4.0</a></>}
                  <br/>
                  <a className="galaxy-credit" href={observatory.research}>Conheça a pesquisa</a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="destination-panel" aria-labelledby="observatory-methods">
          <h2 id="observatory-methods">O que cada tipo de observação revela?</h2>
          <dl className="galaxy-grid">
            {observationTypes.map(([name, description]) => (
              <div className="galaxy-item" key={name}>
                <dt>{name}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="destination-panel" aria-labelledby="observatory-sites">
          <h2 id="observatory-sites">Por que construir em montanhas, desertos ou no espaço?</h2>
          <p>Em terra, a distância das cidades reduz a poluição luminosa. No ALMA, o ar seco em grande altitude também ajuda porque o vapor d’água absorve parte das ondas que as antenas precisam captar. No espaço, o Webb observa no infravermelho sem essa interferência da atmosfera terrestre.</p>
        </section>
      </div>
    </section>
  );
}
