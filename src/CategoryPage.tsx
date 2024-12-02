import {useParams } from 'react-router-dom'
import PageContainer from './components/ui-kit/PageContainer/PageContainer';
import { useCategoryBikes } from './state/StateProvider/useStateValue';
import BikeLink from './components/ui-kit/BikeLink/BikeLink';
import { getDictionary } from './consts/dictionary';


const CategoryPage = () => {
  const { category } = useParams();
  const categoryBikes = useCategoryBikes(category?.toLocaleLowerCase() as string);
    return (
      <PageContainer hash="category" isSingle={true} isDecore={false}>
        <h2>Page : {category}</h2>
        {
          categoryBikes.map((bike) => (
            <div key={bike.id}>
              <h5>{bike.name}</h5>
              <p>{bike.description}</p>
              <img src={bike.icon} alt={bike.name} width={100} height={100} />
              <BikeLink title={`${getDictionary('linkTitle')} ${bike.name}`} url={`/${bike.category}/${bike.id}`}/>
            </div>
          ))
        }
      </PageContainer>
    )
}

export default CategoryPage