import { useEffect } from "react"
import PageContainer from "./components/ui-kit/PageContainer/PageContainer"
import { useLocalBikes, useStateValue } from "./state/StateProvider/useStateValue"
import Preloader from "./components/ui-kit/Preloader/Preloader"
import { getLocalBikes } from "./LocalStorage"
import Cart from "./components/Cart/Cart"

const CartPage = () => {
  const { isLoading } = useStateValue();
  const ids = getLocalBikes();
  const localBikes = useLocalBikes(ids);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(localBikes)
  }, [localBikes]);


  if (isLoading || !localBikes) {
    return <Preloader color={'var(--element-background-color)'} />
  }
  return (
    <PageContainer hash="cart" isSingle={true} isDecore={true}>
      <Cart data={localBikes}/>
    </PageContainer>
  )
}


export default CartPage