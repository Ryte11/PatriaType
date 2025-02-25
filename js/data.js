const gameModes = [
  {
    id: 'trivia',
    title: 'Trivia',
    description: 'Pon a prueba tu conocimiento sobre los patriotas dominicanos',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=600&fit=crop'
  },
  {
    id: 'characters',
    title: 'Personajes',
    description: 'Aprende sobre los héroes de nuestra patria',
    image: './img/sanchez_francisco.jpg'
  },
  {
    id: 'hymns',
    title: 'Himnos',
    description: 'Practica los himnos más importantes de la República Dominicana',
    image: './img/himno.jpg'
  }
];

const patriots = [
  {
    id: 1,
    name: "Juan Pablo Duarte",
    image: "./img/duarte.jpg",
    quotes: [
      "¡La República Dominicana será libre e independiente o se hunde la isla!",
      "En la unión está la fuerza y en la desunión la muerte.",
      "Ser justos, lo primero, si queremos ser felices.",
      "La nación dominicana será libre e independiente o moriremos todos por ella.",
      "Es tiempo ya de que salgamos del estado de postración en que yacemos.",
      "Nuestra patria debe ser libre sin condición o la isla se hunde en el mar.",
      "Mientras no tengamos patria libre, cada dominicano debe considerarse en un estado permanente de guerra.",
      "Que los dominicanos aprendan a ser libres a través de la educación."
    ]
  },
  {
    id: 2,
    name: "Francisco del Rosario Sánchez",
    image: "./img/sanchez_francisco.jpg",
    quotes: [
      "La patria espera de sus hijos el sacrificio supremo.",
      "¡Dios, Patria y Libertad!",
      "La independencia no se pide, se toma.",
      "Mi sangre es el precio de la libertad dominicana.",
      "Morir por la patria no es sacrificio, es honor.",
      "La patria será independiente o pereceré por ella.",
      "Prefiero la muerte antes que la esclavitud de mi país.",
      "El amor a la patria es el único que puede salvarnos."
    ]
  },
  {
    id: 3,
    name: "Matías Ramón Mella",
    image: "./img/Ramon_Matias_Mella.jpg",
    quotes: [
      "El trabuco de Mella fue la voz de la libertad.",
      "La patria o la muerte.",
      "Por la independencia hasta el último aliento.",
      "Mi vida es de la patria, disponga de ella.",
      "La libertad se conquista con valor y decisión.",
      "El disparo que atronó en la Puerta de la Misericordia fue la señal de nuestra independencia.",
      "Si es preciso morir por la patria, que así sea.",
      "La libertad exige sacrificios que estamos dispuestos a cumplir."
    ]
  }
];

const hymns = [
  {
    id: 1,
    title: "Himno Nacional",
    lyrics: "Quisqueyanos valientes, alcemos\nNuestro canto con viva emoción,\nY del mundo a la faz ostentemos\nNuestro invicto glorioso pendón.\n\nSalve el pueblo que, intrépido y fuerte,\nA la guerra a morir se lanzó,\nCuando en bélico reto de muerte\nSus cadenas de esclavo rompió."
  },
  {
    id: 2,
    title: "Himno a Duarte",
    lyrics: "Gloria a ti, padre de la patria amada,\nFundador de la dominicana grey;\nTu memoria vivirá siempre sagrada,\nComo emblema de amor, virtud y ley.\n\nFue tu espíritu noble y generoso,\nY tu mente, la luz de la verdad;\nY por darnos un suelo venturoso,\nTu existencia inmolaste sin dudar."
  },
  {
    id: 3,
    title: "Himno a la Bandera",
    lyrics: "Bandera dominicana,\nSimiente de libertad,\nSímbolo de la nación,\nTe rendimos homenaje con lealtad.\n\nTus colores rojo y azul,\nTu cruz blanca en el centro,\nNos recuerdan el sacrificio\nDe los que lucharon por nuestra independencia."
  },
  {
    id: 4,
    title: "Himno de la Restauración",
    lyrics: "Dominicanos, ya la patria os convoca,\nAcudid prestos a la voz del deber;\nQue otra vez gimen, con angustia no poca,\nLos sacros manes de los héroes de ayer.\n\nRestaurado hemos ya su honor mancillado,\nLibre es la patria por segunda ocasión;\nY los que osaron profanar lo sagrado,\nSepan que ahora más altiva es la nación."
  }
];

const triviaQuestions = [
  {
    quote: "¡La República Dominicana será libre e independiente o se hunde la isla!",
    options: [
      "Juan Pablo Duarte",
      "Francisco del Rosario Sánchez",
      "Matías Ramón Mella",
      "Gregorio Luperón"
    ],
    correct: 0
  },
  {
    quote: "La patria espera de sus hijos el sacrificio supremo.",
    options: [
      "Juan Pablo Duarte",
      "Francisco del Rosario Sánchez",
      "Matías Ramón Mella",
      "Gregorio Luperón"
    ],
    correct: 1
  }
];