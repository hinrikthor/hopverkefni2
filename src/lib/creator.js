import { createElement } from './helpers.js';

function youtubeCreator(item) {
    let div = createElement('div')
    div.className = 'content__youtube';
    let link = createElement('a');
    link.setAttribute('href', item.data);

    div.appendChild(link);
    return div;
}

function textCreator(item) {
    let div = createElement('div');
    div.className = 'content__text';
    div.appendChild(createElement('p', item.data));

    return div;
}

function quoteCreator(item) {
    let div = createElement('div');
    div.className = 'content__quote';
    div.appendChild(createElement('p', item.data));

    return div;
}

function imageCreator(item) {
    let div = createElement('div');
    div.className = 'content__image';
    let image = createElement('img');
    image.setAttribute('src', `../../${item.data}`);
    div.appendChild(image);

    return div;
}

function headingCreator(item) {
    let div = createElement('div');
    div.className = 'content__heading';
    div.appendChild(createElement('h2', item.data));

    return div;
}

function listCreator(item) {
    let div = createElement('div');
    div.className = 'content__list';
    div.appendChild(createElement('li', item.data));
}

function codeCreator(item) {
    let div = createElement('div');
    div.className = 'content__code';
}

export function contentCreator(item) {
    if (item.type == 'youtube') {
        var div = youtubeCreator(item);
    } else if (item.type == 'text') {
        var div = textCreator(item);
    } else if (item.type == 'quote') {
        var div = quoteCreator(item);
    } else if (item.type == 'image') {
        var div = imageCreator(item);
    } else if (item.type = 'heading') {
        var div = headingCreator(item);
    } else if (item.type = 'list') {
        var div = listCreator(item);
    } else if (item.type = 'code') {
        var div = codeCreator(item);
    }
    return div;
}