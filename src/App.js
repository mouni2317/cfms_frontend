import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth";
import ProductList from "./Components/ProductList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <div className="content-container">
      <Header />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
