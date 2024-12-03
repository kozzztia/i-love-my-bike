import { useEffect } from "react"
import PageContainer from "./components/ui-kit/PageContainer/PageContainer"
import { getDictionary } from "./consts/dictionary"
import { useStateValue } from "./state/StateProvider/useStateValue"
import Preloader from "./components/ui-kit/Preloader/Preloader"

const CartPage = () => {
  const {isLoading} = useStateValue()
  useEffect(()=>{
    window.scrollTo(0, 0)
  })
  if(isLoading){
    return <Preloader color={'var(--element-background-color)'}/>
  }
  return (
    <PageContainer hash="cart" isSingle={true} isDecore={true}>
      <h4>{getDictionary('cartTitle')}</h4>
    </PageContainer>
  )
}


export default CartPage