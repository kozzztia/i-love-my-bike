import {useParams } from 'react-router-dom'
import PageContainer from './components/ui-kit/PageContainer/PageContainer';
import { useCategoryBikes } from './state/StateProvider/useStateValue';
import CategoryList from './components/CategoryList/CategoryList';
import { useEffect } from 'react';
import Preloader from './components/ui-kit/Preloader/Preloader';


const CategoryPage = () => {
  const { category } = useParams();
  const categoryBikes = useCategoryBikes(category!);
  useEffect(()=>{
    window.scrollTo(0, 0)
  })
  if(!categoryBikes){
    return <Preloader />
  }
  return (
    <PageContainer hash="category" isSingle={true} isDecore={false}>
      <h2>Page: {category}</h2>
      <CategoryList categoryBikes={categoryBikes}/>
    </PageContainer>
  );
};

export default CategoryPage;
