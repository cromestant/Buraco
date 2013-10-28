import random
#TODO
#Sacar buracos
#repartir de buracos
#controlar orden de jugadores al repartir (para cambio de turno)

class deck(object):
	"""Deck of cards"""
	def __init__(self):
		super(deck, self).__init__()
		self.mazo = range(104)
		self.mazo.extend(['J'])
		random.shuffle(self.mazo)
		self.mazo.reverse()
		print self.mazo
	def deal(self,jugadores):
		"""Deals one card and removes it from the deck"""
		for i in range(44):
			j=i%4
			if j ==0:
				jugadores[j].addCard(self.takeCard())
			elif j ==1:
				jugadores[j].addCard(self.takeCard())
			elif j ==2:
				jugadores[j].addCard(self.takeCard())
			elif j ==3:
				jugadores[j].addCard(self.takeCard())

	def takeCard(self):
		"""docstring for takeCard"""
		return self.mazo.pop()
		
	
class jugador(object):
	"""docstring for jugador"""
	def __init__(self, name):
		super(jugador, self).__init__()
		self.name = name
		self.mano = []
	def addCard(self,card):
		"""Add a card to a players hand"""
		if isinstance(card,int):
			self.mano.append(card)
		else:
			self.mano.extend(card)
		self.mano.sort()
		
class juego(object):
	"""Nuevo Juego de Buraco"""
	def __init__(self):
		super(juego, self).__init__()
		self.mazo = deck()
		self.jugadores=[]
		self.turno=0
	def addPlayer(self,player):
		"""Method for adding players to a game"""
		if len(self.jugadores) < 4:
			self.jugadores.append(jugador(player))
	def printStatus(self):
		"""Prints status of game"""
		for player in self.jugadores:
			print "Player :"+ player.name
			for cards in map(self.easyPrint,player.mano):
				print cards
	def easyPrint(self,card):
		"""Printing cards as they are"""
#		print "card is :" +str(card)
		pinta=""
		carta=""
		if card =="J":
			pinta = "Joker"
		elif card < 13 or (card > 51 and card < 65):
			pinta="Pica"
		elif (card > 12 and card < 26) or (card > 64 and card < 78):
			pinta = "Trebol"
		elif (card > 25 and card < 39) or (card > 77 and card < 91):
			pinta = "Corazon"
		elif (card > 38 and card < 52) or (card > 90 and card < 104):
			pinta = "Diamante"
		if card =="J":
			carta ="Mono"
		elif (card % 13) == 1:
			carta = "Mono"
		else:
			carta = (card % 13)+1
		return [carta,pinta]
		
	def start(self):
		"""Start the game"""
		self.mazo.deal(self.jugadores)
def main():
	"""docstring for main"""
	game = juego()
	game.addPlayer("Charles")
	game.addPlayer("Alejandra")
	game.addPlayer("Amarilis")
	game.addPlayer("Andres")
	game.start()
	game.printStatus()
	
if __name__ == '__main__':
	main()