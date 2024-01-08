import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/about';
import TextForm from './Components/TextForm';

function App() {
  return (
   <>
    <Navbar title = "TextChanges" about = "about"/>
    <div className='container my-3'>
    <TextForm heading= "Enter your text to analyze"/> 
   
      <About/>
    </div>

  
  </>
  );
}

export default App;
