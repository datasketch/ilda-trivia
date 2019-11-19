import '../css/style.css';
import Trivia from './Trivia';

const intro = document.getElementById('intro');
const start = document.getElementById('start');

const questions = [
  {
    id: 1,
    text: '¿Qué es un femicidio?',
    choices: [
      'Es la muerte violenta de una mujer producto de un asalto, un robo o incluso un accidente de tránsito.',
      'Es la muerte violenta de una mujer donde el responsable actuó negligentemente o de forma intencional para dañar su integridad.',
      'Es la muerte violenta de una mujer por su género. El crimen puede cometerlo un familiar, su pareja o cualquier otra persona conocida o desconocida. Ocurre tanto en un espacio privado como público. También puede ser perpetrado o tolerado por el Estado y sus agentes.',
    ],
    answer: [2],
    whenCorrect: '¡Acertaste! La clave para distinguir un femicidio de un homicidio radica en que a la mujer se le quita la vida por causa de su género. El Mecanismo de Seguimiento de la Convención de Belém do Pará define Femicidio como:\n"La muerte violenta de mujeres por razones de género ya sea que tenga lugar dentro de la familia, unidad doméstica o en cualquier otra relación interpersonal, en la comunidad, por parte de cualquier persona, o que sea perpetrada o tolerada por el Estado y sus agentes, por actos de acción u omisión."',
    whenIncorrect: `Tu opción no es correcta.  La clave para distinguir un femicidio de un homicidio radica en que a la mujer se le quita la vida por causa de su género. De acuerdo con el Mecanismo de Seguimiento de la Convención de Belém do Pará, el Femicidio se define como: 
    'La muerte violenta de mujeres por razones de género ya sea que tenga lugar dentro de la familia, unidad doméstica o en cualquier otra relación interpersonal, en la comunidad, por parte de cualquier persona, o que sea perpetrada o tolerada por el Estado y sus agentes, por actos de acción u omisión'.`,
    mode: 'singular',
  },
  {
    id: 2,
    text: 'Hasta 2017, ¿cuántos países de Latinoamérica y el Caribe han aprobado leyes o reformas al Código Penal para castigar el femicidio?',
    choices: [15, 18, 9],
    answer: [1],
    whenCorrect: '¡Acertaste! Hasta 2017, 18 países han aprobado mecanismos legales para castigar el femicidio. Estos son: Costa Rica, Guatemala, Chile, Argentina, El Salvador, México, Nicaragua, Bolivia, Honduras, Panamá, Ecuador, República Dominicana, Venezuela, Brasil, Colombia, Perú, Paraguay y Uruguay.',
    whenIncorrect: 'Tu opción no es correcta. Hasta 2017, 18 países han aprobado mecanismos legales para castigar el femicidio. Estos son: Costa Rica, Guatemala, Chile, Argentina, El Salvador, México, Nicaragua, Bolivia, Honduras, Panamá, Ecuador, República Dominicana, Venezuela, Brasil, Colombia, Perú, Paraguay y Uruguay.',
    mode: 'singular',
  },
  {
    id: 3,
    text: '¿Cuántas definiciones de femicidio y de modalidades para juzgarlo existen en Latinoamérica y el Caribe?',
    choices: [
      'Una sola definición y hasta 16 modalidades de tipificación de estos crímenes',
      'Múltiples definiciones y agravantes que dependen de lo incluido por cada país en sus leyes o reformas al Código Penal.',
      'Una sola definición, pero circunstancias diversas para tipificarlo, según la legislación de cada país.',
    ],
    answer: [1],
    whenCorrect: '¡Acertaste! La definición de femicidio y las circunstancias para penalizarlo no son iguales en los países. En algunos solo se contemplan los crímenes cometidos por la pareja o la expareja de la víctima, ya sea dentro o fuera del matrimonio (femicidio íntimo).  En otros, el delito se extiende no solo a los íntimos, también incluye a los de conocidos y desconocidos en relaciones de confianza o de poder, con violencia sexual o privación de libertad de la víctima.',
    whenIncorrect: 'Tu opción no es correcta. La definición de femicidio y las circunstancias para penalizarlo no son iguales en los países. En algunos solo se contemplan los crímenes cometidos por la pareja o la expareja de la víctima, ya sea dentro o fuera del matrimonio (femicidio íntimo).  En otros, el delito se extiende no solo a los íntimos, también incluye a los de conocidos y desconocidos en relaciones de confianza o de poder, con violencia sexual o privación de libertad de la víctima.',
    mode: 'singular',
  },
  {
    id: 4,
    text: '¿Cuáles son algunas consecuencias de que cada país tenga una definición distinta de femicidio y de las de las circunstancias para sancionarlo?',
    choices: [
      'No todos los casos que podrían ser femicidios – de acuerdo con la definición del Mecanismo de Seguimiento de la Convención de Belém do Pará - estarían siendo juzgados como tales. Por lo tanto, las estadísticas de estos crímenes no muestran un panorama completo de lo que ocurre en cada país.',
      'Los datos que producen los países sobre femicidios no son comparables entre sí porque cada uno recopila variables distintas, bajo metodologías distintas.',
      'Ambas opciones son correctas.',
    ],
    answer: [2],
    whenCorrect: '¡Acertaste! Ambas opciones son correctas',
    whenIncorrect: 'Tu opción no está del todo completa. Dos de las consecuencias de la falta de uniformidad en la definición y circunstancias del femicidio en la región recaen en las estadísticas:  No todos los que podrían ser femicidios están siendo incluidos en los datos de cada nación. Por lo tanto, no es posible comparar cifras entre países y conocer con mayor precisión la magnitud de estos crímenes por causa de género en la región.',
    mode: 'singular',
  },
  {
    id: 5,
    text: 'Si las estadísticas no son precisas ni comparables entre países, ¿qué alternativas podrían implementarse para tratar de solventar el problema y visibilizar mejor los femicidios?',
    choices: [
      'Los países podrían reformar sus leyes para incluir un concepto armonizado de femicidio, circunstancias para penalizarlo y variables estadísticas uniformes para recopilar datos.',
      'Los países podrían -sin necesidad de modificar sus leyes- implementar un mismo estándar de recopilación de datos con fines estadísticos. Uno fundamentado no en tipificaciones jurídicas, sino en variables de descripción de conductas, hechos y de caracterización de víctima/victimario.',
      'Ambas opciones son correctas.',
    ],
    answer: [2],
    whenCorrect: '¡Acertaste! Ambas opciones son correctas',
    whenIncorrect: 'Tu opción no está del todo completa. Los países tienen ambas alternativas: La de reformar sus leyes para unificar el concepto de femicidio, las circunstancias para penalizarlo y las variables para recopilar estadísticas. O bien, sin necesidad de lo anterior, podrían implementar un mismo estándar de recolección de datos. Lo cual permitiría que las estadísticas sobre femicidios sí sean comparables entre países.',
    mode: 'singular',
  },
];

const trivia = new Trivia({
  questions,
  el: document.getElementById('trivia'),
  mode: 'perception',
});

start.addEventListener('click', () => {
  intro.remove();
  trivia.init();
});

function handleTriviaEnd() {
  trivia.el.remove();
  document.querySelector('.checkout').style.display = 'block';
}

trivia.el.addEventListener('ended', handleTriviaEnd);
