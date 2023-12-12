import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Educations from "./pages/Educations/Educations";
import TechStack from "./pages/TechStack/TechStack";
import Certificates from "./pages/certificate/Certificates";
import Contact from "./pages/Contact/Contact";
import { useTheme } from "./context/ThemeContext";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        {/* <h1>Nidish Malviya</h1> */}
        {/* <button className="btn btn-dark">Success</button> */}
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Educations />
          <TechStack />
          <Certificates />
          <Contact />
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#4542f5"
        style={{ backgroundColor: "#25f2e6", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
