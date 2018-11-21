for (let button of document.querySelectorAll('.buttons__button')) {
    button.addEventListener('click', active_hide);
}

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
    card.className = "card card-hidden";
    

    console.log('Eikkaaaa');
}

function buttonHandler() {

}