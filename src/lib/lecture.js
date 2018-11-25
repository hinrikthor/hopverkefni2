import { empty, createElement } from './helpers';
import { generateImage, generateTitle } from './converter';
import { contentCreator } from './creator';

export default class Lecture {
    constructor() {
        this.container = document.querySelector('.lecture-page');
        this.url = '../lectures.json';
    }


    loadLecture(slug) {
        return fetch(this.url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Gat ekki sótt fyrirlestra');
                }
                return res.json();
            })
            .then((data) => {
                const found = data.lectures.find(i => i.slug === slug);
                if (!found) {
                    throw new Error('Fyrirlestur fannst ekki');
                }
                return found;
            });
    }

    renderData(data) {
        console.log(data);
        this.renderItem(data);
    }

    UrlExists(url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        if (http.status != 404) {
            return true;
        } else {
            return false;
        }
    }

    renderItem(item) {
        const page = document.querySelector('.page');
        const pageContainer = createElement('div');
        pageContainer.className = 'page__content';
        var counter = item.content.length;

        var header = document.querySelector('.header');
        var imgUrl = `../../${item.image}`;
        if (imgUrl.status != 404)

        if (this.UrlExists(imgUrl)) {
        header.style.backgroundImage = `url('../../${item.image}')`;
        }


        for (var i = 0; i<counter; i++) {
            var type = item.content[i];
            var content = contentCreator(type);
            pageContainer.appendChild(content);
            console.log(content);
        }

        page.appendChild(pageContainer);

    }

    load(){
        const qs = new URLSearchParams(window.location.search);
        const slug = qs.get('slug');

        this.loadLecture(slug)
            .then(data => this.renderData(data));
    }
}