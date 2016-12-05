import replaceContent from './replace-content';
import moduleWelcome from './template-modules/main-welcome';
import './template-modules/main-level-genre';
import './template-modules/main-result';
import {dataWelcome} from './data';

replaceContent(moduleWelcome(dataWelcome));
