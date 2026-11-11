import ObservatoryGuide from './ObservatoryGuide';
import ProbeGuide from './ProbeGuide';
import SatelliteGuide from './SatelliteGuide';
import NebulaGuide from './NebulaGuide';
import ConstellationGuide from './ConstellationGuide';
import CosmosGuide, {cosmosTopics} from './CosmosGuide';
import GalaxyGuide from './GalaxyGuide';
import SolarSystem from './SolarSystem';
import {useEffect,useRef,useState} from 'react';
import {Home,Orbit,Sparkles,Network,Cloud,Satellite,RadioTower,Telescope,Search,Moon,Sun,Play,BookOpen,ArrowRight,ArrowLeft,ChevronLeft,ChevronRight,X,Menu,ArrowUpRight,Compass,ChevronDown} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
const A='/assets/';
type Section={id:string;name:string;subtitle:string;description:string;image:string;icon:LucideIcon;credit:string;source:string};
const sections:Section[]=[
{id:'solar',name:'Sistema Solar',subtitle:'Planetas, luas, asteroides e muito mais',description:'Explore os oito planetas, o Sol, suas luas e os pequenos mundos que compõem nossa vizinhança cósmica.',image:'solar.jpg',icon:Orbit,credit:'NASA/JPL',source:'https://science.nasa.gov/photojournal/photojournal-home-page-graphic-2007/'},
{id:'galaxias',name:'Galáxias',subtitle:'Bilhões de estrelas em estruturas colossais',description:'Viaje da Via Láctea a Andrômeda e descubra como as galáxias nascem, evoluem e interagem.',image:'galaxies.jpg',icon:Sparkles,credit:'ESA e NASA',source:'https://esahubble.org/images/heic0602a/'},
{id:'constelacoes',name:'Constelações',subtitle:'Padrões no céu e as histórias por trás delas',description:'Encontre as constelações e conheça as estrelas, mapas celestes e histórias que atravessaram gerações.',image:'constellations.jpg',icon:Network,credit:'Órion · Zdeněk Bardon/ESO',source:'https://www.eso.org/public/images/orion-ch17-bardon-cc/'},
{id:'nebulosas',name:'Nebulosas',subtitle:'Berçários de estrelas e remanescentes cósmicos',description:'Mergulhe em imensas nuvens de gás e poeira, onde estrelas se formam e deixam seus vestígios.',image:'nebulae.jpg',icon:Cloud,credit:'NASA, ESA, N. Smith (University of California, Berkeley) e Hubble Heritage Team (STScI/AURA)',source:'https://esahubble.org/images/heic0707a/'},
{id:'satelites',name:'Satélites',subtitle:'Tecnologia em órbita a serviço da Terra',description:'Descubra satélites artificiais, estações espaciais e instrumentos que observam nosso planeta.',image:'satellites.jpg',icon:Satellite,credit:'Tripulações STS-132 e Expedição 23/NASA',source:'https://science.nasa.gov/image-article/apod-2016-april-18-the-international-space-station-over-earth/'},
{id:'sondas',name:'Sondas',subtitle:'Missões que desvendam os confins do Sistema Solar',description:'Acompanhe as jornadas de Voyager, Cassini, Juno e outras exploradoras robóticas.',image:'probes.jpg',icon:RadioTower,credit:'NASA/JPL-Caltech (ilustração)',source:'https://www.jpl.nasa.gov/images/pia26353-nasas-voyager-probe-speeds-through-space-artists-concept/'},
{id:'observatorios',name:'Observatórios',subtitle:'Os olhos da humanidade no Universo',description:'Visite os grandes observatórios terrestres e conheça os telescópios espaciais que transformaram a astronomia.',image:'observatories.jpg',icon:Telescope,credit:'G. Hüdepohl (atacamaphoto.com)/ESO',source:'https://www.eso.org/public/images/potw1535a/'}
];
const features=[{title:'Telescópio James Webb',desc:'O telescópio que está revelando as primeiras galáxias do Universo.',image:'webb.jpg',section:'observatorios',button:'Saiba mais'},{title:'Colisão de Galáxias',desc:'O encontro de galáxias que pode formar novas estrelas.',image:'collision.jpg',section:'galaxias',button:'Explorar'},{title:'Marte: Próxima Fronteira?',desc:'As missões, descobertas e os planos para a presença humana no Planeta Vermelho.',image:'mars.jpg',section:'solar',button:'Ver especial'},{title:'As cores das nebulosas',desc:'Descubra as regiões luminosas onde estrelas nascem.',image:'nebulae.jpg',section:'nebulosas',button:'Explorar'}];
function App(){const[active,setActive]=useState('home');const[searchOpen,setSearchOpen]=useState(false);const[query,setQuery]=useState('');const[menuOpen,setMenuOpen]=useState(false);const[dark,setDark]=useState(true);const[slide,setSlide]=useState(0);const [isLeaving, setIsLeaving] = useState(false);
const [cosmosOpen, setCosmosOpen] = useState(false);
const cosmosButton = useRef<HTMLButtonElement>(null);
const activeTopic = cosmosTopics.find(topic => topic.id === active);
const navigationTimer = useRef<number>();
const selected=sections.find(s=>s.id===active);const ActiveIcon=selected?.icon;
useEffect(() => () => window.clearTimeout(navigationTimer.current), []);

function navigate(id: string) {
  setMenuOpen(false);
  setCosmosOpen(false);
  setSearchOpen(false);
  if (id === active || navigationTimer.current !== undefined) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setActive(id);
    window.scrollTo(0, 0);
    return;
  }

  setIsLeaving(true);
  navigationTimer.current = window.setTimeout(() => {
    navigationTimer.current = undefined;
    setActive(id);
    window.scrollTo(0, 0);
    setIsLeaving(false);
  }, 180);
}

const results=[...sections, ...cosmosTopics].filter(s=>(s.name+' '+s.subtitle).toLowerCase().includes(query.toLowerCase()));
return <div className={'app '+(!dark?'bright':'')}>
<header className="header"><button className="brand" onClick={()=>navigate('home')} aria-label="Ir para início"><img className="brand-logo" src={A+'logo.jpg'} alt="Explorando o Universo"/></button>
<nav className={'nav '+(menuOpen?'nav-open':'')} aria-label="Navegação principal"><button className={'nav-link '+(active==='home'?'selected':'')} onClick={()=>navigate('home')}><Home/><span>Início</span></button>{sections.map(s=><button key={s.id} className={'nav-link '+(active===s.id?'selected':'')} onClick={()=>navigate(s.id)}><s.icon/><span>{s.name}</span></button>)}
<div className="cosmos-menu" onBlur={event => {
  if (!event.currentTarget.contains(event.relatedTarget)) setCosmosOpen(false);
}} onKeyDown={event => {
  if (event.key === 'Escape' && cosmosOpen) {
    setCosmosOpen(false);
    cosmosButton.current?.focus();
  }
}}>
  <button ref={cosmosButton} type="button" className={'nav-link '+(activeTopic?'selected':'')} aria-expanded={cosmosOpen} aria-controls="cosmos-menu-options" onClick={() => setCosmosOpen(!cosmosOpen)}>
    <Compass/><span>Explorar <ChevronDown size={12}/></span>
  </button>
  <div id="cosmos-menu-options" className="cosmos-menu-options" hidden={!cosmosOpen}>
    {cosmosTopics.map(topic => (
      <button key={topic.id} type="button" aria-current={topic.id === active ? 'page' : undefined} onClick={() => navigate(topic.id)}>
        <topic.icon size={17} aria-hidden="true"/>{topic.name}
      </button>
    ))}
  </div>
</div></nav>
<div className="header-actions"><button className="round" onClick={()=>setSearchOpen(!searchOpen)} aria-label="Pesquisar"><Search size={21}/></button><button className="round" onClick={()=>setDark(!dark)} aria-label="Alternar contraste">{dark?<Moon size={21}/>:<Sun size={21}/>}</button><button className="round mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen?<X/>:<Menu/>}</button></div></header>
{searchOpen&&<div className="search-panel"><Search size={18}/><input autoFocus placeholder="Pesquisar destinos espaciais..." value={query} onChange={e=>setQuery(e.target.value)}/><button onClick={()=>setSearchOpen(false)} aria-label="Fechar"><X size={18}/></button><div className="search-results">{results.map(s=><button key={s.id} onClick={()=>navigate(s.id)}>{s.name}<ArrowUpRight size={15}/></button>)}{results.length===0&&<span>Nenhum destino encontrado.</span>}</div></div>}
<main className={`page-transition ${active === 'home' ? 'home-page' : 'destination-page'}${isLeaving ? ' page-leaving' : ''}`}>
{active==='home'?<><section className="hero"><div className="hero-content"><p className="eyebrow">UMA JORNADA PELO COSMOS</p><h1><span>Explorando o</span><strong>Universo</strong></h1><div className="solar-flare"/><p className="hero-copy">Descubra os segredos do espaço: explore planetas, galáxias, constelações, nebulosas, satélites, sondas e os grandes observatórios que expandem o nosso conhecimento.</p><div className="hero-buttons"><button className="primary-btn" onClick={()=>navigate('solar')}><Play size={19} fill="currentColor"/>Iniciar Exploração <ArrowRight size={19}/></button><button className="secondary-btn" onClick={()=>navigate('observatorios')}><BookOpen size={20}/>Biblioteca Astronômica</button></div></div></section>
<section className="categories content-width" aria-label="Destinos de exploração">{sections.map((s,i)=><button key={s.id} className={'category-card '+(i===0?'first':'')} onClick={()=>navigate(s.id)} style={{backgroundImage:`linear-gradient(0deg,#031026 15%,#061229 39%,transparent 65%),url(${A+s.image})`}}><span className="category-title"><s.icon size={23}/>{s.name}</span><span className="category-desc">{s.subtitle}</span></button>)}</section>
<section className="featured content-width"><div className="section-heading"><h2>Em Destaque</h2><button onClick={()=>navigate('galaxias')}>Ver todas as descobertas <ArrowRight size={20}/></button></div><div className="feature-carousel"><div className="feature-track">{[0,1,2].map(i=>{const f=features[(slide+i)%features.length];return <article className="feature-card" key={f.title}><img src={A+f.image} alt=""/><div><h3>{f.title}</h3><p>{f.desc}</p><button onClick={()=>navigate(f.section)}> {f.button} <ArrowRight size={17}/></button></div></article>})}</div><button className="carousel-arrow carousel-arrow-prev" onClick={()=>setSlide((slide+features.length-1)%features.length)} aria-label="Anterior"><ChevronLeft/></button><button className="carousel-arrow carousel-arrow-next" onClick={()=>setSlide((slide+1)%features.length)} aria-label="Próximo"><ChevronRight/></button></div><div className="carousel-controls">{features.map((f,i)=><button key={f.title} className={'dot '+(slide===i?'active':'')} onClick={()=>setSlide(i)} aria-label={`Destaque ${i+1}`}/>)}</div></section></>:active==='solar'?<SolarSystem/>:active==='constelacoes'?<ConstellationGuide/>:active==='nebulosas'?<NebulaGuide/>:active==='satelites'?<SatelliteGuide/>:active==='sondas'?<ProbeGuide/>:active==='observatorios'?<ObservatoryGuide/>:activeTopic?<CosmosGuide topic={activeTopic}/>:<section className={active==='galaxias'?'destination galaxy-destination':'destination'}><img className="destination-image" src={A+'destinations/'+selected!.id+'.jpg'} alt=""/><div className="destination-content content-width">{active==='galaxias'?<GalaxyGuide description={selected!.description}/>:<><button className="back" onClick={()=>navigate('home')}><ArrowLeft size={18}/> Voltar ao início</button><p className="eyebrow">EXPLORANDO O UNIVERSO · DESTINO {String(sections.indexOf(selected!)+1).padStart(2,'0')}</p>{ActiveIcon&&<ActiveIcon className="destination-icon" size={50}/>}<h1>{selected!.name}</h1><p>{selected!.description}</p><div className="destination-panel"><h2>Uma nova jornada começa aqui</h2><p>Esta seção está preparada para receber conteúdo científico, modelos interativos e viagens de câmera em 3D. Explore outro destino enquanto construímos a experiência completa.</p><div className="destination-links">{sections.filter(s=>s.id!==active).slice(0,4).map(s=><button key={s.id} onClick={()=>navigate(s.id)}>{s.name}<ArrowRight size={16}/></button>)}</div></div></>}</div><a className="destination-credit" href={selected!.source}>Imagem: {selected!.credit}</a></section>}
</main><footer><span>✦ Explorando o Universo</span><span>Uma jornada de conhecimento pelo cosmos · Protótipo v0.2</span><button onClick={()=>navigate('home')}>Voltar ao início ↑</button></footer></div>}
export default App;
