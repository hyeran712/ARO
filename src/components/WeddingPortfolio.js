import React from "react";
import "./WeddingPortfolio.css";

const WeddingPortfolio = () => {
  const weddings = [
    {
      id: 1,
      type: "GARDEN WEDDING",
      title: "J & H WEDDING",
      location: "SEOUL",
      date: "MAY 2026",
      image:
        "url(https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=500&fit=crop)",
    },
    {
      id: 2,
      type: "OUTDOOR WEDDING",
      title: "S & M WEDDING",
      location: "JEJU",
      date: "JUNE 2026",
      image:
        "url(https://images.unsplash.com/photo-1528384380856-6e9a2f96db15?w=600&h=500&fit=crop)",
    },
    {
      id: 3,
      type: "HOUSE WEDDING",
      title: "K & Y WEDDING",
      location: "GANGNAM",
      date: "JULY 2026",
      image:
        "url(https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=500&fit=crop)",
    },
  ];

  return (
    <section className="wedding-portfolio">
      <div className="wedding-portfolio-container">
        <p className="section-label">OUR WEDDINGS</p>
        <h2 className="section-title">Recent Projects</h2>

        <div className="wedding-portfolio-grid">
          {weddings.map((wedding) => (
            <div key={wedding.id} className="wedding-portfolio-item">
              <div
                className="wedding-portfolio-image"
                style={{ backgroundImage: wedding.image }}
              >
                <div className="wedding-portfolio-overlay" />
              </div>
              <div className="wedding-portfolio-content">
                <p className="wedding-type">{wedding.type}</p>
                <h3 className="wedding-title">{wedding.title}</h3>
                <p className="wedding-location">
                  {wedding.location} · {wedding.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingPortfolio;
