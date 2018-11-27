import { createElement } from './helpers';
import { loadSavedLectures } from './storage';

export function generateImage(imagePath) {
<<<<<<< Updated upstream
    if (!imagePath) {
        return document.createElement('div');
    }

    var imageElement = createElement('img');
    imageElement.className = 'card__thumb';
    imageElement.src = `../../${imagePath}`;
    return imageElement;
=======
  if (!imagePath) {
    return document.createElement('div');
  }

  const imageElement = createElement('img');
  imageElement.className = 'card__thumb';
  imageElement.src = `../${imagePath}`;
  return imageElement;
>>>>>>> Stashed changes
}

export function generateTitle(title, text, slug){
    var container = document.createElement('div');

    var textContainer = createElement('div');
    textContainer.className = 'card__text';

    var link = document.createElement('a');
    link.href = `/fyrirlestur.html?slug=${slug}`;

    var textElement = document.createElement('p');
    textElement.appendChild(document.createTextNode(text.toUpperCase()));

    var titleElement = document.createElement('h2');
    titleElement.appendChild(document.createTextNode(title));

    var check = document.createElement('div');
    check.className = 'card__finished';
    var checkP = createElement('p');
    check.appendChild(checkP);
    
    textContainer.appendChild(textElement);
    textContainer.appendChild(titleElement);
    textContainer.appendChild(link);
    container.appendChild(textContainer);
    container.appendChild(check);

    return container;
}

export function generateQuote(){
    //
}

export function generateText(){
    //
}