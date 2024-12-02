import { useEffect } from 'react';
import style from './style.module.css';
import { useLocation } from 'react-router-dom';
import { categoryFilters, categoryLinks, navLinks } from '../../consts/consts';
import BikeLink from '../ui-kit/BikeLink/BikeLink';



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
                                    <a href={`${url}`}>{title}</a>
                                </li>
                            ))
                            :
                            categoryLinks.some(link => `${link.url}` === location.pathname.slice(1)) ?
                                categoryFilters.map(({ id, url, title }) => (
                                    <li key={id}>
                                        <a href={`${url}`}>{title}</a>
                                    </li>
                                )) :
                                <li>single bike</li>
                    }
                </ul>
            </div>
            <ul className={style.nav}>
                {
                    categoryLinks.map(({ id, url, title }) => (
                        <li key={id}>
                            <BikeLink title={title} url={`/${url.toLocaleLowerCase()}`} />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Header

