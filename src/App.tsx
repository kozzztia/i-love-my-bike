import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./Home";
import Page from "./Page";
import Basket from "./Basket";
import BikePage from "./BikePage";


function App() {

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/:category" element={<Page/>} />
          <Route path="/:category/:id" element={<BikePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
