import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
function App() {
  const [counter,setCounter]=useState(0);
  const [pokemon,setPokemon]=useState({});
const fetchPokemon =(id)=>{
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then((response)=> response.json())
.then((data) => setPokemon(data));

  };

  const getRandomInt = (min=1, max=500)=>{
    return Math.floor(Math.random()*(max-min)+min)
  };

  useEffect(()=> {
    console.log({pokemon});
  },[pokemon]);
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
         <div className="flex-container">
          <img src={pokemon?.sprites?.back_default} className="poke-image"/>
          <img src={pokemon?.sprites?.front_default} className="poke-image"/>
         </div>
         <p>{pokemon.name??"No se ha seleccionado Pokemon"}</p>
         <div className="flax-container">
           <button  className="button">Back </button>         
           <button className="button" onClick={()=>fetchPokemon(getRandomInt())}>Random </button>    
           <button className="button">Next </button>    
         </div>
        
        </p>
      </header>
    </div>
  );
}

export default App;
