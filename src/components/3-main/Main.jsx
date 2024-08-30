import { useState } from "react";
import "./Main.css";
import { motion, AnimatePresence } from "framer-motion";
const Main = () => {
  const description =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Liberoexplicabo esse beatae quas dignissimos";
  const items = [
    { name: "main-card-1", title: "React Project", description, img: "/1.jpg" },
    {
      name: "main-card-2",
      title: "React && CSS Project",
      description,
      img: "/2.jpg",
    },
    { name: "main-card-3", title: "CSS Project", description, img: "/3.jpg" },
    { name: "main-card-4", title: "React Project", description, img: "/4.jpg" },
    { name: "main-card-5", title: "CSS Project", description, img: "/5.jpg" },
    {
      name: "main-card-6",
      title: "JavaScript Project",
      description,
      img: "/6.jpg",
    },
    {
      name: "main-card-7",
      title: "Node && Express",
      description,
      img: "/7.jpg",
    },
    { name: "main-card-8", title: "React && MUI", description, img: "/8.jpg" },
    { name: "main-card-9", title: "HTML && CSS", description, img: "/9.jpg" },
  ];
  const htmlCss = items.filter(
    (obj) => obj.title.includes("CSS") || obj.title.includes("HTML")
  );
  const React = items.filter((obj) => obj.title.includes("React"));
  const JavaScript = items.filter((obj) => obj.title.includes("JavaScript"));
  const Node = items.filter((obj) => obj.title.includes("Node"));
  const [arr, setarr] = useState(items);
  const [btnmode, setbtnmode] = useState("all");
  return (
    <main className="flex">
      <section className="left-section flex ">
        <button
          onClick={() => {
            setbtnmode("all");
            setarr(items);
          }}
          className={btnmode == "all" ? "active" : null}
        >
          All Pages
        </button>
        <button
          onClick={() => {
            setbtnmode("css");
            setarr(htmlCss);
          }}
          className={btnmode == "css" ? "active" : null}
        >
          HTML && CSS
        </button>
        <button
          onClick={() => {
            setbtnmode("js");
            setarr(JavaScript);
          }}
          className={btnmode == "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setbtnmode("react");
            setarr(React);
          }}
          className={btnmode == "react" ? "active" : null}
        >
          React && MUI
        </button>
        <button
          onClick={() => {
            setbtnmode("node");
            setarr(Node);
          }}
          className={btnmode == "node" ? "active" : null}
        >
          Node && Express
        </button>
      </section>
      <motion.section layout className="right-section  grid">
      <AnimatePresence>
       
          {arr.map((item) => {
            return (
              <motion.div layout key={item.name} className="cards main-card-1">
                <img src={item.img} alt="lp1.jpg" />
                <div className="text">
                  <h1>{item.title}</h1>
                  <style></style>
                  <p>{item.description}</p>
                </div>
                <div className="card-icons  flex">
                  <div className="icons  flex">
                    <a href="" className="icon-link1"></a>
                    <a href="" className="icon-github"></a>
                  </div>
                  <div className="more flex">
                    <a href="" className=" more">more</a>
                    <span className="icon-arrow-right2"></span>
                  </div>
                </div>
              </motion.div>
            );
          })}
       
      </AnimatePresence>
      </motion.section>
    </main>
  );
};

export default Main;
