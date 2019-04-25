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
/*
TODO
verificar si el as tiene su 3 o rey correspondiente, si no, verificar que tiene un 4 o reina con un mono. en este segundo caso no
no puede haber huecos en la mascara
*/


function cluster(cards) {
    /*
    Type: 0 seguidilla
          1 trio
          2 trio de joker
    */
    this.type = 0
    this.sucia = false
    this.cards = []
    var valid_add = (function(_self) {
        var self = _self
        return function(cards) {
            let numbers = only_num(cards)
            let jokers = filter_joker(cards)
            let as = filter_as(cards)
            let count = counter(cards)

            if (self.type == 2) {
                /*
                    seguidilla de monos solo es de monos.
                */
                return (cards.length == jokers.length)
            }

            if ((self.type == 0)) {
                /*
                    Each card has a binary mask ( 2^ n)
                    you OR the cards and they should be all ones 
                    while(true) removes right 0 s if they exist.
                */

                let mask = numbers.reduce(mask_reducer, 0)
                while (true) {
                    if (mask % 2 == 0) {
                        mask = mask >> 1
                    } else break
                }
                let spaces = (mask.toString(2).match(/0/g) || []).length
                if (spaces > 1) {
                    return false
                }
                // if((as.length == 1) && (three_or_king(numbers).length == 0)){
                //     return false;
                // }

                if (((spaces == 1) && (jokers.length == 1)) || ((spaces == 0) && (jokers.length <= 1))) {
                    return true
                }
            }
        }
    })(this)
    if (cards.length < 3)
        return false
    /*
        no hay cluster sin por lo menos 3 cartas.
    */



    let numbers = only_num(cards)
    let jokers = filter_joker(cards)
    let as = filter_as(cards)
    /*
        Find duplicates in original
    */
    const counter = card_arr =>
        card_arr.reduce((acc, card) =>
            Object.assign(acc, {
                [card.number]: (acc[card.number] || 0) + 1
            }), {})

    const duplicates = dict =>
        Object.keys(dict).filter((a) => dict[a] > 1)

    const diff_suits = card_arr =>
        card_arr.reduce((acc, card) =>
            Object.assign(acc, {
                [card.suit]: (acc[card.suit] || 0) + 1
            }), {})
    //const find_num = (haystack,needles) => haystack.filter(card => card.number == 3 || card.number == 13)

    let suit_list = diff_suits(numbers)
    let count = counter(cards)
    let repeats = duplicates(count)
    if (repeats.length == 1) {
        //14 is jokers, one repeat and jokers means joker trio
        if (typeof repeats['14'] != 'undefined') {
            this.type = 2
        } else {
            this.type = 1
            // if()
            // this.cards = cards
        }
    } else if (repeats.length != 0) {
        //more than one repeat is error!
        return false
    }

    /*
       /End Find duplicates in original
    */
    if (Object.keys(suit_list).length > 1) {
        return false;
    }
    if (jokers.length != 0) {
        /*
            si hay un no hay jokers es limpia
        */
        this.sucia = true;
    }
    if ((this.type == 0) && valid_add(cards)) {
        this.cards = cards
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

module.exports = { cluster: cluster }
/*
TODO
crear clase de elemento de mesa (trio, seguidillas, sucio, metodo de agregar carta, validación de cierre)
*/