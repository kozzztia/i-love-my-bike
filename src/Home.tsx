import Banner from "./components/Banner/Banner"
import TopThree from "./components/TopThree/TopThree"

const Home = () => {
  return (
    <>
        <Banner/>
        <TopThree/>
        <div id="projects" style={{height: '60vh', paddingTop: 'var(--header-height)'}}>
        <h2>projects</h2>
        </div>
        <div id="contact" style={{height: '60vh', paddingTop: 'var(--header-height)'}}>
        <h2>contact</h2>
        </div>
    </>
  )
}

export default Home