import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../styles/home.css";

const Home = function Home() {
  return (
    <article className="home-content">
      <header className="header">
        <h1 className="header-title">
          <span className="italic">Welcome to</span> <Logo />
        </h1>
        <h2>
          <Link to="/shop" className="trans-hover btn-shopping">
            Go shopping
          </Link>
          <span className="italic">where you find everything you need.</span>
        </h2>
      </header>
    </article>
  );
};

export default Home;
