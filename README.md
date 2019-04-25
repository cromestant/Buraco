**Burraco** 
============
rummy like game, that allows 4 players to play 2 on 2.
two whole decks with four extra jokers.

**Object of the game:**
Play with partner sitting across from you 
In teams you must complete straights and 7 of a kind to earn points.
first team member to discard all of his cards wins the round for the team.
Cards played count as positive points, cards in hand or unplayed (from buracos --wait for it--) count as negative points.
First team to reach 3k points wins.

a straight or 7 of a kind is "closed" if it has 7 cards or more.
"clean" closed means no jokers were used.
"dirty" is when a joker was used.


**The deal:**
Starting player shuffles the cards
The player on his left cuts the deck and keeps the bottom half.
He is entitled to look at the bottom 4 cards of the top half and keep any "monos" or jokers he finds.

Starting player deals each player eleven (11) cards, taking care to skip the player on his left X amount of times (x being 0 to 4 , the amount of monos the player found on the cut). 

Remaining cards from the bottom half of the cut are placed on top of the remaining cards from the deal, and play can start.

Two extra sets of eleven cards are dealt from the bottom half of the cut deck, and are put to the side. the first player of a team to discard all of his cards can take his "burraco". If the last card of the hand is a "mono", that player can show it to all and get his burraco without having to play it.

If the player does not discard a card in order to grab his burraco (plays it or leaves it open) his turn is still in play, he may take all of the cards on the discarded pile or draw another card from the deck.

player on the right of the starting player takes a card from the top of the deck


started up this game to create a game server and then possibly clients (web or smartphone)

cards are dealt using mod 13.
twos are jokers, 
J are jokers

**points**
A's count as 15 points
Jokers (monos) count as 20 points
cards 3 to 7 count as 5
all other count as 10.

Clean closed earns 300 points
dirty earns 200 points.

Grabbing Burraco ( or extra set of cards) earns you 100 points ( not grabbing it gives you -100)





**sample draw:**
shuffled deck:
```python
[30, 27, 21, 8, 1, 'J', 96, 10, 52, 51, 43, 41, 60, 92, 13, 77, 3, 46, 9, 83, 85, 38, 81, 20, 12, 55, 61, 6, 39, 82, 75, 29, 25, 72, 48, 58, 23, 89, 62, 80, 22, 35, 95, 88, 91, 63, 99, 24, 79, 15, 84, 54, 26, 14, 64, 33, 19, 87, 98, 100, 40, 102, 86, 53, 'J', 78, 71, 5, 'J', 28, 97, 'J', 68, 17, 18, 4, 93, 16, 57, 49, 74, 32, 73, 56, 76, 31, 44, 101, 42, 2, 7, 69, 67, 50, 'J', 90, 59, 66, 37, 94, 103, 11, 'J', 34, 36, 70, 65, 45, 0, 47]
Player :Charles
[3, 'Pica']
[12, 'Pica']
[4, 'Trebol']
[5, 'Trebol']
[3, 'Corazon']
[6, 'Corazon']
[7, 'Corazon']
[9, 'Diamante']
[12, 'Diamante']
['Mono', 'Trebol']
[6, 'Trebol']
Player :Alejandra
[1, 'Pica']
[11, 'Corazon']
[4, 'Diamante']
[8, 'Pica']
[3, 'Trebol']
[4, 'Trebol']
[10, 'Trebol']
[12, 'Trebol']
[3, 'Diamante']
[13, 'Diamante']
['Mono', 'Joker']
Player :Amarilis
[5, 'Pica']
[6, 'Pica']
[9, 'Corazon']
[7, 'Diamante']
[11, 'Diamante']
[5, 'Pica']
[5, 'Trebol']
[13, 'Corazon']
[4, 'Diamante']
[11, 'Diamante']
['Mono', 'Joker']
Player :Andres
[8, 'Pica']
[6, 'Trebol']
[12, 'Corazon']
[6, 'Diamante']
[6, 'Pica']
[1, 'Trebol']
[7, 'Trebol']
[9, 'Trebol']
[7, 'Diamante']
['Mono', 'Joker']
['Mono', 'Joker']
```
