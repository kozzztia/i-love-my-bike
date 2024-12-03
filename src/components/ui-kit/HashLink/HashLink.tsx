import React, { useEffect, useState } from 'react'
import style from "./style.module.css"
import { useLocation } from 'react-router-dom';

const HashLink: React.FC<Props> = ({ url, title, className = "" }) => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation()

    useEffect(() => {
        const handleHashChange = () => {
            setIsActive(location.hash === url);
        };

        // Проверяем хэш при загрузке
        handleHashChange();

        // Слушаем изменения хэша
        window.addEventListener("hashchange", handleHashChange);

        // Убираем слушатель при размонтировании
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [location, url]);
    return (
        <a             className={[
            style.link, 
            className, 
            isActive ? style.active : ""
        ].join(" ")} 
        href={`${url}`}>{title}</a>
    )
}

export default HashLink

type Props = {
    url: string;
    title: string;
    className?: string;
}