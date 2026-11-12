import {Telescope} from 'lucide-react';
import ObservatoryMissions from './ObservatoryMissions';

const observatories = [
  {
    name: 'Observatório do Pico dos Dias (OPD)',
    location: 'Brazópolis e Piranguçu, Minas Gerais · Brasil',
    instrument: 'Observação óptica · telescópio principal de 1,60 m',
    description: 'O Laboratório Nacional de Astrofísica opera o observatório na Serra da Mantiqueira. Entre os estudos feitos ali estão observações de estrelas binárias, em que os pesquisadores distinguem as duas estrelas de um mesmo sistema.',
    image: import.meta.env.BASE_URL + 'assets/observatories/pico-dos-dias.jpg', alt: 'Instalações do Observatório do Pico dos Dias.',
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
    image: import.meta.env.BASE_URL + 'assets/destinations/observatorios.jpg', alt: 'Vista aérea das cúpulas do Observatório Paranal ao pôr do sol.',
    source: 'https://www.eso.org/public/images/potw1535a/',
    research: 'https://www.eso.org/public/teles-instr/paranal-observatory/vlt/',
    credit: 'Foto de G. Hüdepohl (atacamaphoto.com)/ESO',
  },
  {
    name: 'ALMA',
    location: 'Planície de Chajnantor, a cerca de 5.000 m de altitude · Chile',
    instrument: 'Ondas milimétricas e submilimétricas · 66 antenas',
    description: 'As antenas combinam seus sinais para revelar gás frio e poeira em regiões onde nascem estrelas. O ALMA também investiga discos onde planetas podem se formar e galáxias distantes.',
    image: import.meta.env.BASE_URL + 'assets/observatories/alma.jpg', alt: 'Antenas do ALMA sob o arco da Via Láctea no deserto chileno.',
    source: 'https://www.eso.org/public/images/potw2036a/',
    research: 'https://www.hq.eso.org/public/teles-instr/alma/',
    credit: 'Foto de ESO/B. Tafreshi (twanight.org)',
  },

];

const observationTypes = [
  ['Luz visível', 'Revela detalhes de estrelas, nebulosas e galáxias. Ao separar a luz em um espectro, os pesquisadores podem identificar elementos químicos e medir velocidades.'],
  ['Ultravioleta', 'Destaca estrelas jovens e quentes e o gás energizado ao seu redor. Ajuda a investigar a formação estelar e atmosferas de planetas.'],
  ['Infravermelho', 'Em certos comprimentos de onda, permite observar através de nuvens de poeira. Também revela a luz de galáxias distantes que se deslocou para o infravermelho com a expansão do Universo.'],
  ['Raios X e raios gama', 'Revelam processos de alta energia em gás muito quente, restos de estrelas e regiões próximas de buracos negros. Diferentes instrumentos medem a imagem, o espectro e a polarização dessa radiação.'],
  ['Micro-ondas', 'Permitem estudar a radiação cósmica de fundo, um registro do Universo jovem, e pequenas diferenças de temperatura e polarização nesse sinal.'],
  ['Ondas de rádio', 'Antenas captam sinais invisíveis aos nossos olhos. Nas faixas milimétrica e submilimétrica, esses sinais revelam gás frio e poeira em regiões de formação estelar.'],
];

export default function ObservatoryGuide() {
  return (
    <section className="destination observatory-destination" aria-labelledby="observatory-title">
      <img className="destination-image" src={import.meta.env.BASE_URL + 'assets/destinations/observatorios.jpg'} alt=""/>
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

        <ObservatoryMissions/>

        <section className="destination-panel" aria-labelledby="observatory-examples">
          <h2 id="observatory-examples">Observatórios em solo</h2>
          <p>Do Brasil ao deserto do Atacama, três exemplos de como o local e os instrumentos definem o que se pode estudar.</p>
          <ul className="galaxy-grid galaxy-gallery observatory-ground-grid">
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

        <section className="destination-panel" aria-labelledby="observatory-together">
          <h2 id="observatory-together">Por que observar o mesmo objeto com vários instrumentos?</h2>
          <p>Cada faixa revela uma parte da história. Uma região de formação estelar pode mostrar estrelas no visível, poeira no infravermelho e gás frio nas ondas milimétricas. Ao combinar imagens e espectros, os astrônomos investigam temperatura, composição, movimento e a relação entre esses materiais.</p>
          <p>Uma imagem astronômica pode atribuir cores visíveis a sinais que nossos olhos não enxergam. Por isso, mapas de raios X ou infravermelho devem ser interpretados junto de suas legendas. As imagens dos instrumentos nesta página também distinguem fotografias de ilustrações.</p>
        </section>

        <section className="destination-panel" aria-labelledby="observatory-sites">
          <h2 id="observatory-sites">Por que construir em montanhas, desertos ou no espaço?</h2>
          <p>Em terra, a distância das cidades reduz a poluição luminosa. No ALMA, o ar seco em grande altitude também ajuda porque o vapor d’água absorve parte das ondas que as antenas precisam captar. No espaço, o Webb observa no infravermelho sem essa interferência da atmosfera terrestre.</p>
        </section>
        <p className="observatory-source">Conteúdo adaptado de <a href="https://science.nasa.gov/universe/observatories/">Observatories · NASA Science</a> e das páginas oficiais das missões. As agências responsáveis e os créditos das imagens estão indicados nos cartões.</p>
      </div>
    </section>
  );
}
