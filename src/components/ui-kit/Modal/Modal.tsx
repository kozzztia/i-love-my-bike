import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import ReactDOM from 'react-dom';
import { clearStore, getLocalBikes } from '../../../LocalStorage';
import { useLocalBikes } from '../../../state/StateProvider/useStateValue';
import BikeImage from '../BikeImage/BikeImage';
import { getDictionary } from '../../../consts/dictionary';
import { useNavigate } from 'react-router-dom';

const Modal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const ids = getLocalBikes();
  const bikes = useLocalBikes(ids);
  const navigate = useNavigate();

  // Состояние для телефона
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSend = () => {
    if (phone.trim().length < 10) {
      setError('insert correct number');
      return;
    }
    console.log({ bikes, phone });
    clearStore();
    setIsOpen(false);
    navigate('/');
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;
  if (!bikes) return null;

  return ReactDOM.createPortal(
    <div className={style.modal} onClick={() => setIsOpen(false)}>
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        {bikes.map((bike) => (
          <div key={bike.id} className={style.item}>
            <div className={style.info}>
              <h4>{bike.title}</h4>
              <p>{bike.price} $</p>
            </div>
            <BikeImage src={bike.icon} name={bike.name} className={style.image} />
          </div>
        ))}
        {
          bikes.length === 0 && <p>{getDictionary('modalEmpty')}</p>
        }

        <label>
          <p>{getDictionary('modalPhone')}</p>
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setError(null); 
              
            }}
          />
        </label>
        {error && <p className={style.error}>{error}</p>} {/* Отображение ошибки */}

        <div className={style.buttons}>
          <button onClick={() => setIsOpen(false)}>back</button>
          <p>{bikes.reduce((total, bike) => total + bike.price, 0)} $</p>
          <button onClick={handleSend}>ok</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
