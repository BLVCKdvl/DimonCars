import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Conditions from "./pages/Conditions";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./assets/css/site.css";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
