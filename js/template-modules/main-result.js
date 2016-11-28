import getElementFromTemplate from '../get-element-from-template';
import replaceContent from '../replace-content';
import welcome from './main-welcome';


const moduleResult = function () {
  const gameData = {
    gameName: 'Угадай мелодию',
    sliderHeader: 'Вы настоящий меломан!',
    gameResults: {
      result: 'За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии',
      stats: 'Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков'
    },
    submitControlLabel: 'Сыграть ещё раз'
  };

  const header = `<section class="logo" title="${gameData.gameName}"><h1>${gameData.gameName}</h1></section>`;

  const sliderHeader = `<h2 class="title">${gameData.sliderHeader}</h2>`;

  const gameResults = `<div class="main-stat">${gameData.gameResults.result}</div>
        <span class="main-comparison">${gameData.gameResults.stats}</span>`;

  const submitControl = `<span role="button" tabindex="0" class="main-replay">${gameData.submitControlLabel}</span>`;

  const block = getElementFromTemplate(`<section class="main main--result">
      ${header}
      ${sliderHeader}
      ${gameResults}
      ${submitControl}
    </section>`);


  block.querySelector('.main-replay').addEventListener('click', () => {
    replaceContent(welcome());
  });

  return block;
};

export default moduleResult;
