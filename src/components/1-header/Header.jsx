import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedMode = localStorage.getItem('isLightMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // Apply the class to the body based on the saved state
    if (isLightMode) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [isLightMode]);

  const toggleClass = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    localStorage.setItem('isLightMode', JSON.stringify(newMode));
  };

  return (
    <header className="flex">
      <button onClick={() => {
        setshowModal(true)
      }
      } className="icon-navicon flex"></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="/">Home  </a>
          </li>
          
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>{" "}
      {/*icon-sun - icon-moon-o*/}
      <button onClick={toggleClass} className="mode flex">
        <span className={isLightMode ? "icon-sun" : "icon-moon-o"}></span>
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close2"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="/skills">Skills</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
