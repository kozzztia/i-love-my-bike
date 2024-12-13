import React, { useEffect } from 'react'
import style from "./style.module.css"
import ReactDOM from 'react-dom';

function disableScroll() {
    document.body.style.overflow = "hidden";
  }
  
  function enableScroll() {
    document.body.style.overflow = "";
  }
  

const Modal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
    useEffect(() => {
        if (isOpen) {
          disableScroll();
        } else {
          enableScroll();
        }
      }, [isOpen]);

    if (!isOpen) return null;
  
    return ReactDOM.createPortal(
      <div className={style.modal} onClick={()=>setIsOpen(false)}>
        <div className={style.content} onClick={(e) => e.stopPropagation()}>
          <button onClick={()=>setIsOpen(false)}>
            back
          </button>
          <button>
            ok
          </button>
        </div>
      </div>,
      document.getElementById("modal-root") as HTMLElement
    );
  };
  

export default Modal


type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}