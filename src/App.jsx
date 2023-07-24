import './App.css'
import Home from './Components/Home/Home'
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main1 from './Components/Main/Main1';
import { useState } from 'react';

function App() {

  const [message, setMessage] = useState("");

  const updateMessage = (m)=>{
    setMessage(m);
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home message={message}/>}/>
        <Route exact path="/main" element={<Main1 updateMessage={updateMessage}/>}/>
      </Routes>
    </Router>
  )
}

export default App
