import {Users} from 'lucide-react';
import type {CosmosTopic} from './CosmosGuide';

// Fontes: https://www.nasa.gov/humans-in-space/
// /living-in-space/, /the-human-body-in-space/, /astronauts/become-an-astronaut/
// /astronauts/spacesuits/, /destinations/, /commercial-space/commercial-crew-program/
// https://www.nasa.gov/international-space-station/space-station-research-and-technology/
// As legendas identificam fotografias e conceitos artísticos. Consulta: 12/11/2026.
export const humansInSpace: CosmosTopic = {
  id: 'humanos-no-espaco',
  name: 'Humanos no espaço',
  subtitle: 'Astronautas, vida em órbita, pesquisas e os caminhos para a Lua e Marte',
  icon: Users,
  downloads: true,
  attribution: 'Conteúdo adaptado de NASA Humans in Space, Human Research Program e Space Station Research and Technology. Consulta em 12/11/2026. Projetos futuros estão identificados como planos. Créditos das imagens indicados nas legendas.',
  figures: [
    {
      section: 'visao-geral', file: 'humans/caminhada-espacial.jpg',
      alt: 'Suni Williams em atividade extraveicular, presa ao braço robótico Canadarm2, com a Terra ao fundo.',
      caption: 'Suni Williams trabalha no exterior da ISS durante a Expedição 72. O braço robótico Canadarm2 a conduz até o local de manutenção.', credit: 'NASA · ISS072E595426',
    },
    {
      section: 'vida-em-orbita', file: 'humans/vida-na-estacao.jpg',
      alt: 'Integrantes da Expedição 68 reunidos no laboratório Destiny da estação espacial.',
      caption: 'A tripulação da Expedição 68 participa de uma conferência com os controladores de missão no laboratório Destiny.', credit: 'NASA',
    },
    {
      section: 'saude', file: 'humans/exercicios.jpg',
      alt: 'Bob Hines realiza exercícios no equipamento resistivo ARED no módulo Tranquility.',
      caption: 'Bob Hines usa o ARED em julho de 2022. O equipamento fornece resistência para exercitar músculos e ossos durante a missão.', credit: 'NASA · ISS067E180951',
    },
    {
      section: 'treinamento', file: 'humans/treinamento.jpg',
      alt: 'Técnicos ajudam Zena Cardman a vestir um traje para treinamento subaquático.',
      caption: 'Zena Cardman se prepara para um treinamento subaquático no Laboratório de Flutuabilidade Neutra da NASA, em abril de 2018.', credit: 'NASA/David DeHoyos · JSC2018E035760',
    },
    {
      section: 'trajes', file: 'humans/suporte-do-traje.jpg',
      alt: 'Astronauta usando um traje EMU com mochila de suporte de vida durante trabalho fora da ISS.',
      caption: 'O traje de caminhada espacial leva sua própria mochila de suporte de vida. O astronauta permanece conectado à estação durante o trabalho.', credit: 'NASA · ISS063E052643',
    },
    {
      section: 'pesquisas', file: 'humans/pesquisa-em-orbita.jpg',
      alt: 'Tracy Dyson troca componentes de um experimento sobre produção de medicamentos na ISS.',
      caption: 'Tracy C. Dyson trabalha no Pharmaceutical In-space Laboratory, um experimento que investiga a produção de medicamentos em microgravidade.', credit: 'NASA',
    },
    {
      section: 'transporte', file: 'humans/crew-dragon.jpg',
      alt: 'Nave Crew Dragon Endeavour fotografada ao se afastar da Estação Espacial Internacional.',
      caption: 'A Crew Dragon Endeavour se afasta da ISS levando uma tripulação. A nave transporta astronautas entre a Terra e a estação.', credit: 'NASA',
    },
  ],
  sections: [
    {
      id: 'visao-geral', title: 'Por que levar pessoas ao espaço?',
      text: 'A exploração humana reúne ciência, engenharia e cooperação internacional. Em órbita, astronautas realizam experimentos, mantêm laboratórios e testam tecnologias que ajudam a preparar viagens mais longas.',
      details: [
        {title: 'Descobrir', text: 'Investigar o comportamento de materiais, seres vivos e sistemas físicos em condições diferentes das encontradas na superfície terrestre.'},
        {title: 'Aprender a viver longe da Terra', text: 'Desenvolver sistemas de suporte de vida, procedimentos de manutenção e formas de trabalhar com recursos limitados.'},
        {title: 'Trazer conhecimento para a Terra', text: 'Pesquisas e tecnologias espaciais podem contribuir para medicina, monitoramento ambiental e soluções de engenharia. Cada aplicação precisa ser demonstrada e avaliada.'},
      ],
    },
    {
      id: 'vida-em-orbita', title: 'Como é viver em órbita?',
      text: 'A ISS tem presença humana contínua desde 2 de novembro de 2000. Seus ocupantes flutuam porque a estação e tudo dentro dela estão em queda livre ao redor da Terra. A gravidade continua atuando nessa altitude.',
      details: [
        {title: 'Alimentação e água', text: 'Parte dos alimentos é reidratada ou aquecida. Embalagens e utensílios ajudam a conter líquidos e partículas. Sistemas de bordo recuperam água para reduzir a necessidade de abastecimento.'},
        {title: 'Sono e rotina', text: 'Sacos de dormir ficam presos para evitar que a pessoa flutue pela cabine. O planejamento diário reserva tempo para trabalho, exercícios, refeições e descanso.'},
        {title: 'Higiene e convivência', text: 'A tripulação usa pouca água, produtos sem enxágue e sanitários com circulação de ar. Contato com familiares e coordenação com o controle de missão fazem parte da rotina.'},
      ],
    },
    {
      id: 'saude', title: 'O corpo humano no espaço',
      text: 'O Human Research Program estuda cinco desafios das viagens espaciais: radiação, isolamento, distância da Terra, mudanças de gravidade e ambientes fechados. A duração e o destino da missão mudam a exposição a esses fatores.',
      details: [
        {title: 'Músculos, ossos e equilíbrio', text: 'Em microgravidade, a menor carga sobre o corpo favorece perda muscular e óssea. Exercícios resistivos, alimentação e acompanhamento médico ajudam a reduzir esses efeitos.'},
        {title: 'Fluidos e visão', text: 'Líquidos se redistribuem pelo corpo. Mudanças na visão e na adaptação ao movimento são acompanhadas antes, durante e depois do voo.'},
        {title: 'Radiação e proteção', text: 'Partículas solares e raios cósmicos são desafios importantes, especialmente além da órbita baixa. Dosímetros, blindagem e planejamento operacional ajudam a controlar a exposição.'},
        {title: 'Isolamento e autonomia', text: 'Confinamento, sono e trabalho em equipe afetam o desempenho. Em destinos distantes, atrasos nas comunicações exigem maior capacidade de resolver problemas a bordo.'},
      ],
    },
    {
      id: 'treinamento', title: 'Como os astronautas se preparam?',
      text: 'Astronautas vêm de áreas como engenharia, ciências, medicina e aviação. Na NASA, a formação inicial dos candidatos dura cerca de dois anos, seguida de preparação para as tarefas de cada missão.',
      details: [
        {title: 'Operar e resolver emergências', text: 'Simuladores permitem praticar sistemas da estação, procedimentos de voo e respostas a falhas. Comunicação, liderança e trabalho em equipe são habilidades essenciais.'},
        {title: 'Robótica e caminhadas espaciais', text: 'O treinamento inclui braços robóticos e atividades extraveiculares. Exercícios em grandes piscinas permitem ensaiar movimentos e o uso de ferramentas com o traje.'},
        {title: 'Ciência e preparação física', text: 'A tripulação aprende os protocolos dos experimentos e passa por avaliações médicas e treinamento físico. Ser selecionado como candidato inicia a formação e não garante uma data de voo.'},
      ],
    },
    {
      id: 'trajes', title: 'Trajes espaciais: suporte de vida individual',
      text: 'Uma caminhada espacial exige proteção contra o vácuo e um sistema capaz de manter o astronauta vivo fora da cabine. O traje também precisa permitir movimento, visão e uso de ferramentas.',
      details: [
        {title: 'Pressão e respiração', text: 'O traje mantém pressão interna e fornece oxigênio. Sua mochila remove dióxido de carbono e abriga sistemas elétricos e de comunicação.'},
        {title: 'Controle térmico', text: 'Uma roupa interna com tubos de água ajuda a retirar o calor produzido pelo corpo durante o trabalho. As camadas externas complementam a proteção do conjunto.'},
        {title: 'Uma roupa para cada tarefa', text: 'Trajes de lançamento e retorno são usados dentro de naves. Trajes extraveiculares sustentam atividades fora delas. Luvas, juntas e mobilidade precisam corresponder ao ambiente e à operação.'},
      ],
    },
    {
      id: 'pesquisas', title: 'O que se pesquisa com astronautas?',
      text: 'A estação espacial funciona como laboratório para biologia, física, tecnologia e observação da Terra. Os resultados são comparados com experimentos e modelos em solo para entender o papel do ambiente espacial.',
      details: [
        {title: 'Biologia e medicamentos', text: 'Células, microrganismos e proteínas ajudam a investigar processos biológicos e métodos de produção. Estudos em órbita também analisam a saúde e a adaptação dos próprios astronautas.'},
        {title: 'Fluidos, materiais e combustão', text: 'Sem os mesmos efeitos de sedimentação e flutuação encontrados em solo, líquidos e chamas se comportam de outras formas. Isso permite testar modelos e investigar materiais e segurança contra incêndios.'},
        {title: 'Plantas e suporte de vida', text: 'Experimentos estudam o crescimento de plantas e tecnologias para reciclar recursos. São etapas importantes na preparação de permanências mais longas fora da Terra.'},
        {title: 'Tecnologia e colaboração', text: 'Robótica, sensores e fabricação em órbita são testados em condições reais. Astronautas instalam equipamentos, coletam amostras e adaptam procedimentos junto às equipes em solo.'},
      ],
    },
    {
      id: 'destinos', title: 'Da órbita terrestre à Lua e Marte',
      text: 'A NASA usa a experiência em órbita baixa para preparar operações mais distantes. A Lua permite testar exploração de superfície e tecnologias. Missões humanas a Marte continuam sendo um objetivo futuro.',
      gallery: [
        {title: 'Órbita terrestre', subtitle: 'Presença humana e pesquisa', file: 'humans/estacao-espacial.jpg', alt: 'Estação Espacial Internacional vista através de uma janela de nave.', caption: 'Fotografia da ISS vista de uma nave. A estação permite estudar microgravidade, suporte de vida e cooperação em operações prolongadas.', credit: 'NASA'},
        {title: 'Lua', subtitle: 'Artemis e exploração lunar', file: 'humans/exploracao-lunar.jpg', alt: 'Conceito artístico de astronauta descendo de um módulo lunar.', caption: 'Conceito artístico de exploração lunar. O programa Artemis reúne testes e missões para desenvolver capacidades de exploração na Lua e ao seu redor.', credit: 'Ilustração · NASA'},
        {title: 'Marte', subtitle: 'Objetivo de exploração humana futura', file: 'humans/habitat-marte.jpg', alt: 'Conceito artístico de astronautas e habitats na superfície de Marte.', caption: 'Conceito artístico de uma base em Marte. Autonomia, proteção contra radiação e suporte de vida duradouro são desafios para uma futura missão tripulada.', credit: 'Ilustração · NASA'},
      ],
    },
    {
      id: 'transporte', title: 'Como chegar e voltar?',
      text: 'Foguetes fornecem o impulso para o lançamento. Naves tripuladas transportam e protegem os ocupantes, realizam manobras e precisam oferecer uma forma segura de retorno. Veículos para órbita baixa e para a Lua atendem a necessidades diferentes.',
      details: [
        {title: 'Transporte para a estação', text: 'O Commercial Crew Program reúne NASA e empresas privadas para levar astronautas à ISS e trazê-los de volta. A Crew Dragon é um exemplo de nave usada nessas viagens.'},
        {title: 'Encontro e acoplagem', text: 'Alcançar a estação exige ajustar a órbita e reduzir a velocidade relativa na aproximação. A acoplagem conecta as duas estruturas e permite a passagem da tripulação.'},
        {title: 'Retorno à Terra', text: 'O retorno inclui manobra de saída de órbita, proteção térmica na reentrada e desaceleração. O sistema de pouso ou amerissagem depende do projeto da nave.'},
      ],
    },
  ],
};
