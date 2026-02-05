import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/why" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>

    </Router>
  );
}
