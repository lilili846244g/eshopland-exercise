import "./app.scss";
import Header from "./components/Header";
import Section from "./components/Section";
import Smallsection from "./components/Smallsection";
import CreamSection from "./components/CreamSection";
import Carousel from "./components/Carousel";
import { Data } from "./components/Data";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Smallsection />
      <CreamSection />
      <Carousel slides={Data} />
      <Footer />
    </div>
  );
}

export default App;
