const React = require('react')
import AIBlackjack from './ai_blackjack'
import UserBlackjack from './user_blackjack'
import { hitAI, hitUser } from '../actions/blackjack_actions'

class App extends React.Component {
  constructor(props){
    super(props)

    this.calculateAiScore = this.calculateAiScore.bind(this)
    this.calculateUserScore = this.calculateUserScore.bind(this)

    this.hitMe = this.hitMe.bind(this)
    this.stay = this.stay.bind(this)
  }

  hitMe(event){
    if (event){
      event.preventDefault()
      this.props.store.dispatch(hitUser(this.props.store.getState().deck))
    } else{
      this.props.store.dispatch(hitAI(this.props.store.getState().deck))
    }
  }
  calculateAiScore(){
    return this.props.store.getState().aiCards.reduce((prev, curr)=>{
      return prev + curr.value
    }, 0)
  }
  calculateUserScore(){
    return this.props.store.getState().userCards.reduce((prev, curr)=>{
      return prev + curr.value
    }, 0)  }
  stay(event){
    event.preventDefault()
    if (this.calculateAiScore() < this.calculateUserScore() && this.calculateAiScore() < 21){
      this.hitMe()
    }
  }
  render(){
    return (
      <div>
        <button onClick={()=>console.log(this.props.store.getState())}>State</button>
        <AIBlackjack aiCards={this.props.store.getState().aiCards} score={this.calculateAiScore}/>
        <UserBlackjack userCards={this.props.store.getState().userCards} score={this.calculateUserScore} hitMe={this.hitMe} stay={this.stay} />
      </div>
    )
  }
}

module.exports = App
