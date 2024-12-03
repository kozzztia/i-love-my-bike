import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import BasketPage from "./BasketPage";
import BikePage from "./BikePage";


function App() {

  return (

      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/:category/:id" element={<BikePage />} />
          </Routes>
        </Layout>
      </Router>
  )
}

export default App
