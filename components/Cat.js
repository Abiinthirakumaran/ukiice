import React, { Component } from 'react'

export default class Cat extends Component {
constructor(props){
  super(props)
  this.state = {
               cat:''
             }
}

render(){

let {naming} = this.props;

  return(
    <div>

    <h3>
      {this.props.cat}
    </h3>

    <h1>
      {this.props.me}
    </h1>

{/* <button onClick={naming}>From Cat</button> */}

    </div>
  )
  }
}
