import { useState } from 'react';
import APIForm from './components/APIForm'; 
import Gallery from './components/Gallery';
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

console.log(ACCESS_KEY);

function App() {
  //  this holds our current screenshot
  const [screenshot, setScreenshot] = useState(null);
  // array holds all previous screenshots
  const [prevScreenshots, setPrevScreenshots] = useState([]);
  console.log(prevScreenshots)

  //  elements user can include in screenshot
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });

  // resets input values
  const reset = () => {
    // clears each value
    setInputs({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  })
  }

  // API call
  const callAPI = async (query) => {
    try {
      // send API request on the url we created query
      const response = await fetch(query);
      // returns API call from response into a json file
      const json = await response.json();
      console.log(json); 
      // saves our current screenshot
      setScreenshot(json.url)
      // use spread to get all prev imgs and add new one 
      setPrevScreenshots((image) => [...image, json.url])
      // clears form so users can enter another one
      reset()
    } catch (err) {
      alert('There was an error when making your screenshot');
      console.log(err)
    }
  }

  // func makes our complete URl for the API
  const makeQuery = () => {
    // following segment needed to make url work
    let wait_until = "network_idle";
    let response_type = "json";
    let fail_on_status = "400%2C404%2C500-511";
    let url_starter = "https://";
    let fullURL = url_starter + inputs.url;

    let query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;
    
    console.log(query)
    callAPI(query).catch(console.error);
  }

  // how users should submit their form
  const submitForm = (e) => {
    e.preventDefault();
    // default values if user does not enter a value
    let defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    };

    // user should not be able to submit without url
    if (!inputs.url) {
      alert('Please enter a url!');
    } else {
      //  loops thru key: value values to determine if they're empty or not
      for (const [key, value] of Object.entries(inputs)) {
        if (!value) {
          // if no value at that key, then key assigned default value
          inputs[key] = defaultValues[key]
        }
      }
    }
    makeQuery();
  }

  return (
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>
      
      {/* component required user inputs, handleChange, and onSubmit func */}
      <APIForm inputs={inputs} handleChange={(e) => setInputs((prevState) => ({
            ...prevState, [e.target.name]: e.target.value.trim(), }))
        }  onSubmit={submitForm}/>
      <br></br>
      
      {/* show image if it exists */}
      {screenshot ? ( <img className="screenshot" src={screenshot} alt="Screenshot returned" />) : ( <div> </div>)}

      <div className="container">
        <h3> Current Query Status: </h3>
        <p>
          https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY    
          <br></br>
          &url={inputs.url} <br></br>
          &format={inputs.format} <br></br>
          &width={inputs.width}
          <br></br>
          &height={inputs.height}
          <br></br>
          &no_cookie_banners={inputs.no_cookie_banners}
          <br></br>
          &no_ads={inputs.no_ads}
          <br></br>
        </p>
      </div>
      <br></br>
      
      {/* conditional rendering to show screenshots( <Gallery allScreenshots={prevScreenshots} />) : */}
      {prevScreenshots && prevScreenshots.length > 0 ? (<Gallery allScreenshots={prevScreenshots} />) : (<p>No images yet!</p>) }
      
    </div>
  );
}

export default App
