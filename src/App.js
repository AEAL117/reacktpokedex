import './App.css';
import { useEffect, useState} from "react";
import Modals from './components/Modals';
import defaultPokemon from './img/default.jpg'
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
  return (
    <div className="App">
      <header className="App-header">
        <a className='App-link' href='https://github.com/AEAL117/reacktpokedex'>GitHub</a>
      <div className="pokedex">
        <p>
         <div className="pokedex-screen">
          <img src={pokemon?.sprites?.back_default??defaultPokemon} className="poke-image" alt='Pokemon front'/>
          <img src={pokemon?.sprites?.front_default??defaultPokemon} className="poke-image" alt='Pokemon back'/>
         </div>
         <h3 className='titulo'>ID</h3>
         <p>{pokemon.id}</p>
         <h3 className='titulo'>Nombre</h3>
         <p>{pokemon.name??"No se ha seleccionado Pokemon"}</p>
         <div className="flax-container">
           <button  className="button" onClick={prev}>Anterior</button>         
           <button className="button" onClick={()=>fetchPokemon(getRandomInt())}>Random</button>    
           <button className="button" onClick={next}>Siguiente</button>
           {counter>0 ?  <Modals poke={pokemon}/>:<h1 className="none">.</h1>}    
         </div>
        
        </p>
      </div>

      </header>
    </div>
  );
}

export default App;
