import { createElement } from './helpers.js';

function youtubeCreator(item) {
    let div = createElement('div')
    let link = createElement('a');
    link.setAttribute('href', item.data);

    div.appendChild(link);
    return div;
}

function textCreator(item) {

}

function quoteCreator(item) {

}

function imageCreator(item) {

}

function headingCreator(item) {

}

function listCreator(item) {

}

function codeCreator(item) {

}

export function contentCreator(item) {
    if (item.type == 'youtube') {
        var div = youtubeCreator(item);
    } else if (item.type == 'text') {
        var div = textCreator(item);
    } else if (item.type == 'quote') {
        var div = quoteCreator(item);
    }
    return div;
}