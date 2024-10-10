import { useState } from 'react';
import APIForm from './components/APIForm'; 
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  //  elements user can include in screenshot
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });

  // how users should submit their form
  // const submitForm = () => {

  // }

  return (
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>
      
      {/* component required user inputs, handleChange, and onSubmit func */}
      <APIForm inputs={inputs} handleChange={(e) => setInputs((prevState) => ({
            ...prevState, [e.target.name]: e.target.value.trim(), }))
        }  />
      <br></br>
    </div>
  );
}

export default App
