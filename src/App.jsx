import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Dashboard from "./pages/user/Dashboard";
import Overview from "./pages/user/Overview";
import MyProperties from "./pages/user/MyProperties";
import Wallet from "./pages/user/Wallet";
import Payments from "./pages/user/Payments";
import Settings from "./pages/user/Settings";

function App() {
  return (
    <div className="">
      <Routes>
        <Route index element={<Home />} />
        <Route path="properties" element={<Properties />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        {/* Dashboard parent */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="myproperties" element={<MyProperties />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
