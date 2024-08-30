import Lottie from "lottie-react";
import "./Contact.css";
// import contactUs from '../../../public/animation/contact-us-anim.json'
// import test from '../../../public/animation/Animation-1.json';
import sunDone from "../../animation/blue-done.json";
import contactUs from "../../animation/contact-us-anim.json";
import { useForm, ValidationError } from "@formspree/react";


const Contact = () => {
  const [state, handleSubmit] = useForm("xkgwbbeo");

  return (
    <>
      <div className="contact-head">
        <h1 className="flex">
          <span className="icon-envelope2"></span>
          Contact Us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          nisi.
        </p>
      </div>
      <section className="contact-main flex">
        <form onSubmit={handleSubmit} className="contact-form  flex">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex">
            <label htmlFor="message">Your Message:</label>
            <textarea
              placeholder="Enter Your Message Here..."
              required
              id="message"
              name="message"
            ></textarea>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Submiting ..." : "Submit"}
          </button>
          {state.succeeded && (
            <div className="done-animation flex">
              <Lottie
                loop={false}
                className="lottie"
                style={{ height: "100px" }}
                animationData={sunDone}
              ></Lottie>

              <h1 className="">Your Message Has Been Sent Successfully 👌</h1>
            </div>
          )}
        </form>
        <section className="contact-animation"><Lottie style={{height:"25rem"}} animationData={contactUs}></Lottie></section>
      </section>
    </>
  );
};

export default Contact;
