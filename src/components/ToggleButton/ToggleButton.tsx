import {useState } from "react";
import { getLocalBikes } from "../../LocalStorage";
import { getDictionary } from "../../consts/dictionary";
import { toggleItem } from "../../LocalStorage";
import style from "./style.module.css"

const ToggleButton: React.FC<Props> = ({id, className }) => {
    const [isPuted, setIsPuted] = useState<boolean>(getLocalBikes().includes(id));
    const handler = () => {
        toggleItem(id)
        setIsPuted(prev => !prev)
    }
    return (
        <button className={[style.button ,className].join(" ")} onClick={handler}>
            {
                getDictionary(isPuted ? "remove" : "add")
            }
        </button>
    )
}
type Props = {
    id : number;
    className?: string;
}

export default ToggleButton