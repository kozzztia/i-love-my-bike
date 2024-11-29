import { useParams } from 'react-router-dom'
import PageContainer from './components/ui-kit/PageContainer/PageContainer';
import { getDictionary } from './consts/dictionary';


const CategoryPage = () => {
  const { category } = useParams();
  if (category === 'mtb' || category === 'road' || category === 'bmx') {
    return (
      <PageContainer hash="category" isSingle={true} isDecore={false}>
        <h2>Page : {category}</h2>
      </PageContainer>
    )
  } else {
    return (
      <PageContainer hash="error" isSingle={true} isDecore={false}>
        <h4>{getDictionary('errorTitle')}</h4>
      </PageContainer>
    )
  }
  }

  export default CategoryPage