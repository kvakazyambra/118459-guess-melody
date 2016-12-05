import getElementFromTemplate from '../get-element-from-template';
import replaceContent from '../replace-content';
import {nextSlide, addValidAnswer, getValidAnswerID} from '../questions-handler';

export default (data) => {

  const header = `<h2 class="title">${data.sliderHeader}</h2>`;

  let answers = '';

  for (const answer of data.answers) {
    answers += `<div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="${answer.value}" id="${answer.id}">
        <label class="genre-answer-check" for="${answer.id}"></label>
      </div>`;
  }

  const submitControlTpl = `<button class="genre-answer-send" type="submit">${data.submitControlLabel}</button>`;

  const block = getElementFromTemplate(`<section class="main main--level main--level-genre">
      ${header}
      <form class="genre">
        ${answers}
        ${submitControlTpl}
      </form>
    </section>`);

  replaceContent(block);

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

    let answwers = [];

    for (const it of genreControls) {
      if (it.checked) {
        answwers.push(it.id);
      }
    }

    if (isAnswerChecked()) {
      if (answwers.sort().join() === getValidAnswerID().sort().join()) {
        addValidAnswer();
      }

      nextSlide();
    }
  });

  toggleSubmitControl();

  return block;
};
