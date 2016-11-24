import getElementFromTemplate from '../get-element-from-template';
import replaceContent from '../replace-content';
import welcome from './main-welcome';


const moduleResult = function () {
  const block = getElementFromTemplate(`<section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  
      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
      <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`);


  block.querySelector('.main-replay').addEventListener('click', () => {
    replaceContent(welcome());
  });

  return block;
};

export default moduleResult;
