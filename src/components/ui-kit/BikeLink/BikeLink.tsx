import { NavLink } from 'react-router-dom'
import style from './style.module.css'

const BikeLink: React.FC<Props> = ({ title, url, className }) => {
    return (
        <NavLink to={url.toLocaleLowerCase()} className={({isActive})=>[style.bikeLink, className , isActive? style.active:""].join(" ")}>
            {title}
        </NavLink>
    )
}

export default BikeLink;


type Props = {
    title : string,
    url: string;
    className?: string
}