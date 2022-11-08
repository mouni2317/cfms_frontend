import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth";
import ProductList from "./Components/ProductList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard"
import NavBar from "./Components/NavBar";
import Product from "./Components/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="content-container">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/product/:id" element={<Product/>}/>

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
