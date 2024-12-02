import { useEffect, useState } from 'react';
import { getDictionary } from '../../consts/dictionary';
import { BannerBikeType } from '../../types/BikeType';
import BikeLink from '../ui-kit/BikeLink/BikeLink';
import style from './style.module.css'
import { useLocation } from 'react-router-dom';

const CategoryList: React.FC<Props> = ({ categoryBikes, className }) => {
    const hash = useLocation().hash.slice(1);
    const [bikes, setBikes] = useState<BannerBikeType[] | []>([]);
    useEffect(() => {
        if(!hash){       
             setBikes(categoryBikes)
        }else if(hash === 'best'){
            setBikes(categoryBikes.sort((a, b) => b.rating - a.rating))
        }else if(hash === 'cheap'){
            setBikes(categoryBikes.sort((a, b) => a.price - b.price))
        }else if(hash === 'expensive'){
            setBikes(categoryBikes.sort((a, b) => b.price - a.price))
        }else{
            setBikes(categoryBikes)
        }

    }, [hash, categoryBikes])

    return (
        <ul className={[style.list, className].join(" ")}>
            {
                bikes.map((bike) => (
                    <li key={bike.id}>
                        <img src={bike.icon} alt={bike.name} width={100} height={100} />
                        <p>{bike.title}</p>
                        <p>{bike.price}</p>
                        <p>{bike.rating}</p>
                        <p>{bike.status}</p>
                        <p>{bike.description}</p>
                        <BikeLink title={`${getDictionary('linkTitle')} ${bike.name}`} url={`/${bike.category}/${bike.id}`} />
                    </li>
                ))
        }
        </ul>
    )
}

export default CategoryList;

type Props = {
    categoryBikes: BannerBikeType[] | [],
    className?: string,
}