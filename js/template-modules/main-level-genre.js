import getElementFromTemplate from '../get-element-from-template';
import replaceContent from '../replace-content';
import mainResult from './main-result';

const moduleLevelGenre = function () {
  const gameData = {
    sliderHeader: 'Выберите инди-рок треки',
    answers: [
      {
        id: 'a-1',
        value: 'answer-1'
      },
      {
        id: 'a-2',
        value: 'answer-2'
      },
      {
        id: 'a-3',
        value: 'answer-3'
      },
      {
        id: 'a-4',
        value: 'answer-4'
      }
    ],
    submitControlLabel: 'Ответить'
  };

  const header = `<h2 class="title">${gameData.sliderHeader}</h2>`;

  let answers = '';

  for (const answer of gameData.answers) {
    answers += `<div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="${answer.value}" id="${answer.id}">
        <label class="genre-answer-check" for="${answer.id}"></label>
      </div>`;
  }

  const submitControlTpl = `<button class="genre-answer-send" type="submit">${gameData.submitControlLabel}</button>`;

  const block = getElementFromTemplate(`<section class="main main--level main--level-genre">
      ${header}
      <form class="genre">
        ${answers}
        ${submitControlTpl}
      </form>
    </section>`);

  const genreForm = block.querySelector('.genre');
  const genreControls = [].slice.call(genreForm.querySelectorAll('input[name=answer]'));
  const submitControl = genreForm.querySelector('.genre-answer-send');

  const isAnswerChecked = () => {
    let isChecked = false;

    genreControls.forEach((el) => {
      if (el.checked) {
        isChecked = true;
        return;
      }
    });

    return isChecked;
  };

  const toggleSubmitControl = () => {
    submitControl.disabled = !isAnswerChecked();
  };


  genreControls.forEach((el) => {
    el.addEventListener('input', () => {
      toggleSubmitControl();
    });
  });

  genreForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (isAnswerChecked()) {
      replaceContent(mainResult());
    }
  });

  toggleSubmitControl();

  return block;
};

export default moduleLevelGenre;
