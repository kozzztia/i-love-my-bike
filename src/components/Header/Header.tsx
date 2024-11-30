import { useEffect } from 'react';
import style from './style.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { categoryLinks, navLinks } from '../../consts/consts';



const Header = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash ? location.hash.replace('#', '') : '';
        document.title = `${location.pathname.replace(/\//g, '') || 'main'}${hash === 'main' ? '' : ` ${hash}`}`.toLocaleUpperCase();
    }, [location]);

    return (
        <>
            <div className={style.menu}>
                <h2>
                    {location.pathname === '/' 
                        ? 'MAIN'
                        : `${location.pathname.split(/\//g).join(' ').toLocaleUpperCase()}`}
                </h2>
                <ul>
                    {
                        location.pathname === '/' ?

                            navLinks.map(({ id, url, title }) => (
                                <li key={id}>
                                    <a href={`/#${url}`}>{title}</a>
                                </li>
                            ))
                            :
                            <p>bikes folters</p>
                    }
                </ul>
            </div>
            <ul className={style.nav}>
                {
                    categoryLinks.map(({ id, url, title }) => (
                        <li key={id}>
                            <NavLink to={`/${url}`.toLocaleLowerCase()}>{title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Header