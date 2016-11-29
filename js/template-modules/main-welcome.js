import getElementFromTemplate from '../get-element-from-template';
import replaceContent from '../replace-content';
import levelArtist from './main-level-artist';

const moduleWelcome = function () {
  const welcomeData = {
    gameName: 'Угадай мелодию',
    startGameButton: 'Начать игру',
    sliderHeader: 'Правила игры',
    rules: 'Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> На&nbsp;каждую мелодию всего 3 варианта ответа.<br>Удачи!'
  };

  const gameHeader = `<section class="logo" title="${welcomeData.gameName}">
        <h1>${welcomeData.gameName}</h1></section>`;

  const gameButton =
      `<button class="main-play">${welcomeData.startGameButton}</button>`;

  const slideHeader =
      `<h2 class="title main-title">${welcomeData.sliderHeader}</h2>`;

  const gameRules = `<p class="text main-text">${welcomeData.rules}</p>`;

  const block = getElementFromTemplate(`<section class="main main--welcome">
          ${gameHeader}
          ${gameButton}
          ${slideHeader}
          ${gameRules}
        </section>`);

  block.querySelector('.main-play').addEventListener('click', () => {
    replaceContent(levelArtist());
  });

  return block;
};

export default moduleWelcome;
