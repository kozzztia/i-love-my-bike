import { useEffect } from 'react';
import style from './style.module.css';
import { useLocation } from 'react-router-dom';
import { categoryFilters, categoryLinks, navLinks } from '../../consts/consts';
import BikeLink from '../ui-kit/BikeLink/BikeLink';
import HashLink from '../ui-kit/HashLink/HashLink';



const Header = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash ? location.hash.replace('#', '') : '';
        document.title = `${location.pathname.replace(/\//g, '') || 'main'}${hash === 'main' ? '' : ` ${hash}`}`.toLocaleUpperCase();
    }, [location]);

    return (
        <>
            <ul className={style.menu}>
                <li>
                    <h3>
                        {location.pathname === '/'
                            ? 'MAIN'
                            : `${location.pathname.split(/\//g).join(' ').toLocaleUpperCase()}`}
                    </h3>

                </li>
                {
                    location.pathname === '/' ?
                        navLinks.map(({ id, url, title }) => (
                            <li key={id}>
                                <HashLink url={url} title={title} />
                            </li>
                        ))
                        :
                        categoryLinks.some(link => `${link.url}` === location.pathname.slice(1)) ?
                            categoryFilters.map(({ id, url, title }) => (
                                <li key={id}>
                                    <HashLink url={url} title={title} />
                                </li>
                            )) :
                            <li>single bike</li>
                }
            </ul>
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

