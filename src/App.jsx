import { useState } from 'react';
import './App.css';

function App() {
  const [input, setinput] = useState('');

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7e57b8f0d2msh79692790ac4fa1fp1f7c4ajsnb626322a46f9',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    },
  };

  async function getData() {
    console.log(input);
    const req = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input}`, options);
    const res = await req.json();
    console.log(res);
  }

  // Handle Enter key press on the input
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      getData();
    }
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        onKeyDown={handleKey}
      />
      <button onClick={getData}>Search</button>
      <br />
      weather
    </>
  );
}

export default App;
