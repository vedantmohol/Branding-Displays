import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";

import bannermens from "./assets/aboutusbanner.png";
import Enquiry from "./pages/Enquiry";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<Category category="aboutus" banner={bannermens}/>}></Route>
        <Route path="/products" element={<Category category="products"/>}></Route>
        <Route path="/enquiry" element={<Enquiry/>}></Route>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}></Route>
        </Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </main>
  )
}