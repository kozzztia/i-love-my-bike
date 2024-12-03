import Banner from "./components/Banner/Banner"
import Top from "./components/Top/Top"
import About from "./components/About/About"
import Contacts from "./components/Contacts/Contacts"
import { useRandomBike, useStateValue, useTopThreeBikes } from "./state/StateProvider/useStateValue"
import Preloader from "./components/ui-kit/Preloader/Preloader"

const HomePage = () => {
  const { isLoading } = useStateValue();
  const bike = useRandomBike();
  const topThreeBikes = useTopThreeBikes();

  if (isLoading) {
    return <Preloader color={'var(--element-background-color)'} />;
  }

  if (!topThreeBikes) {
    return <div>No top bikes available</div>; // Резервный вариант, если нет топовых велосипедов
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