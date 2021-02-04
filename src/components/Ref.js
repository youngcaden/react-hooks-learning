


import React, { Component } from 'react'

import '../css/useCount.css'


function Son(props){
      const react_version = React.version
      return (
            <div>
                  <pre>react version: { react_version }</pre>
                   { props.children }
            </div>
      )
}


class Ref extends Component{

      constructor(props){
            super(props)
            this.myRef = React.createRef()
      }

      printMsg(){
            console.log(this.inputvalue.value, this.myRef.current.value)

      }

      render(){
            return (
                  <div className="useCount">
                      <Son>
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                        <li>d</li>
                      </Son>
                      <input ref={(input) => this.inputvalue = input } placeholder="Hello!" />
                      <input ref={ this.myRef } placeholder="Two!" />
                    
                      <button onClick={ () => this.printMsg() }>Console</button>
                </div>
              )
      }
}


export default Ref