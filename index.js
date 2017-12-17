

var deal_game = function(){


    var players = [
        {name:"Charles",mano:false,cards:[],team:1,},
        {name:"Alejandra",mano:false,cards:[],team:2,},
        {name:"Andrés",mano:false,cards:[],team:1,},
        {name:"Amarilis",mano:false,cards:[],team:2,}
    ]
}

//test scenearios
var deck = require('../lib/deck')
var d = deck.new_game()
var str3 = [new d.card(1,3),new d.card(1,4),new d.card(1,5)]
var str1 = [new d.card(1,1),new d.card(1,3),new d.card(1,4)]

var strrepeat = [new d.card(1,1),new d.card(1,1),new d.card(1,4),new d.card(1,4),new card(4, 14)]

var strjoker = [new d.card(1,5),new d.card(1,2),new d.card(1,7)]



// var mask = 
// ,new d.card()