import React from "react";
import "./SignatureMenu.css";

const SignatureMenu = () => {
  const menuItems = [
    {
      id: 1,
      category: "APPETIZER",
      name: "Amuse Bouche Selection",
      image:
        "url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop)",
      size: "large",
    },
    {
      id: 2,
      category: "MAIN",
      name: "Premium Beef Selection",
      image:
        "url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=500&fit=crop)",
      size: "medium",
    },
    {
      id: 3,
      category: "DESSERT",
      name: "Signature Cakes & Petit Fours",
      image:
        "url(https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop)",
      size: "medium",
    },
    {
      id: 4,
      category: "BEVERAGE",
      name: "Wine & Champagne Pairing",
      image:
        "url(https://images.unsplash.com/photo-1510812431401-41d2cabf4135?w=500&h=400&fit=crop)",
      size: "small",
    },
    {
      id: 5,
      category: "APPETIZER",
      name: "Seafood Delights",
      image:
        "url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop)",
      size: "small",
    },
  ];

  return (
    <section className="signature-menu" id="menu">
      <div className="signature-menu-container">
        <p className="section-label">SIGNATURE MENU</p>
        <h2 className="section-title">Culinary Experience</h2>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className={`menu-item menu-item-${item.size}`}>
              <div
                className="menu-item-image"
                style={{ backgroundImage: item.image }}
              />
              <div className="menu-item-content">
                <p className="menu-item-category">{item.category}</p>
                <h3 className="menu-item-name">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureMenu;
