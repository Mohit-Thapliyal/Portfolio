import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotFound from "./components/UI/NotFound";

function App() {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center overflow-x-hidden antialiased text-white App bg-primary">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
