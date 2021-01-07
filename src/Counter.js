

import React, { createRef, useEffect, useReducer , useRef, useState } from 'react'



const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 11};
    case 'decrement':
      return {count: state.count - 21};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const prevCountRef = useRef();
  useEffect(() => {
      prevCountRef.current = state.count
      console.log(prevCountRef.current);
  })
  const prevCount = prevCountRef.current;

  return (
    <>
      Count Now: {state.count}
      Count Before: { prevCount }<hr/>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button><hr />
      <TextInputWithFocusButton/>
      <Test />
    </>
  );
}

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` 指向已挂载到 DOM 上的文本输入元素
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }

const Test = () => {
      const [value,setvalue] = useState(100);
      const  fromUseRef = useRef();
      const fromCreateRef = createRef();
      if(!fromCreateRef.current){
        fromCreateRef.current = value;
      }
      if(!fromUseRef.current){
        fromUseRef.current = value;
      }
      return(
        <>
          <p>value: {value}</p><hr/>
          <p>useRef: {fromUseRef.current}</p><hr/>
          <p>createRef: {fromCreateRef.current}</p><hr/>
          <button onClick={ () => setvalue( prev => prev + 1)} >Update Value</button>,<hr/>
        </>
      )

}


export default Counter