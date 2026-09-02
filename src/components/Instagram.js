import React from "react";
import "./Instagram.css";

const Instagram = () => {
  const posts = [
    {
      id: 1,
      image:
        "url(https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop)",
    },
    {
      id: 2,
      image:
        "url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop)",
    },
    {
      id: 3,
      image:
        "url(https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=400&fit=crop)",
    },
    {
      id: 4,
      image:
        "url(https://images.unsplash.com/photo-1525514747247-8e29e9e7d624?w=400&h=400&fit=crop)",
    },
    {
      id: 5,
      image:
        "url(https://images.unsplash.com/photo-1528384380856-6e9a2f96db15?w=400&h=400&fit=crop)",
    },
    {
      id: 6,
      image:
        "url(https://images.unsplash.com/photo-1515934751635-c06debe6df57?w=400&h=400&fit=crop)",
    },
  ];

  return (
    <section className="instagram">
      <div className="instagram-container">
        <p className="section-label">FOLLOW OUR MOMENTS</p>
        <h2 className="section-title">@cateringbrand</h2>

        <div className="instagram-grid">
          {posts.map((post) => (
            <div
              key={post.id}
              className="instagram-item"
              style={{ backgroundImage: post.image }}
            >
              <div className="instagram-overlay">
                <span className="instagram-icon">♥</span>
              </div>
            </div>
          ))}
        </div>

        <div className="instagram-button">
          <button className="btn btn-secondary">FOLLOW ON INSTAGRAM</button>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
