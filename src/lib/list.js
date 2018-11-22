import { empty, createElement } from './helpers';
import { generateImage, generateTitle } from './converter';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.url = '../lectures.json';
  }

  loadLectures() {
    return fetch(this.url)
      .then((res) => {
        if(!res.ok) {
          throw new Error('Gat ekki sótt fyrirlestra');
        }
        return res.json();
      });
  }

  renderData(data) {
    data.lectures.map((item) => {
      this.renderItem(item);
    });
  }

  renderItem(item){
    const card = createElement('div');
    card.className = `card ${item.category}`;

    let imageElement = generateImage(item.thumbnail);
    card.appendChild(imageElement);

    const titleElement = generateTitle(item.title, item.category, item.slug);
    titleElement.className = 'card__content'
    card.appendChild(titleElement);

    this.container.appendChild(card);
  }

  load() {
    empty(this.container);
    this.loadLectures()
      .then((data) => this.renderData(data));
  }
}
