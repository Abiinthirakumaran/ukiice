import React, { Component } from 'react'

export default class Bio extends Component {
constructor(props){
  super(props)
  this.state = {
               bio:''
             }
}

render(){

let {naming} = this.props;

  return(
    <div>

    <h3>
      {this.props.bio}
    </h3>

    <h1>
      {this.props.me}
    </h1>

{/* <button onClick={naming}>From Bio</button> */}

    </div>
  )
  }
}
