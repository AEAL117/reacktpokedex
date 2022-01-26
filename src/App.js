import './App.css';
import { useEffect, useState,useRef} from "react";
import Modals from './components/Modals';
import defaultPokemon from './img/default.jpg'
function App() {
  const [counter,setCounter]=useState(0);
  const [pokemon,setPokemon]=useState({});
  const inputRef=useRef();
  useEffect(()=> {
    console.log({pokemon});
    console.log(counter);
    
    
  },[pokemon,counter]);
const fetchPokemon =(id)=>{
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then((response)=> response.json())
.then((data) => setPokemon(data));

  };
  const getRandomInt = (min=1, max=898)=>{
    return Math.floor(Math.random()*(max-min)+min)
  };



  const next = ()=>{
    if(counter===0){
      fetchPokemon(1);
        setCounter(1);
    }else{
      if(pokemon.id===898){
        fetchPokemon(1);
        setCounter(1);
      }else{
        setCounter(pokemon.id +1);
        fetchPokemon(pokemon.id +1);
      }
    }

    
  };
  const prev = ()=>{
    if(counter===0){
      fetchPokemon(898);
      setCounter(898);
    }else{
      if(pokemon.id===1){
        fetchPokemon(898);
        setCounter(898);
       }else{
        setCounter(pokemon.id -1);
        fetchPokemon(pokemon.id-1);
       }
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
           <h3 className='titulo'>Búsqueda por nombre</h3>
        <input type="text" onChange={(event) => fetchPokemon(event.target.value)}></input> 
        
        {pokemon!=null ?  <Modals poke={pokemon}/>:<h1 className="none">.</h1>}   
         </div>
        
        </p>
      </div>

      </header>
    </div>
  );
}

export default App;
