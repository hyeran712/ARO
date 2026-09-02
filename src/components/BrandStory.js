import React from "react";
import "./BrandStory.css";

const BrandStory = () => {
  return (
    <section className="brand-story" id="about">
      <div className="brand-story-container">
        <div className="brand-story-image">
          <div
            className="brand-story-img"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1525514747247-8e29e9e7d624?w=600&h=800&fit=crop)",
            }}
          />
        </div>
        <div className="brand-story-content">
          <p className="brand-story-label">OUR STORY</p>
          <h2 className="brand-story-title">WE CREATE MOMENTS</h2>
          <p className="brand-story-text">
            우리는 단순한 음식을 제공하는 것이 아니라, 특별한 순간을 완성하는
            경험을 만듭니다. 프리미엄 재료와 섬세한 디자인으로 각각의 웨딩을
            예술 작품처럼 선보입니다.
          </p>
          <p className="brand-story-text">
            야외 웨딩의 자연스러운 아름다움부터 가든 웨딩의 세련된 감각까지,
            우리의 케이터링은 여러분의 스토리를 더욱 빛나게 합니다.
          </p>
          <div className="brand-story-highlights">
            <div className="highlight-item">
              <h3>Premium Quality</h3>
              <p>최고의 재료로 만드는 감성적인 요리</p>
            </div>
            <div className="highlight-item">
              <h3>Full Styling</h3>
              <p>식탁부터 전체 공간까지 아름답게 연출</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
