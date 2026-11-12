import {Download} from 'lucide-react';

// Originais e créditos no NASA Scientific Visualization Studio.
const media = {
  // https://svs.gsfc.nasa.gov/13326/
  'buracos-negros': {
    title: 'A luz ao redor de um buraco negro',
    video: 'buraco-negro.webm',
    poster: 'buraco-negro.jpg',
    type: 'video/webm',
    description: 'Nesta simulação, o ponto de vista gira ao redor de um buraco negro e de seu disco de acreção. A gravidade desvia a luz, revelando partes do disco que ficam atrás da região escura. O gás que se move na nossa direção parece mais brilhante por um efeito relativístico.',
    credit: 'NASA’s Goddard Space Flight Center/Jeremy Schnittman',
  },
  // https://svs.gsfc.nasa.gov/5290/
  estrelas: {
    title: 'Estrelas binárias e curvas de luz',
    video: 'estrelas-binarias.mp4',
    poster: 'estrelas-binarias.jpg',
    type: 'video/mp4',
    description: 'A visualização compara quatro sistemas binários hipotéticos. Na primeira linha, vemos as órbitas de cima. Na segunda, vemos os eclipses de lado. Na última, os gráficos mostram a queda de brilho quando uma estrela passa diante da outra. A forma e a repetição dessas quedas revelam propriedades da órbita.',
    credit: 'NASA’s Scientific Visualization Studio · Kel Elkins · ciência de Brian Powell (NASA/GSFC)',
  },
  // https://svs.gsfc.nasa.gov/13022/
  exoplanetas: {
    title: 'Como um trânsito revela um planeta',
    video: 'transito.webm',
    poster: 'transito.jpg',
    type: 'video/webm',
    description: 'A animação acompanha um planeta passando diante de sua estrela. O gráfico registra uma queda de brilho durante o trânsito e a recuperação quando o planeta sai da frente. Trânsitos repetidos ajudam a medir o período orbital. A profundidade da queda depende do tamanho do planeta em relação ao da estrela.',
    credit: 'NASA’s Jet Propulsion Laboratory',
  },
  // https://svs.gsfc.nasa.gov/14656/
  galaxias: {
    title: 'Como uma colisão transforma galáxias',
    video: 'colisao-galaxias.mp4',
    poster: 'colisao-galaxias.jpg',
    type: 'video/mp4',
    description: 'Esta simulação acompanha duas galáxias espirais em interação. As estrelas aparecem em amarelo e o gás, em azul. A gravidade produz longas caudas e aproxima as regiões centrais até uma fusão. Cada segundo representa cerca de 30 milhões de anos, em uma sequência que abrange aproximadamente 1,5 bilhão de anos.',
    credit: 'Visualização de Frank Summers (STScI) · simulação de Chris Mihos (CWRU) e Lars Hernquist (Harvard), publicada no NASA SVS',
  },
};

export type NasaMediaTopic = keyof typeof media;

export default function NasaMedia({topic, id}: {topic: NasaMediaTopic; id: string}) {
  const item = media[topic];
  const asset = import.meta.env.BASE_URL + 'assets/nasa/';

  return (
    <section className="destination-panel nasa-media-panel" aria-labelledby={id}>
      <h2 id={id} tabIndex={-1}>Vídeo e downloads</h2>
      <h3>{item.title}</h3>
      <figure className="nasa-video">
        <video key={topic} controls playsInline preload="none" poster={asset + item.poster} aria-label={item.title} aria-describedby={id + '-description'}>
          <source src={asset + item.video} type={item.type}/>
          Seu navegador pode abrir o arquivo pelo botão Baixar vídeo.
        </video>
        <figcaption id={id + '-description'}>{item.description}</figcaption>
      </figure>
      <div className="nasa-downloads">
        <a href={asset + item.video} download><Download size={16} aria-hidden="true"/>Baixar vídeo</a>
        <a href={asset + item.poster} download><Download size={16} aria-hidden="true"/>Baixar imagem da visualização</a>
      </div>
      <p className="nasa-media-credit">Crédito · {item.credit}</p>
    </section>
  );
}
