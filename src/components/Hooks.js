
import React, { useState, useCallback, useEffect } from 'react'


function Counter() {
    const [count, setCount] = useState(0);
    const [a, setA] = useState(100);

    const fn = useCallback(() => {
        console.log('callback', a)
    }, [a])
    // 可知fn是依赖于a的，只有当a发生变化的时候fn才会变化，否则每轮render的fn都是同一个

    const f1 = () => {
        console.log('f1')
    }
    // 对于f1，每轮循环都有独自的f1，所以相当于一直在变化，如果useEffect依赖于f1的话，每次render之后都会执行

    useEffect(() => {
        console.log('this is effect')
    }, [fn])
    // 当dependency数组里面是f1时，不管更新count还是a，都会执行里面的函数，打印出this is effect
    // 当dependency数组里面是fn时，只有更新a时才会执行该函数
    return (
        <>

            Count: {count}
            <hr/>
            
            A: {a}
            <hr/>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <br />
            <button onClick={() => setA(a + 1)}>+</button>
            <button onClick={() => setA(a - 1)}>-</button>
        </>
    );
}

export default Counter