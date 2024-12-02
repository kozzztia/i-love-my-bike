import {useParams } from 'react-router-dom'
import PageContainer from './components/ui-kit/PageContainer/PageContainer';
import { useCategoryBikes } from './state/StateProvider/useStateValue';
import CategoryList from './components/CategoryList/CategoryList';


const CategoryPage = () => {
  const { category } = useParams();
  const categoryBikes = useCategoryBikes(category!);

  return (
    <PageContainer hash="category" isSingle={true} isDecore={false}>
      <h2>Page: {category}</h2>
      <CategoryList categoryBikes={categoryBikes}/>
    </PageContainer>
  );
};

export default CategoryPage;
