import { getDictionary } from '../../consts/dictionary'
import PageContainer from '../ui-kit/PageContainer/PageContainer'
const About = () => {
  return (
    <PageContainer hash="about" isSingle={false} isDecore={false}>
      <h4>{getDictionary('aboutTitle')}</h4>
    </PageContainer>
  )
}

export default About