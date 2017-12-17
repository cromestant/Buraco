var deck = require('../lib/deck')


function player(name) {
    this.name = name
    this.deal = false
    this.cards = []
    let toggle_deal = () => { this.deal = !this.deal }
    return {
        name: this.name,
        deal: this.deal,
        toggle_deal: toggle_deal,
        cards: this.cards
    }
}

function cluster(cards) {
    /*
    Type: 0 seguidilla
          1 trio
          2 trio de joker
    */

    if (cards.length < 3)
        return false
    this.type = 0
    this.sucia = false
    this.cards = []
    
    let numbers = only_num(cards)
    let jokers = filter_joker(cards)
    let as = fitler_as(cards)

/*
    Find duplicates in original
*/
    const counter = card_arr => 
        card_arr.reduce((acc,card) =>
            Object.assign(acc,{[card.number]:(acc[card.number]||0)+1}),{})
    const duplicates = dict => 
            Object.keys(dict).filter((a) => dict[a] > 1)

    let count = counter(cards)
    let repeats = duplicates(count)
    if (repeats.length == 1){
        //14 is jokers, one repeat and jokers means joker trio
        if(typeof repeats['14']!= 'undefined'){
            this.type = 2
        }else {
            this.type = 1
        }
    }else {
        //more than one repeat is error!
        return false
    }

/*
   /End Find duplicates in original
*/


    if (jokers.length != 0) {
        /*
            si hay un no hay jokers es limpia
        */
        this.sucia = true;
    }

    /*
        no hay cluster sin por lo menos 3 cartas.
    */
    var valid_add = function(cards) {
        let numbers = only_num(cards)
        let jokers = filter_joker(cards)
        let as = fitler_as(cards)

        if (this.type == 2) {
            /*
                seguidilla de monos solo es de monos.
            */
            return (cards.length == jokers.length)
        }

        if (this.type == 0) {
        /*
            Each card has a binary mask ( 2^ n)
            you OR the cards and they should be all ones 
            while(true) removes right 0 s if they exist.
        */

            mask = cards.reduce(mask_reducer, 0)
            while (true) {
                if (mask % 2 == 0) {
                    mask = mask >> 1
                } else break
            }
            let spaces = (mask.toString(2).match(/0/g) || []).length
            if (spaces > 1) {
                return false
            }
            if ((spaces == 1) && (jokers.length == 1)) {
                return true
            }
        }


    }
}

var only_num = function(a) {
    return a.filter(c => {
        if (!(c.special || c.joker))
            return c;
    });

}
var filter_joker = function(a) {
    return a.filter(c => {
        if (c.joker)
            return c;
    });

}
var filter_as = function(a) {
    return a.filter(c => {
        if (c.special && c.number == 1)
            return c;
    });

}
var mask_reducer = (accumulator, currentValue) => accumulator | currentValue.mask;

function game() {

    var mazo = deck.new_game();
    mazo.cut();
    let teams = {
        1: {
            players: [
                new player("charles"),
                new player("Andrés"),
            ],
            points: 0,
            buraco: false,
            table: []
        },
        2: {
            players: [
                new player("Alejandra"),
                new player("Amarilis"),
            ],
            points: 0,
            buraco: false,
            table: []
        }
    }
}

/*
TODO
crear clase de elemento de mesa (trio, seguidillas, sucio, metodo de agregar carta, validación de cierre)
*/