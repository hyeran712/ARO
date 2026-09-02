import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519671482677-0b5ca5ed4899?w=1200&h=800&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">
          <span>BEAUTIFULLY</span>
          <span>CATERED</span>
        </h1>
        <h2 className="hero-subtitle">UNFORGETTABLE MOMENTS</h2>
        <p className="hero-description">Wedding Catering & Event Styling</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">VIEW WEDDING</button>
          <button className="btn btn-secondary">INQUIRY</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
