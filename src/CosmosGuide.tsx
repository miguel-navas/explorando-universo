import {Bot, CircleDot, Compass, History, Layers, Orbit, Rocket, Scan, Search, Sparkles, Star, Telescope, Users, Waypoints} from 'lucide-react';

const sectionIcons = {
  'visao-geral': Compass,
  tipos: Layers,
  anatomia: Scan,
  'sistemas-multiplos': Waypoints,
  'busca-por-vida': Search,
  descobertas: Telescope,
  'mundos-incomuns': Sparkles,
  tripuladas: Users,
  roboticas: Bot,
  'linha-do-tempo': History,
};

type CosmosSection = {
  id: keyof typeof sectionIcons;
  title: string;
  text: string;
  details?: {title: string; text: string}[];
};

type CosmosTopic = {
  id: string;
  name: string;
  subtitle: string;
  icon: typeof CircleDot;
  figures: {section: string; file: string; alt: string; caption: string; credit: string}[];
  sections: CosmosSection[];
};

export const cosmosTopics: CosmosTopic[] = [
  {
    id: 'missoes-espaciais',
    name: 'Missões espaciais',
    subtitle: 'Da chegada à Lua às sondas que exploram outros mundos',
    icon: Rocket,
    figures: [{
      section: 'tripuladas',
      file: 'apollo-missao.jpg',
      alt: 'Buzz Aldrin na superfície lunar durante a missão Apollo 11.',
      caption: 'Buzz Aldrin na Lua, fotografado por Neil Armstrong durante a Apollo 11, em julho de 1969.',
      credit: 'NASA/JSC',
    }, {
      section: 'roboticas',
      file: 'perseverance.gif',
      alt: 'Mosaico de autorretratos do rover Perseverance com o helicóptero Ingenuity em Marte.',
      caption: 'Perseverance e Ingenuity em Marte, em abril de 2021. O autorretrato foi montado com imagens obtidas pela câmera na ponta do braço robótico.',
      credit: 'NASA/JPL-Caltech/MSSS',
    }, {
      section: 'linha-do-tempo',
      file: 'artemis.jpg',
      alt: 'Foguete SLS decola à noite no lançamento da missão Artemis I.',
      caption: 'Lançamento da Artemis I em 16 de novembro de 2022. O voo de teste levou a nave Orion ao redor da Lua.',
      credit: 'NASA/Bill Ingalls',
    }],
    sections: [
      {
        id: 'visao-geral', title: 'Visão geral',
        text: 'Uma missão espacial reúne a nave, os instrumentos científicos, o lançamento e as equipes que planejam e acompanham o voo. O destino e a pergunta científica determinam o equipamento e a trajetória.',
        details: [
          {title: 'O que queremos descobrir?', text: 'As missões investigam a composição de planetas e luas, a história da água, a atividade do Sol e os efeitos do espaço sobre seres vivos.'},
          {title: 'Como explorar?', text: 'Um sobrevoo registra o alvo durante uma passagem. Um orbitador o acompanha por mais tempo. Módulos de pouso estudam um local da superfície, enquanto rovers se deslocam entre diferentes terrenos.'},
          {title: 'Como os dados chegam?', text: 'Antenas em terra recebem imagens e medições por rádio e enviam comandos. A distância impõe atrasos na comunicação, por isso as naves também executam tarefas programadas.'},
        ],
      },
      {
        id: 'tripuladas', title: 'Missões tripuladas',
        text: 'Astronautas realizam experimentos, operam equipamentos e coletam amostras. As naves precisam oferecer condições de sobrevivência e meios para o retorno à Terra.',
        details: [
          {title: 'Apollo 11 · Lua', text: 'Lançada em 16 de julho de 1969, levou Neil Armstrong, Buzz Aldrin e Michael Collins. Armstrong e Aldrin pousaram em 20 de julho, enquanto Collins permaneceu em órbita lunar.'},
          {title: 'O que a Apollo 11 estudou?', text: 'A tripulação coletou rochas e solo, fotografou o terreno e instalou instrumentos para investigar a atividade sísmica e medir a distância da Lua com pulsos de laser.'},
          {title: 'Pesquisa em órbita · Estação Espacial Internacional', text: 'A estação é um laboratório para estudar o corpo humano, materiais e organismos em microgravidade. Os resultados apoiam a preparação de voos longos e pesquisas com aplicações na Terra.'},
        ],
      },
      {
        id: 'roboticas', title: 'Missões robóticas',
        text: 'Sondas, módulos de pouso e rovers levam instrumentos a destinos distantes. Cada missão combina observações para responder a perguntas específicas.',
        details: [
          {title: 'Voyager 1 e 2 · planetas gigantes', text: 'Lançadas em 1977, visitaram Júpiter e Saturno. A Voyager 2 também sobrevoou Urano e Netuno. Mais tarde, as duas cruzaram a heliopausa, que delimita a região dominada pelo vento solar.'},
          {title: 'Cassini–Huygens · Saturno e Titã', text: 'Lançada em 1997, a missão estudou Saturno, seus anéis e luas. Em 14 de janeiro de 2005, a sonda europeia Huygens desceu pela atmosfera de Titã e transmitiu dados de sua superfície.'},
          {title: 'Perseverance · Marte', text: 'Lançado em 30 de julho de 2020, o rover pousou na cratera Jezero em 18 de fevereiro de 2021. Investiga um antigo ambiente de lago e delta, procura indícios de vida microbiana passada e coleta amostras de rocha.'},
          {title: 'Ingenuity · tecnologia de voo', text: 'O pequeno helicóptero que viajou com Perseverance demonstrou o voo motorizado e controlado em outro planeta. A atmosfera fina de Marte exigiu uma aeronave muito leve e rotores rápidos.'},
        ],
      },
      {
        id: 'linha-do-tempo', title: 'Linha do tempo',
        text: 'Uma seleção de marcos mostra como a exploração passou de visitas curtas a operações prolongadas em outros mundos.',
        details: [
          {title: '1969 · Apollo 11', text: 'Primeiro pouso humano na Lua. A tripulação retornou à Terra em 24 de julho.'},
          {title: '1977 · Voyager', text: 'A Voyager 2 foi lançada em 20 de agosto, seguida pela Voyager 1 em 5 de setembro.'},
          {title: '1997–2017 · Cassini–Huygens', text: 'Após o lançamento em 1997, Cassini chegou à órbita de Saturno em 2004. A missão terminou em setembro de 2017 com uma entrada planejada na atmosfera do planeta.'},
          {title: '2021 · Perseverance', text: 'O pouso em Jezero abriu uma nova etapa de investigação das rochas e dos antigos ambientes de Marte.'},
          {title: '2022 · Artemis I', text: 'Voo de teste sem tripulação do foguete SLS e da nave Orion. Lançado em 16 de novembro, passou ao redor da Lua e terminou com a amerissagem em 11 de dezembro.'},
        ],
      },
    ],
  },
  {
    id: 'buracos-negros',
    name: 'Buracos negros',
    subtitle: 'Horizonte de eventos, tipos e anatomia',
    icon: CircleDot,
    figures: [{
      section: 'anatomia',
      file: 'buracos-negros.jpg',
      alt: 'Simulação de um buraco negro com um disco luminoso deformado pela gravidade.',
      caption: 'Simulação do disco de acreção. A gravidade desvia a luz da parte de trás do disco e faz com que ela apareça acima e abaixo da região escura.',
      credit: 'NASA Goddard Space Flight Center / Jeremy Schnittman',
    }],
    sections: [
      {
        id: 'visao-geral', title: 'Visão geral',
        text: 'Um buraco negro é uma região do espaço-tempo com gravidade tão intensa que nem a luz consegue escapar depois de cruzar o horizonte de eventos. Uma maneira de estimar sua massa é medir a velocidade e a trajetória das estrelas que orbitam ao seu redor.',
        details: [
          {title: 'Raios X e ondas gravitacionais', text: 'O gás que se acumula ao redor de um buraco negro pode aquecer e emitir raios X, observados por telescópios como o Chandra, da NASA. Quando dois buracos negros se fundem, detectores como o LIGO registram ondulações no espaço-tempo chamadas ondas gravitacionais.'},
          {title: 'M87* · primeira imagem, em 2019', text: 'O Event Horizon Telescope (EHT) combinou observações de radiotelescópios em diferentes continentes para revelar um anel luminoso ao redor da sombra de M87*. A estimativa de massa do EHT é de cerca de 6,5 bilhões de vezes a massa do Sol. A galáxia M87 fica a cerca de 55 milhões de anos-luz.'},
          {title: 'Sagittarius A* · centro da Via Láctea', text: 'Fica a cerca de 26 mil anos-luz da Terra e tem aproximadamente 4 milhões de vezes a massa do Sol. O EHT publicou sua primeira imagem em 2022.'},
        ],
      },
      {
        id: 'tipos', title: 'Tipos',
        text: 'A massa ajuda a distinguir as classes observadas. A origem de alguns buracos negros ainda é uma questão em aberto.',
        details: [
          {title: 'Massa estelar', text: 'Podem se formar quando o núcleo de uma estrela muito massiva colapsa no fim da sua vida. Suas massas podem ir de algumas a centenas de vezes a massa do Sol.'},
          {title: 'Massa intermediária', text: 'Ocupam a faixa entre os de massa estelar e os supermassivos. São difíceis de identificar. Fusões sucessivas de buracos negros menores são um caminho de formação em estudo.'},
          {title: 'Supermassivos', text: 'Têm de centenas de milhares a bilhões de vezes a massa do Sol e são encontrados no centro de muitas galáxias. Como alguns cresceram tão cedo na história do Universo é uma questão em aberto.'},
          {title: 'Primordiais', text: 'Teriam surgido de regiões muito densas do Universo recém-nascido. Sua existência ainda não foi confirmada.'},
        ],
      },
      {
        id: 'anatomia', title: 'Anatomia',
        text: 'O horizonte de eventos é a fronteira a partir da qual nenhum sinal consegue voltar para o exterior. A matéria e a luz na região ao redor dessa fronteira produzem os sinais que podemos observar.',
        details: [
          {title: 'Disco de acreção', text: 'Gás em órbita pode formar um disco e aquecer à medida que parte dele espirala para dentro. A radiação emitida pelo gás permite estudar a região próxima ao buraco negro.'},
          {title: 'Sombra e lente gravitacional', text: 'Parte da luz é capturada e parte é desviada pela gravidade. Diante de gás brilhante, isso produz uma região escura aparente, chamada sombra, maior que o horizonte de eventos.'},
          {title: 'Jatos de partículas', text: 'Em alguns sistemas, campos magnéticos nas proximidades do buraco negro ajudam a acelerar e direcionar partículas em jatos que podem viajar a velocidades próximas à da luz.'},
        ],
      },
    ],
  },
  {
    id: 'estrelas',
    name: 'Estrelas',
    subtitle: 'Ciclo de vida, tipos e sistemas múltiplos',
    icon: Star,
    figures: [{
      section: 'visao-geral',
      file: 'estrelas.png',
      alt: 'Estrelas azuis jovens cercadas por nuvens de gás e poeira no aglomerado NGC 602.',
      caption: 'Imagem do Hubble de NGC 602, na Pequena Nuvem de Magalhães. A radiação das estrelas jovens esculpe as bordas da nuvem de gás e poeira onde elas se formaram.',
      credit: 'NASA, ESA e Hubble Heritage Team (STScI/AURA)–ESA/Hubble',
    }, {
      section: 'tipos',
      file: 'anel.png',
      alt: 'Imagem infravermelha da Nebulosa do Anel com gás brilhante em torno de uma cavidade central.',
      caption: 'O Webb registrou as camadas de gás da Nebulosa do Anel, expelidas por uma estrela nas fases finais de sua evolução.',
      credit: 'ESA/Webb, NASA, CSA, M. Barlow (UCL), N. Cox (ACRI-ST) e R. Wesson (Cardiff University)',
    }, {
      section: 'sistemas-multiplos',
      file: 'sirius.jpg',
      alt: 'Sirius A aparece como uma estrela muito brilhante, com Sirius B como um ponto mais fraco próximo.',
      caption: 'Imagem do Hubble do sistema Sirius. A pequena companheira Sirius B é uma anã branca.',
      credit: 'NASA, H. E. Bond, E. Nelan, M. Barstow, M. Burleigh e J. B. Holberg',
    }],
    sections: [
      {
        id: 'visao-geral', title: 'Visão geral',
        text: 'Estrelas nascem quando regiões densas de nuvens de gás e poeira colapsam pela gravidade. A massa inicial influencia o brilho, o tempo de vida e o destino da estrela.',
        details: [
          {title: 'Protoestrela', text: 'A matéria que cai para o centro aquece e forma uma protoestrela. Parte do gás e da poeira pode permanecer em um disco, onde planetas podem se formar.'},
          {title: 'Fusão nuclear', text: 'Quando o núcleo aquece o suficiente, o hidrogênio começa a se fundir em hélio. A energia liberada sustenta o brilho da estrela durante sua passagem pela sequência principal.'},
        ],
      },
      {
        id: 'tipos', title: 'Tipos',
        text: 'A cor dá pistas sobre a temperatura da superfície. Estrelas azuis são mais quentes que estrelas vermelhas. O tamanho e o brilho ajudam a reconhecer em que fase da vida uma estrela está.',
        details: [
          {title: 'Sequência principal', text: 'Inclui desde anãs vermelhas, menores e mais frias, até estrelas azuis muito quentes. O Sol também está nessa fase.'},
          {title: 'Gigantes e supergigantes', text: 'Quando acaba o hidrogênio no núcleo, as camadas externas podem se expandir. Estrelas como o Sol se tornam gigantes vermelhas. As de maior massa podem chegar à fase de supergigante.'},
          {title: 'Remanescentes estelares', text: 'Uma estrela como o Sol deixa uma anã branca. O colapso do núcleo de uma estrela massiva pode deixar uma estrela de nêutrons ou um buraco negro.'},
        ],
      },
      {
        id: 'sistemas-multiplos', title: 'Sistemas estelares múltiplos',
        text: 'Em um sistema binário, duas estrelas ligadas pela gravidade orbitam um centro de massa comum. Também existem sistemas triplos, como Alfa Centauri, que inclui Proxima Centauri.',
        details: [
          {title: 'Binárias eclipsantes', text: 'Quando uma estrela passa diante da outra do nosso ponto de vista, o brilho combinado cai. O intervalo entre eclipses do mesmo tipo revela o período orbital.'},
          {title: 'Binárias de raios X', text: 'Uma estrela de nêutrons ou um buraco negro pode atrair gás de uma estrela companheira. Ao aquecer, esse gás emite raios X.'},
        ],
      },
    ],
  },
  {
    id: 'exoplanetas',
    name: 'Exoplanetas',
    subtitle: 'Busca por vida, descobertas e mundos incomuns',
    icon: Orbit,
    figures: [{
      section: 'visao-geral',
      file: 'exoplanetas.jpg',
      alt: 'Ilustração com os sete planetas rochosos do sistema TRAPPIST-1 diante de sua estrela.',
      caption: 'Ilustração artística de TRAPPIST-1. Os sete planetas rochosos desse sistema têm dimensões próximas às da Terra e orbitam uma anã vermelha.',
      credit: 'NASA, ESA, CSA e Joseph Olmsted (STScI)',
    }, {
      section: 'descobertas',
      file: 'espectro.png',
      alt: 'Gráfico do espectro de transmissão de WASP-39 b com um pico de absorção de dióxido de carbono.',
      caption: 'Em 2022, o instrumento NIRSpec do Webb identificou dióxido de carbono na atmosfera do gigante gasoso WASP-39 b. O pico do gráfico indica a absorção de luz pelo gás.',
      credit: 'NASA, ESA, CSA, Leah Hustak e Joseph Olmsted (STScI)',
    }, {
      section: 'mundos-incomuns',
      file: 'kepler.jpg',
      alt: 'Ilustração do exoplaneta Kepler-16 b perto das duas estrelas que ele orbita.',
      caption: 'Ilustração artística de Kepler-16 b. De uma posição adequada no sistema, seria possível ver dois sóis no céu.',
      credit: 'NASA/JPL-Caltech',
    }],
    sections: [
      {
        id: 'visao-geral', title: 'Visão geral',
        text: 'Exoplanetas são planetas fora do Sistema Solar. Medidas de massa e tamanho ajudam a estimar sua densidade e a investigar do que são feitos.',
        details: [
          {title: 'Rochosos e super-Terras', text: 'Planetas rochosos têm superfícies sólidas. O termo super-Terra descreve planetas mais massivos que a Terra e menos massivos que Netuno, com composições variadas.'},
          {title: 'Semelhantes a Netuno e gigantes gasosos', text: 'Planetas do tipo de Netuno têm atmosferas espessas. Entre os gigantes gasosos há planetas como Júpiter e Saturno, além dos chamados Júpiteres quentes, que orbitam muito perto de suas estrelas.'},
        ],
      },
      {
        id: 'busca-por-vida', title: 'Busca por vida',
        text: 'A zona habitável é a faixa de distâncias onde um planeta rochoso com uma atmosfera adequada poderia manter água líquida na superfície.',
        details: [
          {title: 'Atmosfera e estrela', text: 'A temperatura da superfície também depende da composição da atmosfera. Erupções da estrela podem alterar a química atmosférica ou contribuir para a perda de gás.'},
          {title: 'Sinais de atividade biológica', text: 'Astrônomos estudam combinações de gases que poderiam indicar atividade biológica. Para interpretar esses sinais, precisam considerar também processos geológicos e químicos capazes de produzi-los.'},
        ],
      },
      {
        id: 'descobertas', title: 'Descobertas',
        text: 'A maioria dos exoplanetas é descoberta por meio dos efeitos que provoca na luz ou no movimento de sua estrela.',
        details: [
          {title: 'Trânsito', text: 'Quando um planeta passa diante da estrela, bloqueia parte da luz. A profundidade da queda de brilho ajuda a estimar o tamanho do planeta.'},
          {title: 'Velocidade radial', text: 'A gravidade do planeta faz a estrela se aproximar e se afastar periodicamente de nós. As mudanças no espectro permitem estimar uma massa mínima para o planeta.'},
          {title: 'Espectroscopia de transmissão', text: 'Durante um trânsito, parte da luz estelar atravessa a atmosfera do planeta. Ao medir quais comprimentos de onda são absorvidos, instrumentos como o NIRSpec do Webb podem identificar gases.'},
        ],
      },
      {
        id: 'mundos-incomuns', title: 'Novos mundos estranhos',
        text: 'A variedade de órbitas e atmosferas observadas revela sistemas planetários muito diferentes do nosso.',
        details: [
          {title: 'Kepler-16 b', text: 'É um gigante gasoso que orbita duas estrelas. A missão Kepler identificou o planeta a partir dos trânsitos observados no sistema.'},
          {title: 'GJ 436 b', text: 'Tem tamanho parecido com o de Netuno e completa uma órbita em cerca de 2,6 dias terrestres. Observações ultravioletas do Hubble revelaram uma extensa nuvem de hidrogênio escapando de sua atmosfera.'},
        ],
      },
    ],
  },
];

export default function CosmosGuide({topic}: {topic: CosmosTopic}) {
  function openSection(id: string) {
    const heading = document.getElementById(topic.id + '-' + id);
    heading?.focus({preventScroll: true});
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    heading?.scrollIntoView({block: 'start', behavior: reduceMotion ? 'instant' : 'smooth'});
  }

  return (
    <section className="destination cosmos-destination" aria-labelledby="cosmos-title">
      <div className="destination-content content-width">
        <p className="eyebrow">EXPLORAR O COSMOS</p>
        <topic.icon className="destination-icon" size={44} aria-hidden="true"/>
        <h1 id="cosmos-title">{topic.name}</h1>
        <p>{topic.subtitle}</p>

        <nav className="cosmos-subnav" aria-label={'Tópicos de ' + topic.name}>
          {topic.sections.map(section => {
            const Icon = sectionIcons[section.id];
            return (
              <button key={section.id} type="button" onClick={() => openSection(section.id)}>
                <Icon size={20} aria-hidden="true"/>
                <span className="cosmos-subnav-label">{section.title}</span>
              </button>
            );
          })}
        </nav>

        {topic.sections.map(section => {
          const headingId = topic.id + '-' + section.id;
          return (
            <section key={headingId} className="destination-panel" aria-labelledby={headingId}>
              <div>
                <h2 id={headingId} tabIndex={-1}>{section.title}</h2>
                <p>{section.text}</p>
                {section.details && (
                  <dl className="galaxy-grid">
                    {section.details.map(detail => (
                      <div className="galaxy-item" key={detail.title}>
                        <dt>{detail.title}</dt>
                        <dd>{detail.text}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
              {topic.figures.filter(figure => figure.section === section.id).map(figure => (
                <figure className="cosmos-figure" key={figure.file}>
                  <img src={import.meta.env.BASE_URL + 'assets/cosmos/' + figure.file} alt={figure.alt} loading="lazy" decoding="async"/>
                  <figcaption>
                    {figure.caption}
                    <span>Crédito da imagem · {figure.credit}</span>
                  </figcaption>
                </figure>
              ))}
            </section>
          );
        })}
        <p className="cosmos-source-note">Conteúdo adaptado de NASA Science e NASA Jet Propulsion Laboratory.</p>
      </div>
    </section>
  );
}
