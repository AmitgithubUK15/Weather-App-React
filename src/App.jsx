import { useState } from 'react';
import './App.css';
import Handleerr from './components/Handleerror';
import Result from './components/Result';
import {FaSearch} from "react-icons/fa";

function App({isSpecial}) {
  const [input, setinput] = useState('');
  const [error,seterror] = useState('');
  const [Humidity,setHumidity] = useState();
  const [feellike,setfeellike] = useState();
  const [windspeed,setwindspeed] = useState();
  const [temp,settemp] = useState('');
  const [cityname, setcityname] = useState('');
  const [isvisible,setisvisible] = useState(true);
  const [isresult ,setisresult] = useState(false);
  const [errorvisible, seterrorvisible] = useState(false);
  const [imgchange,setimgchange] = useState("./img/home.png");
  const [specialStyle,setspecailStyle] = useState();


  


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7e57b8f0d2msh79692790ac4fa1fp1f7c4ajsnb626322a46f9',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    },
  };

  async function getData() {
   try{
    console.log(input);
    const req = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input}`, options);
    
    if(req.ok){
      const res = await req.json();
      
      settemp(res.temp);
      setHumidity(res.humidity);
      setfeellike(res.feels_like);
      setwindspeed(res.wind_speed);
      // setting images according temp

      if(temp<20){
        setimgchange("./img/Haze.png")
        setspecailStyle({backgroundColor:"rgb(39, 42, 46)"})
        
      }
      let cityn = input;  
      let name = cityn.charAt(0).toUpperCase() + cityn.slice(1)      

      setcityname(name)  
      setisresult(true)  
      setisvisible(false)
      
      
     
    }
    else{
     
      
      setisvisible(false)
      setisresult(false) 
      seterrorvisible(true);
      seterror("Not found")
    }
   }
   catch(err){
     
     console.log(err);
   }
  }

  // Handle Enter key press on the input
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      getData();
    }
  };



  return (
    <>
     <h1>Weather App</h1>
     <div className={`main ${isSpecial ? 'special' : ''}`} style={specialStyle} >
      
      <header>
        <div>
      <input
        type="text"
        placeholder='Search....' 
        value={input}
        onChange={(e) => setinput(e.target.value)}  
        onKeyDown={handleKey}
      />
      <button onClick={getData}><FaSearch /></button>
        </div>
      </header>
      
      <div className='img_wrp'>
       <img src={imgchange} alt="" />
        
      </div>
      {isvisible &&<div id="title" style={{display:"block"}}>
            <h1>
                <span>Search Your city Weather</span>
            </h1>
         </div> }
      {isresult && <Result temprature={temp} city={cityname} humidity={Humidity} feel={feellike} wind={windspeed} style={{display:"block"}} />}
      {errorvisible &&<Handleerr errors={error} style={{display:"block"}}/>}
      
     </div>
    </>
  );
}

export default App;
