import React, { useState } from "react";
import { GoPlusCircle, GoXCircle } from "react-icons/go"; 
import "../styles/components/WorkExperience.scss";

const WorkExperience = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    console.log("Clicked Card Index:", index);
    setActiveCard(activeCard === index ? null : index);
  };

  const workExperiences = [
    {
      id: 1,
      company: "(주)제타큐브",
      period: "2024.03 - 2024.09",
      description: "탈중앙화 WEB3.0 스토리지 솔루션",
      details: {
        "Front-End": [
          "스테이킹풀 프론트 템플릿 수정작업(BootStrap)",
          "Spring Boot thymeleaf MVC 패턴 view part html+css+js 작업",
          "Echart로 데이터 시각화 구현",
          <a href="https://service.nanodc.info/index" target="_blank" rel="noopener noreferrer">
            https://service.nanodc.info/index
          </a>,
        ],
        "Back-End": ["Spring Boot 카카오써트 본인인증 API 적용"],
      },
    },
    {
      id: 2,
      company: "스타트업 A",
      period: "2023.06 - 2024.02",
      description: "AI 기반 추천 시스템 개발",
      details: {
        "Machine Learning": ["AI 모델 개발 및 튜닝", "MLflow를 활용한 모델 버전 관리"],
        "Data Engineering": ["Kafka 기반 실시간 데이터 처리", "Spark를 이용한 대용량 데이터 처리"],
      },
    },
    {
      id: 3,
      company: "기업 B",
      period: "2022.01 - 2023.05",
      description: "클라우드 기반 SaaS 서비스 개발",
      details: {
        "DevOps": ["Docker + Kubernetes 기반 배포 자동화", "Terraform을 이용한 인프라 관리"],
      },
    },
  ];

  return (
    <div className="work-container">
      {workExperiences.map((work, index) => (
        <div key={work.id} className={`work-card ${activeCard === index ? "expanded" : ""}`}>
          {/* first-view (초기 화면) */}
          <div className={`first-view ${activeCard === index ? "hide" : ""}`}>
            <h3>{work.company}</h3>
            <p>{work.period}</p>
            <p>{work.description}</p>

            {/* 플러스 버튼 (➕) */}
            <GoPlusCircle className="icon-click plus" onClick={() => toggleCard(index)} />
          </div>

          {/* second-view (확장된 화면) */}
          <div className={`second-view ${activeCard === index ? "show" : ""}`}>
            <h3>{work.company}</h3>
            {Object.entries(work.details).map(([category, items], i) => (
              <div className="role-content" key={i}>
                <p>{category}</p>
                <ul>
                  {items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* 닫기 버튼 (❌) */}
            <GoXCircle className="icon-click close" onClick={() => toggleCard(index)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;