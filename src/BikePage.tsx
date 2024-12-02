import { useParams } from 'react-router-dom'
import PageContainer from './components/ui-kit/PageContainer/PageContainer'
import { getDictionary } from './consts/dictionary'

const BikePage = () => {
  const { id , category}  = useParams()
  return (
    <PageContainer hash="bike" isSingle={true} isDecore={false}>
        <h4>{getDictionary('bikeTitle') + ' ' + id + ' ' + category}</h4>

        
    </PageContainer>
  )
}

export default BikePage