import PageContainer from "./components/ui-kit/PageContainer/PageContainer"
import { getDictionary } from "./consts/dictionary"

const BasketPage = () => {
  return (
    <PageContainer hash="basket" isSingle={true} isDecore={true}>
      <h4>{getDictionary('basketTitle')}</h4>
    </PageContainer>
  )
}


export default BasketPage