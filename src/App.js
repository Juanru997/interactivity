import React, { useState } from 'react';
import './App.css';

function App() {

    return (
      <div className="App">
        <header className="Body">

          <Diyi />
          <Dier />
          <Disan />
        </header>
      </div>
    );

}


function Diyi() {
  // Declare a new state variable, which we'll call "count"
  
  const [first, setFirst] = useState(0);

  function handleClick() {
    setFirst(first + 1);
  } 

  if(first > 100) {
    return 
  } else {
    return (
    <div>
     
      <button className="hotbutton" onClick={handleClick}>
        first
      </button>

      <p>You clicked {first} times</p>
    </div>
  );
}
}

function Dier() {
  // Declare a new state variable, which we'll call "count"
  
  const [second, setSecond] = useState(0);

  function handleClick() {
    setSecond(second + 1);
  } 

  if(second > 100) {
    return 
  } else {
    return (
    <div>
     
      <button className="hotbutton" onClick={handleClick}>
        second
      </button>

      <p>You clicked {second} times</p>
    </div>
  );
}
}

function Disan() {
  // Declare a new state variable, which we'll call "count"
  
  const [san, setSan] = useState(0);

  function handleClick() {
    setSan(san + 1);
  } 

  if(san > 100) {
    return 
  } else {
    return (
    <div>
     
      <button className="hotbutton" onClick={handleClick}>
        san
      </button>

      <p>You clicked {san} times</p>
    </div>
  );
}
}


// function firstButton() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   } 

//   if(count > 100) {
//     return 
//   } else {
//     return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button className="hotbutton" onClick={handleClick}>
//         Click me
//       </button>
//     </div>
//   );
// }
// }

export default App;
