import getElementFromTemplate from '../get-element-from-template';
import replaceContent from '../replace-content';
import {nextSlide, addValidAnswer, getValidAnswerID} from '../questions-handler';

export default (data) => {
  const timerBlock = `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
          <circle
            cx="390" cy="390" r="370"
            class="timer-line"
            style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
    
          <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
            <span class="timer-value-mins">${data.time.hours}</span><!--
            --><span class="timer-value-dots">:</span><!--
            --><span class="timer-value-secs">${data.time.minutes}</span>
          </div>
        </svg>`;

  const sliderHheader = `<h2 class="title main-title">${data.sliderHeader}</h2>`;

  let answers = '';

  for (const answer of data.answers) {
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

  replaceContent(block);

  [].slice.call(block.querySelectorAll('input[name=answer]'))
      .forEach(function (el) {
        el.addEventListener('change', () => {
          if (el.id === getValidAnswerID()) {
            addValidAnswer();
          }
          nextSlide();
        });
      });

  return block;
};
