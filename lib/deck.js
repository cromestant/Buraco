function card(suit, number) {
    this.suit = suit
    this.number = number 
    this.special = false;
    this.joker = false;
    this.mask = (number % 14 == 0)?0:(Math.pow(2,number))
    if(number == 1){
        this.special=true;
    }
    switch (number) {
        case 11:
            this.number_s = "Jota"
            break;
        case 12:
            this.number_s = "Reina"
            break;
        case 13:
            this.number_s = "Rey"
            break;
        case 2:
        case 14:
            this.joker = true;
            this.number_s = "Joker"
            this.special=true;
            break;
        default:
            this.number_s = "" + number
            break;
    }

    switch (suit) {
        case 0:
            this.suit_s = "trebol"
            break;
        case 1:
            this.suit_s = "pica"
            break;
        case 2:
            this.suit_s = "corazon"
            break;
        case 3:
            this.suit_s = "diamante"
            break;
        case 4:
            this.suit_s = "joker"
            break;
    }
}

var shuffle = function() {
    let cut_flag = false;
    let deck = [];
    let aux_deck = [];
    let mono_holder = []; //pa aguantar los monos cuando se pica y cuando se agarra buraco
    let buracos = [[],[]]
    let mazos = [[],[],[],[]]
    for (var i = 1; i <= 13; i++) {
        deck.push(new card(0, i));
        deck.push(new card(1, i));
        deck.push(new card(2, i));
        deck.push(new card(3, i));
//dos mazos
        deck.push(new card(0, i));
        deck.push(new card(1, i));
        deck.push(new card(2, i));
        deck.push(new card(3, i));
    }

    deck.push(new card(4, 14));
    deck.push(new card(4, 14));
    deck.push(new card(4, 14));
    deck.push(new card(4, 14));
    deck.push(new card(4, 14));
    deck.push(new card(4, 14));

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(deck);

    function get_random_int(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min )) + min; //The maximum is inclusive and the minimum is inclusive 
    }
    var cut_deck = function(){
        if (cut_flag)
            return;
        cut_flag= true;
        let position = get_random_int(26,deck.length)
        aux_deck = deck.splice(0,position)
        let tmp = aux_deck.splice(-4)
        for (let i=3; i>0;i--){
            debugger;
            if (tmp[i].joker){
                mono_holder.push(tmp.splice(i,1)[0])
            }
        }
        aux_deck = aux_deck.concat(tmp)
        for(let i=0;i<11;i++){
            buracos[0].push(aux_deck.splice(0,1)[0])
            buracos[1].push(aux_deck.splice(0,1)[0])
        }
        console.log(deck.length)
        console.dir(aux_deck)
        console.log(aux_deck.length)
        deck = deck.concat(aux_deck)
        aux_deck = []
    }
    var re_insert = function(card) {
        deck.splice(get_random_int(),0,card);
    }
    var draw = function(){
        if (deck.length == 0)
            return false
        return deck.splice(0,1)[0]
    }
    var remain = function(){
        return deck.length
    }

    return {
        deck : deck,
        re_insert: re_insert,
        draw:draw,
        remain:remain,
        cut:cut_deck,
        monos:mono_holder,
        buracos:buracos,
        card:card
    }
}

// var deck = {
//     new_game: null,
//     cut: null,
//     draw: null,
//     re_insert: null
// };

/*
TODO 
see where to put the cut, shuffle and deal 
*/

module.exports = {new_game:shuffle}