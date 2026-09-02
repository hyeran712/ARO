import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import WeddingTypes from "./components/WeddingTypes";
import SignatureMenu from "./components/SignatureMenu";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import WeddingPortfolio from "./components/WeddingPortfolio";
import Process from "./components/Process";
import Instagram from "./components/Instagram";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BrandStory />
      <WeddingTypes />
      <SignatureMenu />
      <Gallery />
      <Services />
      <WeddingPortfolio />
      <Process />
      <Instagram />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
