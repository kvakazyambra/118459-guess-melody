import getElementFromTemplate from '../get-element-from-template';
import replaceContent from '../replace-content';
import {nextSlide} from '../questions-handler';

export default (data) => {
  const gameHeader = `<section class="logo" title="${data.gameName}">
        <h1>${data.gameName}</h1></section>`;

  const gameButton =
      `<button class="main-play">${data.startGameButton}</button>`;

  const slideHeader =
      `<h2 class="title main-title">${data.sliderHeader}</h2>`;

  const gameRules = `<p class="text main-text">${data.rules}</p>`;

  const block = getElementFromTemplate(`<section class="main main--welcome">
          ${gameHeader}
          ${gameButton}
          ${slideHeader}
          ${gameRules}
        </section>`);

  block.querySelector('.main-play').addEventListener('click', () => {
    replaceContent(nextSlide());
  });

  return block;
};
