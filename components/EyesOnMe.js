const React = require('react');

class EyesOnMe extends React.Component {
  constructor(props){
    super(props)

  }
  focusing(){
    console.log("Good!")
  }
  blurring(){
    console.log("Hey! Eyes on me!")
  }
  render(){
    return (
      <button type="password" onFocus={this.focusing} onBlur={this.blurring}/>
    )
  }
}

module.exports = EyesOnMe;
