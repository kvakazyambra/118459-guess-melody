export default function (content) {
  let mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(content, mainElement);
}
