import { createElement } from './helpers';

export function generateImage(imagePath) {
    if (!imagePath) {
        return document.createElement('div');
    }

    const imageElement = createElement('img');
    imageElement.src = `../../${imagePath}`;
    return imageElement;
}

export function generateTitle(title, text, slug){
    const container = document.createElement('div');

    const textContainer = createElement('div');
    textContainer.className = 'card__text';

    const link = document.createElement('a');
    link.href = `/fyrirlestur.html?slug=${slug}`;

    const textElement = document.createElement('p');
    textElement.appendChild(document.createTextNode(text.toUpperCase()));

    const titleElement = document.createElement('h2');
    titleElement.appendChild(document.createTextNode(title));

    const check = document.createElement('div');
    check.className = 'card__finished';
    check.appendChild(document.createElement('p'));
    
    link.appendChild(textElement);
    link.appendChild(titleElement);
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