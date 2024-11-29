import { useParams } from 'react-router-dom'
import PageContainer from './components/ui-kit/PageContainer/PageContainer';

const CategoryPage = () => {
  const { category } = useParams();
  return (
    <PageContainer hash="category" isSingle={true} isDecore={false}>
        <h2>Page : {category}</h2>
    </PageContainer>

  )
}

export default CategoryPage