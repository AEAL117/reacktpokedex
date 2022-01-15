import { useState } from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import "./Modal.css";
const Modals=({poke})=>{
    const [isOpenModal1,openModal1,closeModal1]=useModal(false);
    
    return(
        <div>
            <h2>Capacidad</h2>
         <button className="button" onClick={openModal1}>Abrir</button>   
         <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
             <h3>{poke.name}</h3>
             <h4>{poke?.abilities?.map(a => <div>{a.ability.name}</div>)}</h4>
             <img src={poke?.sprites?.front_default} className="poke-image"/>
         </Modal>
        </div>
    );
}

export default Modals;