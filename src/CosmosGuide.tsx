import {Bot, CircleDot, Compass, Download, FlaskConical, Globe, History, Layers, Orbit, Plane, PlayCircle, Rocket, Ruler, Scan, Search, Sparkles, Star, Telescope, Users, Waypoints} from 'lucide-react';
import NasaMedia, {type NasaMediaTopic} from './NasaMedia';

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
  lancamentos: Rocket,
  'urss-russia': Orbit,
  china: Globe,
  'onibus-espacial': Plane,
  pesquisas: FlaskConical,
  crescimento: Sparkles,
  'sistemas-planetarios': Orbit,
  medidas: Ruler,
  classificacao: Layers,
  'ciclo-de-vida': History,
  'luz-estelar': Telescope,
  catalogo: Globe,
  clima: Sparkles,
  'outros-metodos': Scan,
};

type CosmosFigure = {file: string; alt: string; caption: string; credit: string};

type CosmosSection = {
  id: keyof typeof sectionIcons;
  title: string;
  text: string;
  details?: {title: string; text: string}[];
  gallery?: (CosmosFigure & {title: string; subtitle: string})[];
};

type CosmosTopic = {
  id: string;
  name: string;
  subtitle: string;
  icon: typeof CircleDot;
  figures: (CosmosFigure & {section: string})[];
  attribution?: string;
  video?: NasaMediaTopic;
  sections: CosmosSection[];
};

export const cosmosTopics: CosmosTopic[] = [
  {
    id: 'missoes-espaciais',
    name: 'Missões espaciais',
    subtitle: 'Programas internacionais, foguetes, ônibus espaciais e a ciência de cada missão',
    icon: Rocket,
    attribution: 'Conteúdo adaptado de NASA, ESA, CNSA, Centro Nacional de Dados de Ciência Espacial da China e Agência Chinesa de Voos Espaciais Tripulados (CMSA). Contagens históricas indicam seu período de referência.',
    figures: [{
      section: 'tripuladas',
      file: 'cosmos/apollo-missao.jpg',
      alt: 'Buzz Aldrin na superfície lunar durante a missão Apollo 11.',
      caption: 'Buzz Aldrin na Lua, fotografado por Neil Armstrong durante a Apollo 11, em julho de 1969.',
      credit: 'NASA/JSC',
    }, {
      section: 'roboticas',
      file: 'cosmos/perseverance.gif',
      alt: 'Mosaico de autorretratos do rover Perseverance com o helicóptero Ingenuity em Marte.',
      caption: 'Perseverance e Ingenuity em Marte, em abril de 2021. O autorretrato foi montado com imagens obtidas pela câmera na ponta do braço robótico.',
      credit: 'NASA/JPL-Caltech/MSSS',
    }, {
      section: 'linha-do-tempo',
      file: 'cosmos/artemis.jpg',
      alt: 'Foguete SLS decola à noite no lançamento da missão Artemis I.',
      caption: 'Lançamento da Artemis I em 16 de novembro de 2022. O voo de teste levou a nave Orion ao redor da Lua.',
      credit: 'NASA/Bill Ingalls',
    }, {
      section: 'urss-russia',
      file: 'missions/mir.jpg',
      alt: 'Estação espacial Mir fotografada sobre a Terra durante a aproximação do Atlantis.',
      caption: 'A estação Mir vista do Atlantis durante a STS-71, em junho de 1995. As missões conjuntas permitiram estudar a permanência humana prolongada em órbita.',
      credit: 'NASA · STS071-744-030',
    }, {
      section: 'china',
      file: 'missions/zhurong.jpg',
      alt: 'Rover chinês Zhurong e sua plataforma de pouso na superfície de Marte.',
      caption: 'Autorretrato de Zhurong com a plataforma de pouso, divulgado pela CNSA em junho de 2021. O rover levou radar, câmeras, magnetômetro e instrumentos para estudar a superfície e o clima.',
      credit: 'CNSA',
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
        id: 'lancamentos', title: 'Quantos foguetes foram lançados?',
        text: 'Segundo o levantamento Space Environment Statistics da ESA, atualizado em 31 de julho de 2026, houve cerca de 7.320 lançamentos desde 1957, excluindo falhas. É um retrato datado do histórico orbital. Voos suborbitais, tentativas que falharam e satélites transportados exigem contagens próprias.',
        details: [
          {title: 'Um lançamento pode levar vários satélites', text: 'O mesmo levantamento registra cerca de 27.490 satélites colocados em órbita terrestre. Um foguete pode transportar uma única nave ou liberar dezenas de cargas.'},
          {title: '135 voos do ônibus espacial', text: 'Total do programa da NASA entre 12 de abril de 1981 e 21 de julho de 2011. Inclui a missão STS-51L, perdida durante a subida, e a STS-107, perdida na reentrada.'},
          {title: '355 pessoas · 852 participações', text: 'O programa levou 355 pessoas ao espaço. Como algumas voaram várias vezes, a NASA registra 852 participações de tripulantes nos voos.'},
          {title: 'Mais de 2.000 experimentos', text: 'No balanço de encerramento do programa, a NASA contabilizou mais de 2.000 experimentos em ciências da Terra, astronomia, biologia e materiais.'},
        ],
      },
      {
        id: 'urss-russia', title: 'União Soviética e Rússia',
        text: 'Os programas soviéticos abriram a era dos satélites e dos voos humanos. A Rússia deu continuidade a parte dessa infraestrutura, com naves Soyuz, cargueiros Progress e participação na Estação Espacial Internacional.',
        details: [
          {title: 'Sputnik 1 · 1957', text: 'Primeiro satélite artificial da Terra, lançado em 4 de outubro por um foguete derivado do R-7. Seu sinal de rádio permitiu acompanhar a órbita e demonstrou a capacidade de colocar uma carga ao redor do planeta.'},
          {title: 'Vostok · 1961 e 1963', text: 'Yuri Gagarin realizou o primeiro voo espacial humano na Vostok 1, em 12 de abril de 1961. Valentina Tereshkova foi a primeira mulher no espaço, na Vostok 6, em junho de 1963. O programa testou a sobrevivência e o trabalho humano durante o voo orbital.'},
          {title: 'Venera 7 · Vênus, 1970', text: 'A sonda transmitiu dados da superfície de Vênus. As medições indicaram temperatura de cerca de 475 °C, com incerteza de aproximadamente 20 °C, ajudando a caracterizar o ambiente extremo do planeta.'},
          {title: 'Salyut e Mir · laboratórios em órbita', text: 'A Salyut 1 inaugurou as estações espaciais em 1971. O módulo central da Mir foi lançado em 1986. Na Mir, pesquisas acompanharam a saúde dos tripulantes, o comportamento de fluidos e o efeito da radiação sobre equipamentos e materiais.'},
          {title: 'Soyuz e Progress · transporte e abastecimento', text: 'A Soyuz transporta pessoas em uma cápsula que retorna à Terra. A Progress leva suprimentos e combustível. Esses voos sustentam a permanência das equipes e a continuidade dos experimentos em estações espaciais.'},
          {title: 'Buran · ônibus espacial soviético', text: 'Fez um único voo orbital, sem tripulação, em 15 de novembro de 1988, lançado pelo foguete Energia. Completou duas órbitas e pousou automaticamente, demonstrando tecnologias de voo, reentrada e aterrissagem.'},
        ],
      },
      {
        id: 'china', title: 'Missões chinesas',
        text: 'O programa chinês combina voos tripulados, laboratórios orbitais, exploração lunar e missões planetárias. Os foguetes Longa Marcha transportam diferentes tipos de naves e cargas.',
        details: [
          {title: 'Shenzhou 5 · primeiro voo tripulado, 2003', text: 'Yang Liwei voou em outubro de 2003, em uma missão lançada pelo Longa Marcha 2F. O voo demonstrou a capacidade chinesa de levar uma pessoa à órbita e recuperá-la na Terra.'},
          {title: 'Tiangong-2 · laboratório, 2016–2019', text: 'Realizou mais de 60 experimentos e testes tecnológicos. Entre os instrumentos estavam um relógio de átomos frios e o POLAR, desenvolvido com participação europeia para estudar a polarização de explosões de raios gama.'},
          {title: 'Tiangong · estação espacial', text: 'Seu módulo central Tianhe foi lançado em 2021. As tripulações estudam materiais, fluidos, biologia e medicina espacial. Na Shenzhou-18, lançada em 2024, o programa de pesquisa incluiu física de microgravidade e ciências da vida.'},
          {title: 'Tianwen-1 e Zhurong · Marte, 2020–2021', text: 'A missão levou um orbitador, uma plataforma de pouso e o rover Zhurong. Seus instrumentos investigam a geologia, a estrutura abaixo da superfície, a atmosfera e indícios da presença de água no passado.'},
          {title: 'Chang’e-6 · amostras da Lua, 2024', text: 'Lançada em 3 de maio e retornada em 25 de junho, trouxe 1.935,3 gramas de material do lado afastado da Lua. Essas amostras permitem investigar a composição e a evolução de uma região lunar diferente das áreas já amostradas.'},
        ],
      },
      {
        id: 'onibus-espacial', title: 'Quais foram os ônibus espaciais?',
        text: 'Cinco orbitadores da NASA fizeram os 135 voos do programa. Eles decolavam com um tanque externo e dois propulsores sólidos, operavam em órbita terrestre e retornavam para pousar em uma pista.',
        details: [
          {title: 'Enterprise · protótipo de testes', text: 'Foi usado em ensaios atmosféricos de aproximação e pouso. Realizou zero voos orbitais e fica fora da soma das 135 missões.'},
          {title: 'Challenger e Columbia', text: 'O Challenger foi perdido no lançamento da STS-51L, em 1986. O Columbia foi perdido na reentrada da STS-107, em 2003. Cada acidente causou a morte dos sete tripulantes e levou à revisão de procedimentos de segurança.'},
        ],
        gallery: [
          {title: 'Columbia · OV-102', subtitle: '28 voos · 1981–2003', file: 'missions/columbia.jpg', alt: 'Columbia pousa na base Edwards ao concluir a STS-1 em 1981.', caption: 'Inaugurou os voos orbitais do programa e levou o Spacelab-1 na STS-9. Foto do pouso da STS-1.', credit: 'NASA · EC81-15104'},
          {title: 'Challenger · OV-099', subtitle: '10 voos · 1983–1986', file: 'missions/challenger.jpg', alt: 'Ônibus espacial Challenger durante um pouso.', caption: 'Transportou laboratórios e satélites, incluindo o ERBS, dedicado ao balanço de radiação da Terra.', credit: 'NASA/JSC · 61A-S-0139'},
          {title: 'Discovery · OV-103', subtitle: '39 voos · 1984–2011', file: 'missions/discovery.jpg', alt: 'Ônibus espacial Discovery durante sua transferência para exposição em 2012.', caption: 'Foi o orbitador com mais voos. Colocou o Hubble em órbita na STS-31, em 1990. Foto de sua transferência para exposição.', credit: 'NASA/Bill Ingalls'},
          {title: 'Atlantis · OV-104', subtitle: '33 voos · 1985–2011', file: 'missions/atlantis.jpg', alt: 'Atlantis após o encerramento de sua última missão em 2011.', caption: 'Fez a primeira acoplagem de um ônibus à Mir, na STS-71, e encerrou o programa na STS-135.', credit: 'NASA/Bill Ingalls'},
          {title: 'Endeavour · OV-105', subtitle: '25 voos · 1992–2011', file: 'missions/endeavour.jpg', alt: 'Endeavour na plataforma durante os preparativos para a STS-134 em 2011.', caption: 'Executou o primeiro reparo do Hubble e a missão de mapeamento terrestre SRTM. Foto dos preparativos da STS-134.', credit: 'NASA/Bill Ingalls'},
        ],
      },
      {
        id: 'pesquisas', title: 'Que estudos foram feitos nas missões?',
        text: 'Cada missão tinha instrumentos e perguntas específicos. Estes exemplos relacionam o veículo ao trabalho científico e aos dados obtidos.',
        details: [
          {title: 'STS-9 · Columbia · 1983', text: 'O Spacelab-1 reuniu pesquisas de física atmosférica, observação da Terra, plasma espacial, astronomia, física solar, materiais e ciências da vida. Um espectrômetro também registrou fontes cósmicas de raios X.'},
          {title: 'STS-41G · Challenger · 1984', text: 'Colocou o satélite ERBS em órbita e levou instrumentos de observação da Terra. O ERBS media radiação solar e térmica para investigar o balanço de energia do planeta e o clima.'},
          {title: 'STS-40 · Columbia · 1991', text: 'O laboratório SLS-1 estudou os sistemas cardiovascular, renal, sanguíneo, imunológico, muscular e neurovestibular. As medições ajudaram a entender a adaptação do organismo à microgravidade.'},
          {title: 'STS-61 · Endeavour · 1993', text: 'A primeira manutenção do Hubble instalou equipamentos ópticos corretivos e uma nova câmera. O reparo melhorou a qualidade das observações usadas em pesquisas de estrelas, galáxias e distâncias cósmicas.'},
          {title: 'STS-71 · Atlantis · 1995', text: 'A acoplagem à Mir permitiu pesquisas médicas conjuntas. Os experimentos acompanharam a adaptação à falta de peso e a recuperação após estadias prolongadas em órbita.'},
          {title: 'STS-99 · Endeavour · 2000', text: 'A missão SRTM usou duas antenas de radar, separadas por uma haste de 60 metros, para medir o relevo terrestre. Os dados deram origem a modelos de elevação usados em cartografia e estudos ambientais.'},
          {title: 'Mir e Tiangong · pesquisa prolongada', text: 'Meses em órbita permitem observar mudanças lentas no corpo humano e repetir experimentos de materiais, fluidos e biologia. A duração, os instrumentos e os protocolos determinam quais perguntas cada estação pode investigar.'},
        ],
      },
      {
        id: 'linha-do-tempo', title: 'Linha do tempo',
        text: 'Uma seleção de marcos mostra como a exploração passou de visitas curtas a operações prolongadas em outros mundos.',
        details: [
          {title: '1957 · Sputnik 1', text: 'A União Soviética colocou em órbita o primeiro satélite artificial da Terra.'},
          {title: '1961 · Vostok 1', text: 'Yuri Gagarin realizou o primeiro voo espacial humano.'},
          {title: '1969 · Apollo 11', text: 'Primeiro pouso humano na Lua. A tripulação retornou à Terra em 24 de julho.'},
          {title: '1977 · Voyager', text: 'A Voyager 2 foi lançada em 20 de agosto, seguida pela Voyager 1 em 5 de setembro.'},
          {title: '1981 · Columbia', text: 'A STS-1 inaugurou os voos orbitais do ônibus espacial da NASA.'},
          {title: '1986–1988 · Mir e Buran', text: 'O módulo central da Mir foi colocado em órbita em 1986. O Buran fez seu único voo orbital em 1988.'},
          {title: '1997–2017 · Cassini–Huygens', text: 'Após o lançamento em 1997, Cassini chegou à órbita de Saturno em 2004. A missão terminou em setembro de 2017 com uma entrada planejada na atmosfera do planeta.'},
          {title: '2003 · Shenzhou 5', text: 'A China realizou seu primeiro voo espacial tripulado com Yang Liwei.'},
          {title: '2021 · Perseverance', text: 'O pouso em Jezero abriu uma nova etapa de investigação das rochas e dos antigos ambientes de Marte.'},
          {title: '2021 · Tianwen-1 e Tiangong', text: 'A China pousou Zhurong em Marte e colocou o módulo Tianhe em órbita da Terra.'},
          {title: '2022 · Artemis I', text: 'Voo de teste sem tripulação do foguete SLS e da nave Orion. Lançado em 16 de novembro, passou ao redor da Lua e terminou com a amerissagem em 11 de dezembro.'},
          {title: '2024 · Chang’e-6', text: 'A missão trouxe à Terra amostras do lado afastado da Lua.'},
        ],
      },
    ],
  },
  {
    id: 'buracos-negros',
    name: 'Buracos negros',
    subtitle: 'Horizonte de eventos, tipos e anatomia',
    icon: CircleDot,
    video: 'buracos-negros',
    figures: [{
      section: 'anatomia',
      file: 'cosmos/buracos-negros.jpg',
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
      {
        id: 'crescimento', title: 'Como os buracos negros crescem?',
        text: 'A matéria que atravessa o horizonte de eventos aumenta a massa do buraco negro. Fusões com outros buracos negros também contribuem para o crescimento.',
        details: [
          {title: 'Acreção e brilho', text: 'Antes de cair, o gás pode formar um disco muito quente. A radiação desse material permite localizar um buraco negro e acompanhar mudanças na alimentação ao longo do tempo.'},
          {title: 'Fusões e ondas gravitacionais', text: 'Durante a aproximação e a fusão de dois buracos negros, parte da energia do sistema é emitida em ondas gravitacionais. A forma do sinal ajuda a estimar as massas dos objetos envolvidos.'},
          {title: 'Uma questão sobre as primeiras galáxias', text: 'Astrônomos investigam como alguns buracos negros supermassivos cresceram tão cedo no Universo. O tamanho das sementes iniciais e a rapidez com que ganharam matéria são partes desse problema.'},
        ],
      },
    ],
  },
  {
    id: 'estrelas',
    name: 'Estrelas',
    subtitle: 'Ciclo de vida, tipos e sistemas múltiplos',
    icon: Star,
    video: 'estrelas',
    attribution: 'Conteúdo adaptado de NASA Science, NASA Jet Propulsion Laboratory e ESA/Gaia. As imagens identificam os objetos observados e seus créditos.',
    figures: [{
      section: 'visao-geral',
      file: 'cosmos/estrelas.png',
      alt: 'Estrelas azuis jovens cercadas por nuvens de gás e poeira no aglomerado NGC 602.',
      caption: 'Imagem do Hubble de NGC 602, na Pequena Nuvem de Magalhães. A radiação das estrelas jovens esculpe as bordas da nuvem de gás e poeira onde elas se formaram.',
      credit: 'NASA, ESA e Hubble Heritage Team (STScI/AURA)–ESA/Hubble',
    }, {
      section: 'tipos',
      file: 'cosmos/anel.png',
      alt: 'Imagem infravermelha da Nebulosa do Anel com gás brilhante em torno de uma cavidade central.',
      caption: 'O Webb registrou as camadas de gás da Nebulosa do Anel, expelidas por uma estrela nas fases finais de sua evolução.',
      credit: 'ESA/Webb, NASA, CSA, M. Barlow (UCL), N. Cox (ACRI-ST) e R. Wesson (Cardiff University)',
    }, {
      section: 'sistemas-multiplos',
      file: 'cosmos/sirius.jpg',
      alt: 'Sirius A aparece como uma estrela muito brilhante, com Sirius B como um ponto mais fraco próximo.',
      caption: 'Imagem do Hubble do sistema Sirius. A pequena companheira Sirius B é uma anã branca.',
      credit: 'NASA, H. E. Bond, E. Nelan, M. Barstow, M. Burleigh e J. B. Holberg',
    }, {
      section: 'sistemas-planetarios',
      file: 'cosmos/beta-pictoris-webb.png',
      alt: 'Imagem infravermelha do disco de detritos ao redor de Beta Pictoris, com uma estrutura curva de poeira.',
      caption: 'O instrumento MIRI do Webb registrou o disco de detritos de Beta Pictoris. A luz da estrela foi bloqueada por um coronógrafo para revelar a poeira mais fraca ao redor.',
      credit: 'NASA, ESA, CSA, STScI, Christopher Stark, Kellen Lawson, Jens Kammerer e Marshall Perrin',
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
      {
        id: 'sistemas-planetarios', title: 'Como nascem os sistemas planetários?',
        text: 'A formação de planetas acompanha o nascimento das estrelas. Parte do material da nuvem que colapsa permanece em um disco girando ao redor da estrela jovem.',
        details: [
          {title: 'De poeira a planetesimais', text: 'Grãos de rocha e gelo colidem e podem se agregar em corpos maiores, chamados planetesimais. Novas colisões e a gravidade permitem o crescimento de embriões planetários.'},
          {title: 'O disco deixa pistas', text: 'O material do disco emite radiação infravermelha. Telescópios podem detectar esse excesso de luz ou registrar a estrutura do disco para estudar sua evolução.'},
          {title: 'Uma história que também está nas rochas', text: 'Meteoritos e amostras trazidas por missões espaciais guardam pistas químicas e físicas sobre o início do Sistema Solar, há cerca de 4,6 bilhões de anos.'},
        ],
      },
      {
        id: 'classificacao', title: 'Cores, temperaturas e classificação',
        text: 'A sequência espectral O, B, A, F, G, K e M organiza as estrelas das mais quentes para as mais frias. Os espectros, que separam a luz em comprimentos de onda, permitem reconhecer essas classes.',
        details: [
          {title: 'O e B · azul e branco-azulado', text: 'Na sequência principal, essas estrelas são muito quentes e massivas. Consomem combustível rapidamente e têm vidas mais curtas que estrelas semelhantes ao Sol.'},
          {title: 'A e F · branco e branco-amarelado', text: 'Têm temperaturas superficiais intermediárias entre as classes mais quentes e a classe solar. Sirius A é um exemplo de estrela de classe A.'},
          {title: 'G · a classe do Sol', text: 'O Sol é uma estrela da sequência principal de tipo G. Seu espectro permite estudar os elementos presentes em sua atmosfera e sua temperatura.'},
          {title: 'K e M · laranja e vermelho', text: 'Na sequência principal, são estrelas menores e mais frias que o Sol. Seu consumo mais lento de combustível favorece vidas longas.'},
        ],
      },
      {
        id: 'ciclo-de-vida', title: 'Caminhos de evolução e remanescentes',
        text: 'A massa inicial e a interação com companheiras influenciam a evolução. Estrelas de maior massa consomem seu combustível mais depressa, mesmo tendo mais material disponível.',
        details: [
          {title: 'Estrelas como o Sol', text: 'Após consumir o hidrogênio no núcleo, a estrela se expande. Mais tarde pode perder suas camadas externas, deixando um núcleo compacto e quente, a anã branca, que esfria ao longo do tempo.'},
          {title: 'Estrelas massivas', text: 'Produzem elementos progressivamente mais pesados em seu interior. Em alguns casos, o colapso do núcleo desencadeia uma supernova e deixa uma estrela de nêutrons ou um buraco negro.'},
          {title: 'Pulsares', text: 'São estrelas de nêutrons em rotação rápida. Seus feixes de radiação podem cruzar nossa linha de visão e produzir pulsos regulares, como um farol.'},
        ],
        gallery: [
          {title: 'Sol', subtitle: 'Estrela da sequência principal', file: 'solar/sun.jpg', alt: 'Disco do Sol com estruturas brilhantes em sua atmosfera.', caption: 'A fusão de hidrogênio no núcleo fornece a energia do Sol. A imagem mostra estruturas de sua atmosfera.', credit: 'NASA/SDO'},
          {title: 'Sirius B', subtitle: 'Anã branca em um sistema binário', file: 'cosmos/sirius.jpg', alt: 'Sirius A muito brilhante e a companheira Sirius B mais fraca.', caption: 'O ponto mais fraco junto de Sirius A é o remanescente compacto Sirius B. Imagem do Hubble.', credit: 'NASA, H. E. Bond, E. Nelan, M. Barstow, M. Burleigh e J. B. Holberg'},
          {title: 'Nebulosa do Caranguejo', subtitle: 'Remanescente de supernova com pulsar', file: 'nebulae/caranguejo.png', alt: 'Filamentos de gás da Nebulosa do Caranguejo observados pelo Webb.', caption: 'O material expelido na explosão forma a nebulosa. Seu pulsar central fornece energia ao ambiente ao redor.', credit: 'NASA, ESA, CSA, STScI, Tea Temim e Joseph DePasquale'},
        ],
      },
      {
        id: 'luz-estelar', title: 'Como estudamos uma estrela pela luz?',
        text: 'Mesmo sem viajar até uma estrela, astrônomos conseguem investigar sua composição, temperatura, movimento e distância.',
        details: [
          {title: 'Espectroscopia', text: 'Linhas de absorção e emissão identificam elementos químicos. Seus deslocamentos também revelam movimentos na direção do observador ou no sentido oposto.'},
          {title: 'Paralaxe e distância', text: 'Ao observar de posições diferentes ao longo da órbita terrestre, uma estrela próxima parece mudar de posição em relação ao fundo distante. Essa pequena mudança angular ajuda a calcular sua distância.'},
          {title: 'Brilho e luminosidade', text: 'O brilho aparente depende da energia emitida e da distância. Com a distância estimada, os astrônomos podem investigar a luminosidade intrínseca e comparar estrelas.'},
          {title: 'Variações ao longo do tempo', text: 'Pulsação, manchas, rotação e eclipses alteram o brilho. A repetição dessas mudanças ajuda a caracterizar a estrela e suas possíveis companheiras.'},
        ],
      },
    ],
  },
  {
    id: 'exoplanetas',
    name: 'Exoplanetas',
    subtitle: 'Busca por vida, descobertas e mundos incomuns',
    icon: Orbit,
    video: 'exoplanetas',
    figures: [{
      section: 'visao-geral',
      file: 'cosmos/exoplanetas.jpg',
      alt: 'Ilustração com os sete planetas rochosos do sistema TRAPPIST-1 diante de sua estrela.',
      caption: 'Ilustração artística de TRAPPIST-1. Os sete planetas rochosos desse sistema têm dimensões próximas às da Terra e orbitam uma anã vermelha.',
      credit: 'NASA, ESA, CSA e Joseph Olmsted (STScI)',
    }, {
      section: 'descobertas',
      file: 'cosmos/espectro.png',
      alt: 'Gráfico do espectro de transmissão de WASP-39 b com um pico de absorção de dióxido de carbono.',
      caption: 'Em 2022, o instrumento NIRSpec do Webb identificou dióxido de carbono na atmosfera do gigante gasoso WASP-39 b. O pico do gráfico indica a absorção de luz pelo gás.',
      credit: 'NASA, ESA, CSA, Leah Hustak e Joseph Olmsted (STScI)',
    }, {
      section: 'mundos-incomuns',
      file: 'cosmos/kepler.jpg',
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
      {
        id: 'medidas', title: 'O que conseguimos medir em um exoplaneta?',
        text: 'Os métodos de detecção fornecem medidas complementares. Juntas, elas ajudam a construir uma descrição do planeta e de seu sistema.',
        details: [
          {title: 'Raio e período orbital', text: 'O trânsito permite estimar o raio em relação ao da estrela. O intervalo entre trânsitos sucessivos do mesmo planeta revela quanto tempo ele leva para completar a órbita.'},
          {title: 'Massa e densidade média', text: 'Ao combinar um trânsito com medições de velocidade radial, os astrônomos podem estimar massa e raio. A densidade média ajuda a investigar a proporção de rocha, gelo e gás.'},
          {title: 'Atmosfera e incertezas', text: 'Os espectros revelam padrões de absorção associados a gases. Nuvens, neblinas e diferentes composições podem produzir sinais parecidos, por isso os dados são comparados com modelos e novas observações.'},
        ],
      },
      {
        id: 'catalogo', title: 'Um catálogo de mundos diferentes',
        text: 'Estes exemplos mostram a diversidade de tamanhos, órbitas e ambientes. As ilustrações artísticas representam cenários baseados em observações e modelos.',
        gallery: [
          {title: '55 Cancri e', subtitle: 'Super-Terra · órbita de cerca de 0,7 dia', file: 'cosmos/55-cancri-e.png', alt: 'Ilustração de 55 Cancri e, com superfície rochosa iluminada em tons alaranjados.', caption: 'Tem raio próximo de 1,9 vez o da Terra e orbita muito perto de sua estrela. É um laboratório para investigar mundos rochosos extremamente aquecidos.', credit: 'Ilustração de NASA, ESA, CSA e Dani Player (STScI)'},
          {title: 'HD 189733 b', subtitle: 'Gigante gasoso · órbita de cerca de 2,2 dias', file: 'cosmos/hd-189733b.jpg', alt: 'Ilustração de HD 189733 b, um planeta azul próximo de sua estrela.', caption: 'O Hubble mediu sua cor azul em luz visível. Partículas de silicatos na atmosfera podem contribuir para espalhar a luz azul.', credit: 'Ilustração de NASA, ESA e M. Kornmesser'},
          {title: 'Kepler-186 f', subtitle: 'Tamanho próximo ao da Terra · zona habitável', file: 'cosmos/kepler-186f.jpg', alt: 'Ilustração de Kepler-186 f com sua estrela avermelhada ao fundo.', caption: 'Foi o primeiro planeta de tamanho terrestre validado na zona habitável de outra estrela. A posição orbital indica uma condição possível para água líquida, dependendo da atmosfera.', credit: 'Ilustração de NASA/Ames/SETI Institute/JPL-Caltech'},
        ],
      },
      {
        id: 'clima', title: 'Como é o clima em outros mundos?',
        text: 'A distância da estrela, a rotação e a atmosfera influenciam quanto calor um planeta recebe, retém e distribui.',
        details: [
          {title: 'Dias e noites permanentes', text: 'Em planetas com rotação sincronizada, uma face permanece voltada para a estrela. A circulação atmosférica pode transportar parte do calor para a face noturna.'},
          {title: 'Nuvens e ventos', text: 'Em gigantes muito quentes, as nuvens podem conter materiais diferentes dos encontrados nas nuvens terrestres. Ventos também deslocam as regiões mais quentes da atmosfera.'},
          {title: 'Mapas de temperatura', text: 'Ao medir a luz infravermelha ao longo da órbita, astrônomos acompanham diferentes partes do planeta. Essas curvas ajudam a estimar contrastes de temperatura e circulação de calor.'},
        ],
      },
      {
        id: 'outros-metodos', title: 'Outras formas de descobrir planetas',
        text: 'Além de trânsitos e velocidade radial, outros métodos alcançam sistemas com características diferentes.',
        details: [
          {title: 'Imagem direta', text: 'Instrumentos bloqueiam ou reduzem o brilho da estrela para separar a luz de companheiros mais fracos. Planetas grandes, jovens e distantes da estrela são alvos favoráveis.'},
          {title: 'Microlentes gravitacionais', text: 'A gravidade de um objeto em primeiro plano amplia temporariamente a luz de uma estrela de fundo. Um planeta pode acrescentar uma alteração característica nesse sinal.'},
          {title: 'Astrometria', text: 'Mede pequenas mudanças na posição da estrela no céu. O movimento causado pela atração de um planeta ajuda a investigar sua massa e órbita.'},
          {title: 'Confirmação da descoberta', text: 'Sinais candidatos são comparados com explicações alternativas, como estrelas binárias. Observações repetidas e métodos complementares ajudam a confirmar a interpretação planetária.'},
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
          {topic.video && (
            <button type="button" onClick={() => openSection('multimidia')}>
              <PlayCircle size={20} aria-hidden="true"/>
              <span className="cosmos-subnav-label">Vídeo e downloads</span>
            </button>
          )}
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
              {section.gallery && (
                <ul className="galaxy-grid galaxy-gallery mission-gallery">
                  {section.gallery.map(item => (
                    <li className="galaxy-item" key={item.title}>
                      <img src={import.meta.env.BASE_URL + 'assets/' + item.file} alt={item.alt} width="640" height="400" loading="lazy" decoding="async"/>
                      <div className="galaxy-card-text">
                        <h3>{item.title}</h3>
                        <span>{item.subtitle}</span>
                        <p>{item.caption}</p>
                        <small>Imagem · {item.credit}</small>
                        {topic.video && (
                          <a className="nasa-image-download" href={import.meta.env.BASE_URL + 'assets/' + item.file} download>
                            <Download size={15} aria-hidden="true"/>Baixar imagem
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {topic.figures.filter(figure => figure.section === section.id).map(figure => (
                <figure className="cosmos-figure" key={figure.file}>
                  <img src={import.meta.env.BASE_URL + 'assets/' + figure.file} alt={figure.alt} loading="lazy" decoding="async"/>
                  <figcaption>
                    {figure.caption}
                    <span>Crédito da imagem · {figure.credit}</span>
                    {topic.video && (
                      <a className="nasa-image-download" href={import.meta.env.BASE_URL + 'assets/' + figure.file} download>
                        <Download size={15} aria-hidden="true"/>Baixar imagem
                      </a>
                    )}
                  </figcaption>
                </figure>
              ))}
            </section>
          );
        })}
        {topic.video && <NasaMedia topic={topic.video} id={topic.id + '-multimidia'}/>}
        <p className="cosmos-source-note">{topic.attribution ?? 'Conteúdo adaptado de NASA Science e NASA Jet Propulsion Laboratory.'}</p>
      </div>
    </section>
  );
}
