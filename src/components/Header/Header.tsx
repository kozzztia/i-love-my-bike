import { useEffect } from 'react';
import style from './style.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { categoryLinks, navLinks } from '../../consts/consts';



const Header = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash ? location.hash.replace('#', '') : '';
        document.title = `${location.pathname.replace('/', '') || 'home'}${hash === 'home'? '' : ` ${hash}`}`.toLocaleUpperCase();
    }, [location]);
    return (
        <>
            <div className={style.menu}>
                <h2>{location.pathname.replace('/', '').toLocaleUpperCase() || 'Home'}</h2>
                <ul>
                    {
                        navLinks.map(({ id, url, title }) => (
                            <li key={id}>
                                <a href={`/#${url}`}>{title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <ul className={style.nav}>
                    {
                        categoryLinks.map(({ id, url, title }) => (
                            <li key={id}>
                                <NavLink to={`/${url}`}>{title}</NavLink>
                            </li>
                        ))
                    }
            </ul>
        </>
    )
}

export default Header