import React, { Component } from 'react'
import {connect} from 'react-redux'



const containerStyle={
    dispaly:'flex'
}

const button={
    fontSize: '1.5rem',
    width:"40px",
    height:"40px"
}
const mapStateToProps=(state)=>{
    return {
    number:state.number
}
}

 class Counter extends Component {
     state={
         number:0
     }
     

//       addOne=()=>{
// this.setState({number:this.state.number+1})
//      }
// minusOne=()=>{
//     this.setState({number:this.state.number-1})
// }

addOne = () => {
    this.props.dispatch({ type: 'ADD_ONE' });
  }
  minusOne = () => {
    this.props.dispatch({ type: 'MINUS_ONE' });
  }
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <div style={containerStyle}>
                <button style={button} >+</button>
                <button style={button}>-</button>
                </div>
            </div>
        )
    }
}


export const add_One="add_One";
export const minus_One="minus_One";
export default connect(mapStateToProps) (Counter)