import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
   <>
    <Navbar title = "TextChanges" about = "AboutUs"/>
    <div className='container my-3'></div>

    <TextForm heading= "Enter your text to analyze"/>
  </>
  );
}

export default App;
