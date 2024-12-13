import React, { useEffect } from 'react'
import style from "./style.module.css"
import ReactDOM from 'react-dom';
import { getLocalBikes } from '../../../LocalStorage';
import { useLocalBikes } from '../../../state/StateProvider/useStateValue';
import BikeImage from '../BikeImage/BikeImage';
import Preloader from '../Preloader/Preloader';


const Modal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const ids = getLocalBikes();
  const bikes = useLocalBikes(ids);
  console.log(bikes)


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;
  if (!bikes) return <Preloader />

  return ReactDOM.createPortal(
    <div className={style.modal} onClick={() => setIsOpen(false)}>
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        {
          bikes.map((bike) => (
            <div key={bike.id} className={style.item}>
              <div className={style.info}>
                <h4>{bike.title}</h4>
                <p>{bike.price} $</p>
              </div>
              <BikeImage src={bike.icon} name={bike.name} className={style.image} />
            </div>
          ))
        }
        <div className={style.buttons}> 
          <button
            onClick={() => setIsOpen(false)}>
            back
          </button>
          <p>
            {bikes.reduce((bikes, bike) => bikes + bike.price, 0)} $
          </p>
          <button>
            ok
          </button>
        </div>
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