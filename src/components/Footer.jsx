import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <section className="flex">
        <h2>Movie DB</h2>
        <p>
          <Link to="/react_movieDB" onClick={scrollTop}>Home</Link>
        </p>
        <p>
          <Link to="/react_movieDB/about">About</Link>
        </p>
      </section>
      <div className="credit">
        © 2023 by 
        <span> c lee</span> | all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
