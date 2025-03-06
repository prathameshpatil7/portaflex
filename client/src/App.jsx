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
import Portfolio2 from "./pages/dynamic-black";
import Portfolio3 from "./pages/port3";
import Template from "./container/template";
import PortfolioLayout from "./container/portfolio-layout";
import Resume from "./pages/Resume";
import Portfolio4 from "./pages/port4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <LandingPage />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/set-route"
          element={
            <Layout>
              <SetRoute />
            </Layout>
          }
        />

        <Route path="/portfolio" element={<PortfolioLayout />}>
          <Route path="port1" element={<Portfolio1 />} />
          <Route path="port2" element={<Portfolio2 />} />
          <Route path="port3" element={<Portfolio3 />} />
          <Route path="port4" element={<Portfolio4 />} />
        </Route>
        <Route path="/resume" element={<Resume />} />

        <Route path="/portfolio/:routeName" element={<PortfolioLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
