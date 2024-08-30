import "./Calc.css";
import { calcfun } from "./CalcScript";
import { useEffect, useState } from "react";
const Calc = () => {
  const [calcMode, setcalcMode] = useState(false);
  function handleLightMode() {
    setcalcMode(true);
  }
  function handleDarkMode(){
    setcalcMode(false)
  }
  useEffect(() => {
    calcfun();
  }, []);
  return (
    <main className="calc-main  flex">
      <h1>Calculator</h1>
      <p>
        This Application Coded By Elmahdy Abdulla , &#169; All CopyRights
        Reserved
      </p>
      <div className={calcMode == true?"app flex calc-light":"app flex "}>
        <div className="mode  flex">
          <span
            onClick={() => {
              handleLightMode();
            }}
            className="icon-sun"
          ></span>
          <span
            onClick={() => {
              handleDarkMode();
            }}
            className="icon-moon-o"
          ></span>
        </div>
        <div className="calculator flex ">
          <div className="display flex ">
            <div className="content ">
              <div className="input"></div>
              <div className="output">0</div>
            </div>
          </div>
          <div className="keys grid">
            <div data-key="clear" className="key action">
              <span>AC</span>
            </div>
            <div data-key="brackets" className="key action">
              <span className="brackets">( )</span>
            </div>
            <div data-key="%" className="key action">
              <span>%</span>
            </div>
            <div data-key="/" className="key operator">
              <span>÷</span>
            </div>
            <div data-key="7" className="key">
              <span>7</span>
            </div>
            <div data-key="8" className="key">
              <span>8</span>
            </div>
            <div data-key="9" className="key">
              <span>9</span>
            </div>
            <div data-key="*" className="key operator">
              <span>x</span>
            </div>
            <div data-key="4" className="key">
              <span>4</span>
            </div>
            <div data-key="5" className="key">
              <span>5</span>
            </div>
            <div data-key="6" className="key">
              <span>6</span>
            </div>
            <div data-key="-" className="key operator">
              <span>-</span>
            </div>
            <div data-key="1" className="key">
              <span>1</span>
            </div>
            <div data-key="2" className="key">
              <span>2</span>
            </div>
            <div data-key="3" className="key">
              <span>3</span>
            </div>
            <div data-key="+" className="key operator">
              <span>+</span>
            </div>
            <div data-key="del" className="key action">
              <span>del</span>
            </div>
            <div data-key="0" className="key">
              <span>0</span>
            </div>
            <div data-key="." className="key">
              <span>.</span>
            </div>
            <div data-key="=" className="key operator">
              <span>=</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calc;
