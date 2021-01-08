



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
    return (
        <div className="useCount">
            <button onClick={changeA.increase}>增加:{a}</button>
            <button onClick={changeA.decrease}>减少:{a}</button>
            <button onClick={changeA.reset}>重置:{a}</button>
      </div>
    )

}

export default MyHooks