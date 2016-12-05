import replaceContent from './replace-content';
import artistSlide from './template-modules/main-level-artist';
import genreSlide from './template-modules/main-level-genre';
import resultsSlide from './template-modules/main-result';
import {questions, dataResults} from './data';

let currentQuestion = -1;
let startTime = 0;
let validAnswers = 0;

const showResults = () => {
  resultsSlide(dataResults);

  clearTimeout(startTime);
  currentQuestion = -1;
  validAnswers = 0;
};

startTime = setTimeout(() => {
  showResults();
}, 120000);

const getValidAnswerID = () => {
  const questionType = questions[currentQuestion].type;
  let answers = [];

  questions[currentQuestion].answers.forEach((answer) => {
    if (questionType === 'artist') {
      if (answer.valid) {
        answers = answer.id;
        return;
      }
    } else if (questionType === 'genre') {
      if (answer.valid) {
        answers.push(answer.id);
      }
    }
  });

  return answers;
};

const addValidAnswer = () => {
  validAnswers++;
};

const nextSlide = () => {
  if (++currentQuestion === questions.length) {
    clearTimeout(startTime);
    showResults();
    return;
  }

  switch (questions[currentQuestion].type) {
    case 'artist':
      artistSlide(questions[currentQuestion]);
      break;
    case 'genre':
      replaceContent(genreSlide(questions[currentQuestion]));
      break;
    default:
      break;
  }
};

export {nextSlide, addValidAnswer, getValidAnswerID, validAnswers};
