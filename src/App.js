import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/navbar.css";
import "./styles/slide.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/contactanos.css";
import "./styles/conocenos.css";
import "./styles/servicios.css";
import "./styles/main.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Conocenos from "./pages/Conocenos";
import Contactanos from "./pages/Contactanos";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/conocenos" element={<Conocenos />} />
        <Route exact path="/contactanos" element={<Contactanos />} />
        <Route exact path="/servicios" element={<Servicios />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
