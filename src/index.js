import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from './store'
import { fetchDeck, setAICards, setUserCards } from './actions/blackjack_actions'
import blackjack_reducer from './reducers/blackjack_reducer'

import App from './components/app'

const store = createStore(blackjack_reducer)


store.dispatch(fetchDeck())
store.dispatch(setAICards(store.getState()))
store.dispatch(setUserCards(store.getState()))
// console.log(store.getState())
export const render = function render(){
  ReactDOM.render(<App store={store}/>, document.getElementById('container'))
}
render()
store.subscribe(render)

require('../test/index-test.js')  // Leave this in!
