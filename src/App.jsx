import { useState } from 'react';
import './App.css';
import Handleerr from './Components/Handleerror';
import Result from './Components/Result';
import {FaSearch} from "react-icons/fa";

function App() {
  const [input, setinput] = useState('');
  const [error,seterror] = useState('');
  const [temp,settemp] = useState('');
  const [cityname, setcityname] = useState('');


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
     
      let cityn = input;  
      let name = cityn.charAt(0).toUpperCase() + cityn.slice(1)      

      setcityname(name)    

      seterror("");
      console.log(res);
    }
    else{
      // throw Error("Not found");
      settemp("");
      setcityname("");
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
     <div className='main'>
      
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
        <img src="./img/home.png" alt="" />
      </div>
      <div id="title">
            <h1>
                <span>Search Your city Weather</span>
            </h1>
         </div>
      <Result temprature={temp} city={cityname} />
      <Handleerr errors={error} />
     </div>
    </>
  );
}

export default App;
