import getElementFromTemplate from '../get-element-from-template';
import replaceContent from '../replace-content';
import levelGenre from './main-level-genre';

const moduleLevelArtist = function () {
  const gameData = {
    time: {
      hours: '02',
      minutes: '00'
    },
    sliderHeader: 'Кто исполняет эту песню?',
    answers: [
      {
        id: 'answer-1',
        value: 'val-1',
        artistName: 'Пелагея'
      },
      {
        id: 'answer-2',
        value: 'val-2',
        artistName: 'Краснознаменная дивизия имени моей бабушки'
      },
      {
        id: 'answer-3',
        value: 'val-3',
        artistName: 'Lorde'
      }
    ]
  };

  const timerBlock = `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
          <circle
            cx="390" cy="390" r="370"
            class="timer-line"
            style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
    
          <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
            <span class="timer-value-mins">${gameData.time.hours}</span><!--
            --><span class="timer-value-dots">:</span><!--
            --><span class="timer-value-secs">${gameData.time.minutes}</span>
          </div>
        </svg>`;

  const sliderHheader = `<h2 class="title main-title">${gameData.sliderHeader}</h2>`;

  let answers = '';

  for (const answer of gameData.answers) {
    answers += `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="${answer.id}" name="answer" value="${answer.value}" />
        <label class="main-answer" for="${answer.id}">
          <img class="main-answer-preview" src="">
          ${answer.artistName}
        </label>
      </div>`;
  }

  const block = getElementFromTemplate(`<section class="main main--level main--level-artist">
      ${timerBlock}
      <div class="main-wrap">
        <div class="main-timer"></div>
        ${sliderHheader}
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${answers}
        </form>
      </div>
    </section>`);

  [].slice.call(block.querySelectorAll('input[name=answer]'))
      .forEach(function (el) {
        el.addEventListener('change', () => {
          replaceContent(levelGenre());
        });
      });

  return block;
};

export default moduleLevelArtist;
