import "./css/App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Services from "./components/Services";
import Protofolio from "./components/Protofolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Features />
      <Services />
      <Protofolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
