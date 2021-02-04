

import React from 'react';

import {useState, useEffect,useContext } from 'react'


import '../css/App.css';



// function App() {
  
//   const [count, setCount] = useState(125);

//   return (
//     <div className="App">
//           Count: {count}
//         <button onClick={() => setCount(125)}>Reset</button>
//         <button onClick={() => setCount(prevCount => prevCount - 5)}>-</button>
//         <button onClick={() => setCount(prevCount => prevCount + 7)}>+</button>
//     </div>
//   );
// }



const themes = {
  light: {
    foreground: "#000000",
    background: "#00ff00"
  },
  dark: {
    foreground: "#ffffff",
    background: "#ff0000"
  }
};

const ThemeContext = React.createContext(themes.dark);

function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
export default App;
