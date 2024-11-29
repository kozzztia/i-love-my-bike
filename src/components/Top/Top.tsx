import { getDictionary } from '../../consts/dictionary';
import PageContainer from '../ui-kit/PageContainer/PageContainer';


const Top = () => { 
  return (
      <PageContainer hash="top" isSingle={false} isDecore={false}>
        <h4>{getDictionary('topTitle')}</h4>
      </PageContainer>
  )
}

export default Top