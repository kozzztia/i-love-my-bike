import PageContainer from '../ui-kit/PageContainer/PageContainer';
import { getDictionary } from '../../consts/dictionary';

const Contacts = () => {
  return (
    <PageContainer hash="contacts" isSingle={false} isDecore={false}>
      <h4>{getDictionary('contactsTitle')}</h4>
    </PageContainer>
  )
}

export default Contacts