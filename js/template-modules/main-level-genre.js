import getElementFromTemplate from '../get-element-from-template';
import replaceContent from '../replace-content';
import mainResult from './main-result';

const moduleLevelGenre = function () {
  const block = getElementFromTemplate(`<section class="main main--level main--level-genre">
      <h2 class="title">Выберите инди-рок треки</h2>
      <form class="genre">
        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-1" id="a-1">
          <label class="genre-answer-check" for="a-1"></label>
        </div>
  
        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2">
          <label class="genre-answer-check" for="a-2"></label>
        </div>
  
        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-1" id="a-3">
          <label class="genre-answer-check" for="a-3"></label>
        </div>
  
        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-1" id="a-4">
          <label class="genre-answer-check" for="a-4"></label>
        </div>
  
        <button class="genre-answer-send" type="submit">Ответить</button>
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
