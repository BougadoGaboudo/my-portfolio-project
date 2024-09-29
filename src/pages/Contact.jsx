import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <hr />
      <section className="contact-section">
            <div className="contact">
                <h1>Contact</h1>
                <h4>bougadogaboudo@gmail.com</h4>
                <p>Currently accepting business and commercial-type inquires.</p>
                <p>I do not accept personal commissions at this time.</p>
                <p>Please provide name, project information, schedule and socials (if content creator).</p>
            </div>
        </section>
      <hr />
      <Footer />
    </>
  );
};

export default Contact;
