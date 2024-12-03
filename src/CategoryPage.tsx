import {useParams } from 'react-router-dom'
import PageContainer from './components/ui-kit/PageContainer/PageContainer';
import { useCategoryBikes, useStateValue } from './state/StateProvider/useStateValue';
import CategoryList from './components/CategoryList/CategoryList';
import { useEffect } from 'react';
import Preloader from './components/ui-kit/Preloader/Preloader';


const CategoryPage = () => {
  const { category } = useParams();
  const categoryBikes = useCategoryBikes(category!);
  const {isLoading} = useStateValue()
  useEffect(()=>{
    window.scrollTo(0, 0)
  })
  if(isLoading || !categoryBikes){
    return <Preloader color={'var(--element-background-color)'}/>
  }
  return (
    <PageContainer hash="category" isSingle={true} isDecore={false}>
      <h2>Page: {category}</h2>
      <CategoryList categoryBikes={categoryBikes}/>
    </PageContainer>
  );
};

export default CategoryPage;
