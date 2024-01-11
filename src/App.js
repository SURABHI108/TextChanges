import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/about';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'

    }
    
  }
  return (
   <>
   <Router>
    <Navbar title = "TextChanges" about = "about" mode={mode} toggleMode={toggleMode}/>
    <Alert alert="this is alert"/>
    <div className='container my-3'>
    <Routes>
        <Route path="/" element={<TextForm />} />
        <Route path="/about" element={<About />} />
     </Routes>
    </div>
    </Router>
    
   </>
  );
}

export default App;
