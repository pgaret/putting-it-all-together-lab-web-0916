export function fetchDeck(){
  return {type: 'FETCH_DECK'}
}

export function setAICards(deck){
  var cards = randCards(deck)
  return {type: 'SET_AI_CARDS', payload: {
    aiCards: [cards[0], cards[1]],
    deck: cards[2]
    }
  }
}

export function setUserCards(deck){
  var cards = randCards(deck)
  return {type: 'SET_USER_CARDS', payload: {
    userCards: [cards[0], cards[1]],
    deck: cards[2]
    }
  }
}

export function hitAI(deck){
  var rand = deck[Math.floor(Math.random() * deck.length)]
  var deck = [...deck.slice(0, deck.indexOf(rand)), ...deck.slice(deck.indexOf(rand)+1, deck.length)]
  return {
    type: "HIT_AI",
    payload: {
      aiCard: rand,
      deck: deck
    }
  }
}

export function hitUser(deck){
  var rand = deck[Math.floor(Math.random() * deck.length)]
  var deck = [...deck.slice(0, deck.indexOf(rand)), ...deck.slice(deck.indexOf(rand)+1, deck.length)]
  return {
    type: "HIT_USER",
    payload: {
      userCard: rand,
      deck: deck
    }
  }
}

function randCards(state){
  var deck = state.deck
  var rand = deck[Math.floor(Math.random() * deck.length)]
  var rand2 = deck[Math.floor(Math.random() * deck.length)]
  while (rand === rand2){
    rand2 = deck[Math.floor(Math.random() * deck.length)]
  }
  deck = [...deck.slice(0, deck.indexOf(rand)), ...deck.slice(deck.indexOf(rand)+1, deck.length)]
  deck = [...deck.slice(0, deck.indexOf(rand2)), ...deck.slice(deck.indexOf(rand2)+1, deck.length)]
  return [rand, rand2, deck]
}
