import {useRef, useState} from 'react';
import {Download, Expand, Orbit, X} from 'lucide-react';

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

export type SolarGuideTab = 'luas' | 'corpos' | 'regioes' | 'missoes';
type GalleryItem = {name: string; image: string; alt: string; description: string; credit: string; tag?: string; measurement?: string; caption?: string};
// Imagens NASA: Galileo; Cassini PIA14599; Europa Clipper PIA26068.
const moons: GalleryItem[] = [
  {name: 'Lua', tag: 'Terra', image: 'satellites/moon-apollo11.jpg', alt: 'Disco inteiro da Lua fotografado pela tripulação da Apollo 11.', description: 'Rochas, crateras e registros da história do Sistema Solar. É o único satélite natural da Terra.', measurement: 'Diâmetro · 3.475 km', credit: 'NASA · fotografia da Apollo 11'},
  {name: 'Europa', tag: 'Júpiter', image: 'solar-guide/europa.jpg', alt: 'Superfície gelada de Europa, marcada por fraturas.', description: 'Uma crosta de gelo cobre um oceano que pode reunir condições favoráveis à vida. A missão Europa Clipper investigará esse ambiente.', measurement: 'Diâmetro · 3.122 km', credit: 'NASA/JPL-Caltech/SETI Institute · Galileo'},
  {name: 'Titã', tag: 'Saturno', image: 'solar-guide/titan.jpg', alt: 'Titã envolta por sua atmosfera, com Saturno ao fundo.', description: 'Atmosfera espessa e lagos de metano e etano na superfície. A sonda Huygens pousou ali em 2005.', measurement: 'Diâmetro · 5.150 km', credit: 'NASA/JPL-Caltech/Space Science Institute'},
  {name: 'Encélado', tag: 'Saturno', image: 'solar-guide/enceladus.jpg', alt: 'Pluma de material ejetado da região sul de Encélado.', description: 'Jatos lançam água e partículas de gelo de uma região próxima ao polo sul, fornecendo pistas sobre seu oceano interno.', measurement: 'Diâmetro · 504 km', credit: 'NASA/JPL-Caltech/Space Science Institute · Cassini'},
];
const missions: GalleryItem[] = [
  {name: 'Europa Clipper', tag: 'Um mundo oceânico', image: 'solar-guide/europa-clipper.jpg', alt: 'Conceito artístico da sonda Europa Clipper em órbita de Júpiter.', description: 'Lançada em 14 de outubro de 2024, foi projetada para investigar Europa e avaliar se a lua reúne condições de habitabilidade.', credit: 'Conceito artístico · NASA/JPL-Caltech'},
  {name: 'Juno', tag: 'Investigar Júpiter', image: 'probes/juno.jpg', alt: 'Conceito artístico da sonda Juno sobre o polo sul de Júpiter.', description: 'Medições de gravidade, campo magnético e atmosfera ajudam a investigar a estrutura do maior planeta do Sistema Solar.', credit: 'Conceito artístico · NASA/JPL-Caltech'},
  {name: 'Voyager 1 e 2', tag: 'Além da heliopausa', image: 'destinations/sondas.jpg', alt: 'Conceito artístico de uma sonda Voyager no espaço.', description: 'As duas sondas cruzaram a heliopausa depois de explorar planetas gigantes. Seus instrumentos investigam o ambiente interestelar.', credit: 'Conceito artístico · NASA/JPL-Caltech'},
];
const headers = {
  luas: ['Luas: mundos com histórias próprias', 'Da superfície craterada da Lua aos oceanos escondidos sob o gelo.'],
  corpos: ['Pequenos mundos, grandes pistas', 'Remanescentes que ajudam a reconstituir a formação da nossa vizinhança.'],
  regioes: ['Como tudo começou e até onde vai?', 'Há cerca de 4,6 bilhões de anos, uma nuvem de gás e poeira deu origem ao Sol e ao disco que formou os planetas.'],
  missoes: ['Quem explora esses mundos?', 'Instrumentos e missões conectam as imagens às perguntas científicas.'],
};

export default function SolarGuide({tab}: {tab: SolarGuideTab}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [expanded, setExpanded] = useState<GalleryItem>();
  const asset = import.meta.env.BASE_URL + 'assets/';
  const items: GalleryItem[] = tab === 'luas' ? moons : tab === 'missoes' ? missions : smallBodies.map(body => ({...body, image: 'solar-guide/' + body.image}));
  function expand(item: GalleryItem) {
    setExpanded(item);
    dialog.current?.showModal();
  }
  return <div className="solar-library">
    <header className="solar-library-heading"><h2>{headers[tab][0]}</h2><p>{headers[tab][1]}</p></header>
    {tab === 'regioes' ? <>
      <ol className="solar-region-map" aria-label="Regiões do Sistema Solar, em sequência sem escala">
        {['Sol', 'Planetas rochosos', 'Cinturão de asteroides', 'Planetas gigantes', 'Cinturão de Kuiper', 'Nuvem de Oort'].map(name => <li key={name}>{name}</li>)}
      </ol>
      <div className="solar-region-cards">
        <article className="solar-panel"><Orbit aria-hidden="true"/><h3>Órbitas e escalas</h3><p>Uma unidade astronômica, ou UA, equivale aproximadamente à distância média entre a Terra e o Sol: 150 milhões de quilômetros. Os tamanhos dos astros e as distâncias precisam de escalas diferentes para caber em uma ilustração.</p></article>
        {regions.map(([name, description]) => <article className="solar-panel" key={name}><h3>{name}</h3><p>{description}</p></article>)}
      </div>
      <p className="solar-library-note">Também viajamos pela Via Láctea. O Sistema Solar fica no Esporão de Órion e leva cerca de 230 milhões de anos para completar uma volta ao centro galáctico.</p>
    </> : <>
      <ul className={'solar-gallery ' + (tab === 'luas' ? 'solar-gallery-moons' : '')}>
        {items.map(item => <li className="solar-panel" key={item.name}>
          <img src={asset + item.image} alt={item.alt} width="640" height="400" loading="lazy" decoding="async"/>
          <div className="solar-gallery-text">
            {item.tag && <span className="solar-card-tag">{item.tag}</span>}
            <h3>{item.name}</h3><p>{item.description}</p>
            {item.measurement && <strong>{item.measurement}</strong>}
            {item.caption && <p className="solar-library-caption">{item.caption}</p>}
            <small>Imagem · {item.credit}</small>
            <div className="solar-image-actions">
              <button type="button" onClick={() => expand(item)} aria-label={'Ampliar imagem de ' + item.name}><Expand size={14} aria-hidden="true"/>Ampliar</button>
              <a href={asset + item.image} download aria-label={'Baixar imagem de ' + item.name}><Download size={14} aria-hidden="true"/>Baixar</a>
            </div>
          </div>
        </li>)}
      </ul>
      {tab === 'luas' && <p className="solar-library-note">Uma lua natural orbita outro corpo. Existem luas de planetas, de planetas anões e até de asteroides. Esta é uma seleção de mundos, não a contagem total de luas de cada planeta.</p>}
      {tab === 'corpos' && <details className="solar-rocks"><summary>Meteoroide, meteoro ou meteorito?</summary><dl className="solar-region-cards">{rocks.map(([name, description]) => <div className="solar-panel" key={name}><dt>{name}</dt><dd>{description}</dd></div>)}</dl></details>}
      {tab === 'missoes' && <p className="solar-library-note">Fotografias, mosaicos e conceitos artísticos são identificados nas legendas. Uma ilustração de missão representa a nave e seu ambiente de exploração.</p>}
    </>}
    <dialog ref={dialog} className="solar-image-dialog" aria-labelledby="solar-expanded-title">
      <form method="dialog"><button aria-label="Fechar imagem"><X size={20}/></button></form>
      {expanded && <figure><h2 id="solar-expanded-title">{expanded.name}</h2><img src={asset + expanded.image} alt={expanded.alt}/><figcaption>{expanded.caption ?? expanded.description}<small>Imagem · {expanded.credit}</small></figcaption><a href={asset + expanded.image} download><Download size={15} aria-hidden="true"/>Baixar imagem</a></figure>}
    </dialog>
  </div>;
}
