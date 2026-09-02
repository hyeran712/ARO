import React from "react";
import "./Process.css";

const Process = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "INQUIRY",
      description: "웨딩 날짜, 인원, 예산 등을 알려주세요",
    },
    {
      id: 2,
      number: "02",
      title: "CONSULTING",
      description: "담당자와의 맞춤 상담으로 디자인 컨셉 수립",
    },
    {
      id: 3,
      number: "03",
      title: "MENU & STYLE",
      description: "메뉴 선정과 테이블 스타일링 결정",
    },
    {
      id: 4,
      number: "04",
      title: "TASTING",
      description: "본 행사 전 시음회를 통한 최종 확인",
    },
    {
      id: 5,
      number: "05",
      title: "WEDDING DAY",
      description: "완벽한 서빙과 스타일링으로 최고의 경험 선사",
    },
  ];

  return (
    <section className="process">
      <div className="process-container">
        <p className="section-label">HOW WE WORK</p>
        <h2 className="section-title">Our Process</h2>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={step.id} className="process-step">
              <div className="process-step-header">
                <div className="process-number">{step.number}</div>
                <h3 className="process-title">{step.title}</h3>
              </div>
              <p className="process-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="process-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
