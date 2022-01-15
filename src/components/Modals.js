import { useState } from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import "./Modal.css";
const Modals=({poke})=>{
    const [isOpenModal1,openModal1,closeModal1]=useModal(false);
    
    return(
        <div>
            <h2>Habilidades</h2>
         <button className="button" onClick={openModal1}>Modal 1</button>   
         <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
             <h3>{poke.name}</h3>
             <p>Hola este es el contenido de mi modal 1</p>
             <img src="https://placeimg.com/400/400/animals" alt="Animals"/>
         </Modal>
        </div>
    );
}

export default Modals;