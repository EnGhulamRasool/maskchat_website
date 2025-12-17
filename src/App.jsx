// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Omnibox from "./pages/products/Omnibox";
import WhatsappStorefront from "./pages/products/WhatsappStorefront";
import AiChatbot from "./pages/products/AiChatbot";
import Newsletter from "./pages/products/Newsletter";
import Ecommerce from "./pages/Industries/Ecommerce";
import RealEstate from "./pages/Industries/RealEstate";
import Automotive from "./pages/Industries/Automotive";
import Education from "./pages/Industries/Education";
// import Education from "./pages/Industries/Education";
import Finance from "./pages/Industries/Finance";
import Pricing from "./pages/pricing";
import Blog from "./pages/resource/blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/products/omnibox" element={<Omnibox />} />
        <Route path="/products/WhatsappStorefront" element={<WhatsappStorefront />} />
        <Route path="/products/aichatbot" element={<AiChatbot />} />
        <Route path="/products/newsletter" element={<Newsletter />} />
        <Route path="/industries/ecommerce" element={<Ecommerce />} />
        <Route path="/industries/real-estate" element={<RealEstate />} />
        <Route path="/industries/automotive" element={<Automotive />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/finance" element={<Finance />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;