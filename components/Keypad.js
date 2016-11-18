const React = require('react');

class Keypad extends React.Component {
  constructor(props){
    super(props)
    this.enterPW = this.enterPW.bind(this)
  }
  enterPW(){
    console.log("Entering password...")
  }
  render(){
    return (
      <input type="password" onKeyUp={this.enterPW}/>
    )
  }
}
module.exports = Keypad;
