const dataWelcome = {
  gameName: 'Угадай мелодию',
  startGameButton: 'Начать игру',
  sliderHeader: 'Правила игры',
  rules: 'Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> На&nbsp;каждую мелодию всего 3 варианта ответа.<br>Удачи!'
};

const questions = [
  {
    type: 'artist',
    time: {
      hours: '02',
      minutes: '00'
    },
    sliderHeader: 'Кто исполняет эту песню?',
    answers: [
      {
        id: 'answer-1',
        value: 'val-1',
        artistName: 'Пелагея',
        valid: false
      },
      {
        id: 'answer-2',
        value: 'val-2',
        artistName: 'Краснознаменная дивизия имени моей бабушки',
        valid: true
      },
      {
        id: 'answer-3',
        value: 'val-3',
        artistName: 'Lorde',
        valid: false
      }
    ]
  },
  {
    type: 'genre',
    sliderHeader: 'Выберите инди-рок треки',
    answers: [
      {
        id: 'a-1',
        value: 'answer-1',
        valid: true
      },
      {
        id: 'a-2',
        value: 'answer-2',
        valid: false
      },
      {
        id: 'a-3',
        value: 'answer-3',
        valid: false
      },
      {
        id: 'a-4',
        value: 'answer-4',
        valid: true
      }
    ],
    submitControlLabel: 'Ответить'
  },
  {
    type: 'artist',
    time: {
      hours: '02',
      minutes: '00'
    },
    sliderHeader: 'Кто НЕ исполняет эту песню?',
    answers: [
      {
        id: 'answer-1',
        value: 'val-1',
        artistName: 'Кончита Вюрст',
        valid: false
      },
      {
        id: 'answer-2',
        value: 'val-2',
        artistName: '2Unlimited',
        valid: false
      },
      {
        id: 'answer-3',
        value: 'val-3',
        artistName: 'Балаган Limited',
        valid: true
      }
    ]
  },
  {
    type: 'artist',
    time: {
      hours: '02',
      minutes: '00'
    },
    sliderHeader: 'Это ремейк песни какой группы?',
    answers: [
      {
        id: 'answer-1',
        value: 'val-1',
        artistName: 'ABBA',
        valid: false
      },
      {
        id: 'answer-2',
        value: 'val-2',
        artistName: 'Ricci & Poveri',
        valid: false
      },
      {
        id: 'answer-3',
        value: 'val-3',
        artistName: 'Matia Bazar',
        valid: true
      }
    ]
  },
  {
    type: 'genre',
    sliderHeader: 'Какие песни побеждали на Евровидении?',
    answers: [
      {
        id: 'a-1',
        value: 'answer-1',
        valid: false
      },
      {
        id: 'a-2',
        value: 'answer-2',
        valid: true
      },
      {
        id: 'a-3',
        value: 'answer-3',
        valid: true
      },
      {
        id: 'a-4',
        value: 'answer-4',
        valid: false
      }
    ],
    submitControlLabel: 'Ответить'
  }
];

const dataResults = {
  gameName: 'Угадай мелодию',
  sliderHeader: 'Вы настоящий меломан!',
  gameResults: {
    stats: 'Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков'
  },
  submitControlLabel: 'Сыграть ещё раз'
};

export {dataWelcome, questions, dataResults};
