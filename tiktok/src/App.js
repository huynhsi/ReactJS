import logo from './logo.svg';
//import './App.css';

import { useState } from 'react';
import Content from './Content';
import './login.css';


// const gifts = [
//   'cpu i9',
//   'Ram 32GB',
//   'GRB keybord'
// ]
function App() {
  // thuật ngữa mount và unmoount
  const [show, setShow] = useState(false)

  return(
    <div style={{padding: 20}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  )
  
}

export default App;
