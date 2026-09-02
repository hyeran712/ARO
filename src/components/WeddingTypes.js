import React from "react";
import "./WeddingTypes.css";

const WeddingTypes = () => {
  const weddingTypes = [
    {
      id: 1,
      name: "Garden Wedding",
      description: "정원의 자연스러운 아름다움을 배경으로 한 로맨틱한 웨딩",
      image:
        "url(https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop)",
    },
    {
      id: 2,
      name: "Outdoor Wedding",
      description: "야외의 개방감 속에서 펼쳐지는 자유로운 웨딩",
      image:
        "url(https://images.unsplash.com/photo-1528384380856-6e9a2f96db15?w=600&h=400&fit=crop)",
    },
    {
      id: 3,
      name: "House Wedding",
      description: "집의 따뜻함을 담은 아늑하고 개인적인 웨딩",
      image:
        "url(https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop)",
    },
    {
      id: 4,
      name: "Small Wedding",
      description: "가까운 사람들과 함께하는 소중한 웨딩",
      image:
        "url(https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop)",
    },
  ];

  return (
    <section className="wedding-types" id="wedding">
      <div className="wedding-types-container">
        <p className="section-label">WEDDING CATERING</p>
        <h2 className="section-title">Our Wedding Styles</h2>
        <div className="wedding-types-grid">
          {weddingTypes.map((type) => (
            <div key={type.id} className="wedding-type-card">
              <div
                className="wedding-type-image"
                style={{ backgroundImage: type.image }}
              />
              <div className="wedding-type-content">
                <h3>{type.name}</h3>
                <p>{type.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="wedding-types-button">
          <button className="btn btn-primary">VIEW WEDDING</button>
        </div>
      </div>
    </section>
  );
};

export default WeddingTypes;
