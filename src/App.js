import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from "react";
function App() {
  const [counter,setCounter]=useState(0);
  const [pokemon,setPokemon]=useState({});
  useEffect(()=> {
    console.log({pokemon});
    console.log(counter);
    
    
  },[pokemon,counter]);
const fetchPokemon =(id)=>{
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then((response)=> response.json())
.then((data) => setPokemon(data));
setCounter(id);
  };

  const getRandomInt = (min=1, max=898)=>{
    return Math.floor(Math.random()*(max-min)+min)
  };



  const next = ()=>{
    if(counter>897){
      fetchPokemon(1);
      setCounter(1);
    }else{
      setCounter((counter) => counter +1);
      fetchPokemon(counter+1);
    }
    
  };
  const prev = ()=>{
   if(counter<2){
    fetchPokemon(898);
    setCounter(898);
   }else{
    setCounter((counter) => counter -1);
    fetchPokemon(counter-1);
   }
   
  };
 const showHabilities=()=>{

 };
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
           <button  className="button" onClick={prev}>Anterior</button>         
           <button className="button" onClick={()=>fetchPokemon(getRandomInt())}>Random</button>    
           <button className="button" onClick={next}>Siguiente</button>
           <button className="button" onClick={showHabilities}>Habilidades</button>    
         </div>
        
        </p>
      </header>
    </div>
  );
}

export default App;
