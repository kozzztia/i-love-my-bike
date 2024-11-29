import { getDictionary } from '../../consts/dictionary';
import PageContainer from '../ui-kit/PageContainer/PageContainer';

const Banner = () => {
  return (
    <PageContainer  hash="promotion" isSingle={false} isDecore={true}>
      <h4>{getDictionary('bannerTitle')}</h4>
    </PageContainer>
  );
};

export default Banner;
