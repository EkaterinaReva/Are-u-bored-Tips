import { useEffect, useState } from 'react';
import video from "./activity.mp4";
import './App.css';

function App() {

const [tips, setTips] = useState("");
useEffect(() =>{
  getTips();
},[])


  const getTips=async() =>{
    const response =await fetch(`https://www.boredapi.com/api/activity/ `);
    const data =await response.json();
    setTips(data.activity)
  }


  return (
    <div className="App">
      <div className='container'>
<video autoPlay muted loop> 
<source src= {video} type= "video/mp4"/>
</video>
      </div>
      <div className='container'>
      <h1>Are you bored? Choose your activity </h1>
      </div>
      <div className='container'>
      <p>{tips}</p>
      </div>
      <div className='container'>
      <button onClick={getTips}>New Tip</button>
      </div>
    </div>
  );
}

export default App;
