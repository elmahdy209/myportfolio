import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import Skills from "./components/6-skills/Skill";
import Calc from './components/calc/Calc'
import { useEffect,useState } from "react";
import Todo from "./components/todo/Todo";


function App() {

const [showIcons, setshowIcons] = useState(false);
useEffect (() => {
  const handleScroll = () => {
    if (window.scrollY >= 1200) {
      setshowIcons(true);
    } else if (window.scrollY === 0) {
      setshowIcons(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

,[]) 
  return (
    <>

    <Router>
      <div id="up" className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div id="projects" className="divider" />
                <Main />
                <div id="contact" className="divider" />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/todo" element={<Todo/>}/>
        </Routes>
        <div className="divider" />
        <Footer />
        {showIcons && (
            <>
              <a
                className="social-contact"
                href="https://wa.me/+201155547529"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="image" src="/whatsapp.png" alt="whatsapp" />
              </a>
              <a
                className="social-contact"
                href="https://t.me/electron209"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="up icon-paper-plane"></button>
              </a>
            </>
          )}
      </div>
    </Router>
  
    </>
  );
}

export default App;
