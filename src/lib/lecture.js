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

    renderItem(item) {
        const page = document.querySelector('.page');
        const pageContainer = createElement('div');
        pageContainer.className = 'page__content';
        var counter = item.content.length;

        var header = document.querySelector('.header');
        if (item.image != undefined) {
            header.style.backgroundImage = `url('../../${item.image}')`;
        }

        var headerContent = document.querySelector('.header__content');
        headerContent.appendChild(createElement('p', item.category));
        headerContent.appendChild(createElement('h2', item.title));

        for (var i = 0; i<counter; i++) {
            var type = item.content[i];
            var content = contentCreator(type);
            pageContainer.appendChild(content);
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