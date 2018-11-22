for (let button of document.querySelectorAll('.buttons__button')) {
    button.addEventListener('click', active_hide);
}

const lectures = './lectures.json';

function active_hide(e) {

    var value = e.target.innerText;
    console.log(value);
    
    var cards = document.getElementsByClassName('card');
    
    for (var i = 0; i < cards.length; i++) {
        let card = cards[i];
        hideCards(card, value);
    }

}

function hideCards(e, value) {
    var card = e;
    var elephant = document.getElementsByName('p');

    card.className = "card card-hidden";
    

    console.log('Eikkaaaa');
}

const page = document.getElementsByClassName('page');
const cards = page.getElementsByClassName('page__cards');

function createCard(tag, textV, thumb) {
    var card = document.createElement('div');
    card.className('card')

    var cardThumb = document.createElement('div');
    var thumbImg = document.createElement('img');
    thumbImg.src = thumb;

    var cardContent = document.createElement('div');
    cardContent.className('card__content');
    var cardText = document.createElement('div');
    cardText.className('card__text');

    var p = document.createElement('p');
    p.appendChild(document.createTextNode(tag))
    var h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(textV));
    
    var check = document.createElement('div');
    check.className('card__finished');

    var cP = document.createElement('p');
    cP.appendChild(document.createTextNode('&#10004'));

    check.appendChild(cP);

    cardText.appendChild(p);
    cardText.appendChild(h2);
    cardContent.appendChild(cardText);
    cardContent.appendChild(check);

    card.appendChild(cardThumb);
    card.appendChild(cardContent);
}

function el(name, ...children) {
    const element = document.createElement(name);

    for (let child of children) { /* eslint-disable-line */
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    }

    return element;
  }

    function cardCreator() {
        const card = el(
            'div', el('div', img), 
            el('div', el('p', tag), 
            el('h2', text), 
            el('div', el('p', '$#10004')))
            );
    }