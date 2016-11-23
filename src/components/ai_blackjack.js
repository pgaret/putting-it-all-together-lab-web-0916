const React = require('react')

function AIBlackjack (props) {
  if (props.aiCards){
    var cards = props.aiCards.map(card=>{
      return <li>{card.name}</li>
    })}
  return (
    <div>
      <h1>Computer</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {cards}
      </ul>
    </div>
  )
}

module.exports = AIBlackjack
