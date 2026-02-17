import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="properties" element={<Properties />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
