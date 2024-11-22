import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/MainLayout/Layout";
import Home from "./Home";


function App() {

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mtb" element={<h2>MTB</h2>} />
          <Route path="/road" element={<h2>ROAD</h2>} />
          <Route path="/bmx" element={<h2>BMX</h2>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
