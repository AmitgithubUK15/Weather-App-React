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


  let time = new Date();
  let hour = time.getHours();
  console.log(hour);


  

  async function getData() {
   try{

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7e57b8f0d2msh79692790ac4fa1fp1f7c4ajsnb626322a46f9',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
      },
    };

    console.log(input);
    const req = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input}`, options);
    
    if(req.ok){
      const res = await req.json();
      
      settemp(res.temp);
      setHumidity(res.humidity);
      setfeellike(res.feels_like);
      setwindspeed(res.wind_speed);
      // setting images according temp
      
    
      if(hour>18){
        console.log("good eveing");
        if(temp<15){
          setimgchange("./img/Haze.png")
          setspecailStyle({backgroundColor:"rgb(39, 42, 46)"})  
          
        }
        else{
          setimgchange("./img/moon.png")
          setspecailStyle({backgroundColor:"rgb(28 32 37)"})
        }
      }
      else if(hour > 6 && hour <=18){
         if(temp>=20){
           setimgchange("./img/Clean.png")
          setspecailStyle({backgroundColor:"rgb(30, 126, 255)"})
        }
        else if(temp < 20){
          setimgchange("./img/Haze.png")
          setspecailStyle({backgroundColor:"rgb(39, 42, 46)"}) 
        }
      }
    

      let cityn = input;  
      let name = cityn.charAt(0).toUpperCase() + cityn.slice(1)      

      setcityname(name)  
      setisresult(true)  
      setisvisible(false)
      seterrorvisible(false)
      
     
    }
    else{
      
      setimgchange("./img/home.png")
      setspecailStyle({backgroundColor:"rgb(15 23 42)"})
      setisvisible(true)
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
