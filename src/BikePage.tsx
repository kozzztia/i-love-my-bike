import { useParams } from 'react-router-dom'
import PageContainer from './components/ui-kit/PageContainer/PageContainer'
import { useSingleBike, useStateValue } from './state/StateProvider/useStateValue'
import { useEffect } from 'react'
import SingleBike from './components/SingleBike/SingleBike'
import Preloader from './components/ui-kit/Preloader/Preloader'

const BikePage = () => {
  const { id } = useParams<{ id: string }>();
  const singleBike = useSingleBike(Number(id));
  const {isLoading} = useStateValue()

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  if(isLoading || !singleBike){
    return <Preloader color={'var(--element-background-color)'}/>
  }
  return (
    <PageContainer hash="bike" isSingle={true} isDecore={false}>
      <SingleBike singleBike={singleBike}/>
    </PageContainer>
  );
};

export default BikePage