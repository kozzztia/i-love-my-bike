import style from './style.module.css'
import { useState } from "react";
import Modal from "../Modal/Modal";

export const SendButton: React.FC<Props> = ({ className = "" }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <>
            <button className={[style.send, className].join(" ")}
                onClick={() => setIsModalOpen(true)}>
                Send
            </button>
            <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </>
    )
}

type Props = {
    className?: string
}