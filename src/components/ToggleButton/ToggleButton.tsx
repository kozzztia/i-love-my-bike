import {useState } from 'react';
import { toggleItem } from '../../LocalStorage'
import { getDictionary } from '../../consts/dictionary';

const ToggleButton: React.FC<Props> = ({ id, className }) => {
    const [isPuted, setIsPuted] = useState<boolean>(() => {
        const existingItems = localStorage.getItem('bikes')?.split(',').map(Number) || [];
        return existingItems.includes(id);
    });
    const handleClick = () => {
        toggleItem(id); // Обновление localStorage
        setIsPuted((prev) => !prev); // Переключение состояния
    };


    return (
        <button className={className} onClick={handleClick}>
            {getDictionary(isPuted ? "remove" : "add")}
        </button>
    )
}
type Props = {
    id: number;
    className?: string
}

export default ToggleButton