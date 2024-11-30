import Banner from "./components/Banner/Banner"
import Top from "./components/Top/Top"
import About from "./components/About/About"
import Contacts from "./components/Contacts/Contacts"
import { useStateValue } from "./state/StateProvider/useSateValue"
import Preloader from "./components/ui-kit/Preloader/Preloader"

const Home = () => {
  const { bikes, isLoading } = useStateValue();
  console.log(bikes)
  if (isLoading) {
    return <Preloader color={'var(--element-background-color)'}/>
  }
  return (
    <>
        <Banner/>
        <Top/>
        <About/>
        <Contacts/>
    </>
  )
}

export default Home