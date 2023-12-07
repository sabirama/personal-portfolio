import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
