import Banner from "./components/Banner/Banner"
import Top from "./components/Top/Top"
import About from "./components/About/About"
import Contacts from "./components/Contacts/Contacts"
import { useRandomBike, useStateValue, useTopThreeBikes } from "./state/StateProvider/useStateValue"
import Preloader from "./components/ui-kit/Preloader/Preloader"
import ErrorPage from "./ErrorPage"
import { useEffect } from "react"

const HomePage = () => {
  const { isLoading, error } = useStateValue();
  const bike = useRandomBike();
  const topThreeBikes = useTopThreeBikes();

  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  if (error) {
    return <ErrorPage error={error} />
  }

  if (isLoading || !bike) {
    return <Preloader color={'var(--element-background-color)'} />;
  }

  return (
    <>
      <Banner bike={bike} />
      <Top bikes={topThreeBikes} />
      <About />
      <Contacts />
    </>
  );
};


export default HomePage