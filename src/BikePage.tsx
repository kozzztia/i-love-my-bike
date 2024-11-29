import { useParams } from 'react-router-dom'
import PageContainer from './components/ui-kit/PageContainer/PageContainer'

const BikePage = () => {
  const id = useParams().id
  return (
    <PageContainer hash="bike" isSingle={true} isDecore={false}>
        <h4>bike number {id}</h4>
    </PageContainer>
  )
}

export default BikePage