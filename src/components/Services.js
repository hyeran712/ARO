import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "CATERING",
      description:
        "프리미엄 재료와 정성스러운 조리로 만드는 감성적인 요리 서비스",
    },
    {
      id: 2,
      number: "02",
      title: "TABLE STYLING",
      description: "테이블 세팅부터 플로랄 데코레이션까지 완벽한 테이블 연출",
    },
    {
      id: 3,
      number: "03",
      title: "EVENT STYLING",
      description:
        "입장부터 마무리까지 전체 공간을 아름답게 연출하는 이벤트 스타일링",
    },
    {
      id: 4,
      number: "04",
      title: "CORPORATE EVENT",
      description: "기업 행사와 브랜드 이벤트를 위한 전문적인 케이터링 서비스",
    },
  ];

  return (
    <section className="services" id="service">
      <div className="services-container">
        <p className="section-label">OUR SERVICES</p>
        <h2 className="section-title">What We Offer</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <div className="service-number">{service.number}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
