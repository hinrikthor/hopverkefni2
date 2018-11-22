import { createElement } from './helpers';

export function generateImage(imagePath) {
    if (!imagePath) {
        return createElement('div');
    }

    const imageElement = createElement('img');
    imageElement.src = `../../${imagePath}`;
    return imageElement;
}

export function generateTitle(title, text, slug){
    const container = createElement('div');

    const textContainer = createElement('div');
    textContainer.className = 'card__text';

    const link = createElement('a');
    link.href = `/fyrirlestur.html?slug=${slug}`;

    const textElement = createElement('p', text.toUpperCase());

    const titleElement = createElement('h2', title);

    const check = createElement('div');
    check.className = 'card__finished';
    check.appendChild(createElement('p'));
    
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