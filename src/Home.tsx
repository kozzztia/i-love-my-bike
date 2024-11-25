import Banner from "./components/Banner/Banner"

const Home = () => {
  return (
    <>
        <Banner/>
        <div id="about" style={{height: '60vh', paddingTop: 'var(--header-height)'}}>
            <h2>about</h2>
        </div>
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