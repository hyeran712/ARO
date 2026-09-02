import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const galleryItems = [
    {
      id: 1,
      category: "WEDDING",
      image:
        "url(https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop)",
      size: "large-v",
    },
    {
      id: 2,
      category: "FOOD",
      image:
        "url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=400&fit=crop)",
      size: "small",
    },
    {
      id: 3,
      category: "TABLE",
      image:
        "url(https://images.unsplash.com/photo-1519671482677-0b5ca5ed4899?w=400&h=400&fit=crop)",
      size: "medium",
    },
    {
      id: 4,
      category: "DETAIL",
      image:
        "url(https://images.unsplash.com/photo-1515934751635-c06debe6df57?w=300&h=300&fit=crop)",
      size: "small",
    },
    {
      id: 5,
      category: "WEDDING",
      image:
        "url(https://images.unsplash.com/photo-1528384380856-6e9a2f96db15?w=400&h=300&fit=crop)",
      size: "medium",
    },
    {
      id: 6,
      category: "FOOD",
      image:
        "url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=400&fit=crop)",
      size: "small",
    },
    {
      id: 7,
      category: "TABLE",
      image:
        "url(https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=400&fit=crop)",
      size: "medium",
    },
    {
      id: 8,
      category: "DETAIL",
      image:
        "url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop)",
      size: "small",
    },
    {
      id: 9,
      category: "WEDDING",
      image:
        "url(https://images.unsplash.com/photo-1525514747247-8e29e9e7d624?w=400&h=500&fit=crop)",
      size: "large-v",
    },
  ];

  const categories = ["ALL", "WEDDING", "FOOD", "TABLE", "DETAIL"];
  const filteredItems =
    activeFilter === "ALL"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <p className="section-label">OUR GALLERY</p>
        <h2 className="section-title">Visual Stories</h2>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? "active" : ""}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-item gallery-item-${item.size}`}
            >
              <div
                className="gallery-item-image"
                style={{ backgroundImage: item.image }}
              />
              <div className="gallery-item-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
