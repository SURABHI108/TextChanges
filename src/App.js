import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/about';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';

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
    <Navbar title = "TextChanges" about = "about" mode={mode} toggleMode={toggleMode}/>
    <Alert alert="this is alert"/>
    <div className='container my-3'>
    <TextForm heading= "Enter your text to analyze" mode={mode}/> 
   
      <About/>
    </div>

  
  </>
  );
}

export default App;
