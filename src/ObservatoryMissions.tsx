import {useState} from 'react';
import {Download} from 'lucide-react';

type Observatory = {
  name: string;
  agency: string;
  date: string;
  light: string;
  description: string;
  image?: string;
  caption?: string;
  credit?: string;
  source: string;
};

const current: Observatory[] = [
  {
    name: 'Hubble', agency: 'NASA / ESA · órbita terrestre', date: 'Lançamento · 24/04/1990',
    light: 'Ultravioleta, visível e infravermelho próximo',
    description: 'Observa desde planetas até galáxias muito distantes. Suas medidas ajudaram a investigar a expansão do Universo e a composição de atmosferas de exoplanetas. As missões de manutenção com astronautas renovaram seus instrumentos.',
    image: 'hubble.jpg', caption: 'Fotografia do Hubble durante a missão de manutenção STS-125, em maio de 2009.', credit: 'NASA',
    source: 'https://science.nasa.gov/mission/hubble/',
  },
  {
    name: 'Chandra', agency: 'NASA · órbita terrestre', date: 'Lançamento · 23/07/1999',
    light: 'Raios X',
    description: 'Investiga matéria aquecida a temperaturas extremas. Suas imagens revelam gás em aglomerados de galáxias, restos de supernovas e regiões próximas de buracos negros, permitindo estudar a estrutura e a evolução do Universo.',
    image: 'chandra.jpg', caption: 'Ilustração do Observatório de Raios X Chandra.', credit: 'NASA/CXC & J. Vaughan',
    source: 'https://science.nasa.gov/mission/chandra/',
  },
  {
    name: 'James Webb', agency: 'NASA / ESA / CSA · região do ponto L2', date: 'Lançamento · 25/12/2021',
    light: 'Infravermelho',
    description: 'Com espelho de 6,5 metros, investiga as primeiras galáxias, estrelas em formação e atmosferas de exoplanetas. Trabalha a cerca de 1,5 milhão de quilômetros da Terra, protegido do calor e da luz do Sol por um grande escudo.',
    image: 'webb.jpg', caption: 'Fotografia do Webb durante os testes em solo, antes do lançamento.', credit: 'NASA/Chris Gunn',
    source: 'https://science.nasa.gov/mission/webb/',
  },
  {
    name: 'Fermi', agency: 'NASA · órbita terrestre', date: 'Lançamento · 11/06/2008',
    light: 'Raios gama',
    description: 'Detecta a forma mais energética da luz. Estuda pulsares, explosões de raios gama e galáxias ativas. Seus dados revelaram as bolhas de Fermi, enormes estruturas acima e abaixo do plano da Via Láctea.',
    image: 'fermi.jpg', caption: 'Mapa do céu em raios gama construído com 12 anos de observações do Fermi. As cores representam a emissão detectada.', credit: 'NASA/DOE/Fermi LAT Collaboration',
    source: 'https://science.nasa.gov/mission/fermi/',
  },
  {
    name: 'IXPE', agency: 'NASA / Agência Espacial Italiana · órbita terrestre', date: 'Lançamento · 09/12/2021',
    light: 'Polarização de raios X',
    description: 'Mede a orientação das oscilações da luz de alta energia. Essa informação ajuda a reconstruir a geometria e os campos magnéticos de fontes extremas, como estrelas de nêutrons, restos de supernovas e jatos associados a buracos negros.',
    image: 'ixpe.jpg', caption: 'Ilustração do IXPE e de seus três telescópios de raios X.', credit: 'Acervo NASA',
    source: 'https://science.nasa.gov/mission/ixpe/',
  },
  {
    name: 'TESS', agency: 'NASA / MIT · órbita terrestre', date: 'Lançamento · 18/04/2018',
    light: 'Variações no brilho das estrelas',
    description: 'Procura pequenas quedas periódicas de brilho quando um planeta passa diante de sua estrela. Esses candidatos precisam de confirmação por outras observações. O monitoramento também permite estudar estrelas variáveis e explosões estelares.',
    image: 'tess.jpg', caption: 'Ilustração do satélite TESS em órbita.', credit: 'Acervo NASA',
    source: 'https://science.nasa.gov/mission/tess/',
  },
  {
    name: 'Euclid', agency: 'ESA · participação da NASA', date: 'Lançamento · 01/07/2023',
    light: 'Visível e infravermelho próximo',
    description: 'Mapeia a distribuição de galáxias em três dimensões para investigar matéria escura e energia escura. As formas e distâncias das galáxias ajudam a acompanhar a evolução das estruturas cósmicas. A NASA forneceu detectores infravermelhos.',
    image: 'euclid.jpg', caption: 'Ilustração do telescópio espacial Euclid.', credit: 'Acervo NASA / missão ESA',
    source: 'https://science.nasa.gov/mission/euclid/',
  },
  {
    name: 'SPHEREx', agency: 'NASA · órbita terrestre', date: 'Lançamento · 11/03/2025',
    light: 'Levantamento espectral do céu',
    description: 'Separa a luz em diferentes comprimentos de onda para estudar a composição de estrelas e galáxias. O levantamento inclui centenas de milhões de galáxias e investiga a história cósmica e os gelos presentes em regiões onde estrelas e planetas se formam.',
    image: 'spherex.jpg', caption: 'Ilustração do SPHEREx com seus escudos térmicos em forma de cone.', credit: 'Acervo NASA/JPL-Caltech',
    source: 'https://science.nasa.gov/mission/spherex/',
  },
  {
    name: 'Nancy Grace Roman', agency: 'NASA · telescópio espacial', date: 'Lançamento · 30/08/2026',
    light: 'Infravermelho de grande campo',
    description: 'Projetado para investigar energia escura, exoplanetas e a história do Universo. Seu campo de visão infravermelho é pelo menos 100 vezes maior que o do instrumento infravermelho do Hubble. Um coronógrafo testa técnicas para bloquear a luz de estrelas e revelar seus arredores.',
    image: 'roman.jpg', caption: 'Ilustração do telescópio Nancy Grace Roman.', credit: 'NASA',
    source: 'https://science.nasa.gov/mission/roman-space-telescope/',
  },
];

const historical: Observatory[] = [
  {
    name: 'Spitzer', agency: 'NASA · missão encerrada', date: '2003–2020', light: 'Infravermelho',
    description: 'Revelou berçários estelares escondidos por poeira e estudou galáxias e exoplanetas. Ajudou a caracterizar o sistema TRAPPIST-1. Integra o programa original dos Grandes Observatórios, junto de Hubble, Compton e Chandra.',
    image: 'spitzer.jpg', caption: 'Ilustração do telescópio Spitzer.', credit: 'NASA/JPL-Caltech', source: 'https://science.nasa.gov/mission/spitzer/',
  },
  {
    name: 'Kepler / K2', agency: 'NASA · missão encerrada', date: '2009–2018', light: 'Fotometria de trânsitos',
    description: 'Acompanhou o brilho de estrelas para encontrar planetas em trânsito. Mostrou que sistemas planetários são comuns e diversos. O combustível acabou em 2018, mas seu arquivo de observações continua permitindo novas pesquisas.',
    image: 'kepler.jpg', caption: 'Ilustração do telescópio Kepler.', credit: 'NASA/JPL-Caltech', source: 'https://science.nasa.gov/mission/kepler/',
  },
  {
    name: 'Planck', agency: 'ESA · participação da NASA', date: '2009–2013', light: 'Micro-ondas e infravermelho distante',
    description: 'Mediu pequenas variações na radiação cósmica de fundo, a luz antiga liberada quando o Universo se tornou transparente. Seus mapas ajudam a estimar a idade, a composição e a evolução do cosmos.',
    image: 'planck.jpg', caption: 'Ilustração do observatório Planck.', credit: 'Acervo NASA / missão ESA', source: 'https://science.nasa.gov/mission/planck/',
  },
];

const future: Observatory[] = [
  {name: 'COSI', agency: 'NASA', date: 'Previsão · 2027', light: 'Raios gama', description: 'Investigará fenômenos energéticos, matéria e antimatéria e as etapas finais da vida das estrelas.', source: 'https://science.nasa.gov/mission/cosi/'},
  {name: 'LISA', agency: 'ESA · participação da NASA', date: 'Previsão · 2035', light: 'Ondas gravitacionais', description: 'Detectará deformações do espaço-tempo, incluindo sinais de fusões de buracos negros massivos.', source: 'https://science.nasa.gov/universe/observatories/'},
  {name: 'ATHENA', agency: 'ESA · participação da NASA', date: 'Previsão · início dos anos 2030', light: 'Raios X', description: 'Estudará a formação de galáxias e aglomerados e o crescimento de buracos negros.', source: 'https://science.nasa.gov/universe/observatories/'},
  {name: 'ASTHROS', agency: 'NASA · balão estratosférico', date: 'Data de lançamento a definir', light: 'Infravermelho distante', description: 'Mapeará gás interestelar para investigar como estrelas influenciam a formação de novas estrelas.', source: 'https://science.nasa.gov/universe/observatories/'},
  {name: 'EXCLAIM', agency: 'NASA · balão estratosférico', date: 'Previsão · a partir de 2027', light: 'Infravermelho distante', description: 'Produzirá mapas tridimensionais para estudar a formação de estrelas e galáxias ao longo do tempo.', source: 'https://science.nasa.gov/universe/observatories/'},
];

const groups = {current: {label: 'Missões atuais', items: current}, historical: {label: 'Missões históricas', items: historical}, future: {label: 'Próximas missões', items: future}};
type Group = keyof typeof groups;

export default function ObservatoryMissions() {
  const [group, setGroup] = useState<Group>('current');
  const selected = groups[group];
  return (
    <section className="destination-panel observatory-missions" aria-labelledby="observatory-space">
      <h2 id="observatory-space">Observatórios que exploram o Universo</h2>
      <p>Uma seleção das missões apresentadas pela NASA, com instrumentos para observar a luz e outros sinais do cosmos.</p>
      <div className="observatory-filters" role="group" aria-label="Escolher período das missões">
        {(Object.keys(groups) as Group[]).map(key => <button key={key} type="button" aria-pressed={group === key} aria-controls="observatory-mission-list" onClick={() => setGroup(key)}>{groups[key].label}</button>)}
      </div>
      <p className="observatory-update">Classificação consultada na NASA em 12/11/2026. Previsões de lançamento podem mudar.</p>
      <div id="observatory-mission-list" aria-live="polite" aria-atomic="false">
        <h3 className="observatory-group-title">{selected.label}</h3>
        <ul className={'galaxy-grid observatory-mission-grid ' + (group !== 'future' ? 'galaxy-gallery' : '')}>
          {selected.items.map(mission => <li className="galaxy-item" key={mission.name}>
            {mission.image && <img src={import.meta.env.BASE_URL + 'assets/observatories/' + mission.image} alt={mission.caption} width="640" height="400" loading="lazy" decoding="async"/>}
            <div className={mission.image ? 'galaxy-card-text' : undefined}>
              <span className="observatory-band">{mission.light}</span>
              <h3>{mission.name}</h3>
              <p className="observatory-metadata">{mission.agency}<br/>{mission.date}</p>
              <p>{mission.description}</p>
              {mission.image && <><p className="observatory-caption">{mission.caption}<br/>Imagem: {mission.credit}.</p><a className="observatory-download" href={import.meta.env.BASE_URL + 'assets/observatories/' + mission.image} download><Download size={14} aria-hidden="true"/>Baixar imagem de {mission.name}</a></>}
              <a className="galaxy-credit" href={mission.source}>Fonte · {mission.name}</a>
            </div>
          </li>)}
        </ul>
        {group === 'current' && <p className="observatory-note">A lista da NASA também inclui NuSTAR, NICER, XMM-Newton, XRISM, Pandora e plataformas como a Estação Espacial Internacional, além dos experimentos em balão EXCITE e SuperTIGER.</p>}
        {group === 'historical' && <p className="observatory-note">Outros marcos incluem Compton, dedicado aos raios gama, e COBE, dedicado à radiação cósmica de fundo. A NASA registra o fim das operações científicas do Swift em 20/10/2026. Missões encerradas deixam arquivos que continuam sendo estudados.</p>}
        {group === 'future' && <p className="observatory-note">LISA medirá ondas gravitacionais. Os demais projetos desta seleção medirão radiação eletromagnética em diferentes faixas.</p>}
      </div>
    </section>
  );
}
