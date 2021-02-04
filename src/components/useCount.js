



import React, { useState } from 'react'

import '../css/useCount.css'

function  useCount(init){
    let [count,changeCount] = useState(init)

    const increase = () =>{
        changeCount(count +1)
    }

    const decrease = () => {
        changeCount(count-1)
    }

    const reset = () => {
        changeCount(init)
    }

    return [count, { increase, decrease, reset }]
 
}

function MyHooks(){

    let [a, changeA] = useCount(121)
    let content

    return (
        <div className="useCount">

            <input ref={(input) => content = input } placeholder="Hello!" />
            <input placeholder="Hello!" type="file" />
            <button onClick={changeA.increase}>增加:{a}</button>
            <button onClick={changeA.decrease}>减少:{a}</button>
            <button onClick={changeA.reset}>重置:{a}</button>
      </div>
    )

}

export default MyHooks