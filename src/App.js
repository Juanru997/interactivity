import React, { useState,useEffect } from 'react';

import './App.css';

function App() {

    return (
      <div className="App">
        <header className="Body">
          <Diyi number={1}/>
          <Diyi number={2}/>
          <Diyi number={3}/>
        </header>
      </div>
    );

}


function Diyi(props) {
  // Declare a new state variable, which we'll call "count"
  
  const [first, setFirst] = useState("Click me,please");

  function handleClick()  {
    return setFirst("you're clicking button");
  }

    return (
    <div>
      <button className="hotbutton" onClick={handleClick}>
        {props.number}
      </button>
      <p>{first} {props.number}</p>
    </div>
  );
}






export default App;
