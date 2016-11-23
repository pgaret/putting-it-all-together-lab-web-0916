const React = require('react')

function UserBlackjack (props) {
  var cards = props.userCards.map(card=>{
    return <li>{card.name}</li>
  })
  return (
    <div>
      <h1>Player1</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {cards}
      </ul>
      <form onSubmit={props.hitMe}>
        <button> Hit Me </button>
      </form>
      <form onSubmit={props.stay}>
        <button> Stay </button>
      </form>
    </div>
  )
}

module.exports = UserBlackjack
