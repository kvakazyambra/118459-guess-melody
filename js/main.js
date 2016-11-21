import moduleWelcome from './template-modules/main-welcome';
import moduleLevelArtist from './template-modules/main-level-artist';
import moduleLevelGenre from './template-modules/main-level-genre';
import moduleResult from './template-modules/main-result';

(() => {
  const slides = [
    moduleWelcome,
    moduleLevelArtist,
    moduleLevelGenre,
    moduleResult
  ];

  const slidesAmount = slides.length;

  let current = -1;

  let select = (index) => {
    current = index;
    let mainElement = document.querySelector('.main');
    mainElement.parentNode.replaceChild(slides[index], mainElement);
  };

  document.onkeydown = (evt) => {
    switch (evt.keyCode) {
      case 37:
        evt.preventDefault();
        const tmpCurrent = current - 1;
        current = tmpCurrent >= 0 && tmpCurrent < slidesAmount ?
            tmpCurrent : current;
        break;
      case 39:
        evt.preventDefault();
        current = current + 1 < slidesAmount ? current + 1 : current;
        break;
    }

    select(current);
  };

  select(0);
})();
