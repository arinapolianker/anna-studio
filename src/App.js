import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Head from "./Head";
import Footer from "./Footer";
import Home from "./Home";
import Works from "./Works";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="content-wrapper">
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
