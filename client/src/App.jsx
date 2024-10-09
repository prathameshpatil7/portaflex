import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Login from "./container/login";
import Register from "./container/register";
import Dashboard from "./container/dashboard";
import Layout from "./container/layout";
import LandingPage from "./container/landingPage";
import SetRoute from "./container/setRoute";
import Portfolio1 from "./pages/port1";
import Portfolio2 from "./pages/port2";
import Portfolio3 from "./pages/port3";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/set-route" element={<SetRoute />} />
          <Route path="/port1" element={<Portfolio1 />} />
          <Route path="/port2" element={<Portfolio2 />} />
          <Route path="/port3" element={<Portfolio3 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
