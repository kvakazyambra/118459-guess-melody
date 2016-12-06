import getElementFromTemplate from '../get-element-from-template';
import replaceContent from '../replace-content';
import moduleWelcome from './main-welcome';
import {validAnswers} from '../questions-handler';
import {dataWelcome} from '../data';


export default (data) => {
  const header = `<section class="logo" title="${data.gameName}"><h1>${data.gameName}</h1></section>`;

  const sliderHeader = `<h2 class="title">${data.sliderHeader}</h2>`;

  const gameResults = `<div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали ${validAnswers}&nbsp;мелодии</div>
        <span class="main-comparison">${data.gameResults.stats}</span>`;

  const submitControl = `<span role="button" tabindex="0" class="main-replay">${data.submitControlLabel}</span>`;

  const block = getElementFromTemplate(`<section class="main main--result">
        ${header}
        ${sliderHeader}
        ${gameResults}
        ${submitControl}
      </section>`);

  replaceContent(block);

  block.querySelector('.main-replay').addEventListener('click', () => {
    replaceContent(moduleWelcome(dataWelcome));
  });

  return block;
};
