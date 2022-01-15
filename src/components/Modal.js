import { Children } from "react/cjs/react.production.min";
import "./Modal.css";
const Modal=({children,isOpen,closeModal})=>{
    return (
    <article className={`modal ${isOpen && "is-open"}`}>
     <div className="modal-container">
       <button class="modal-close">X</button>
       {children}    
     </div>  
    </article>
    );
    
}

export default Modal;