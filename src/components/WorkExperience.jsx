import React, { useState } from "react";
import "../styles/components/WorkExperience.scss";

const WorkExperience = () => {
  // 각 카드의 상태를 관리하는 useState 배열
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  // 카드 데이터 배열 (3개)
  const workExperiences = [
    {
      id: 1,
      company: "(주)제타큐브",
      period: "2024.03 - 2024.09",
      description: "탈중앙화 WEB3.0 스토리지 솔루션",
      details: {
        frontEnd: [
          "스테이킹풀 프론트 템플릿 수정작업(BootStrap)",
          "Spring Boot thymeleaf MVC 패턴 view part html+css+js 작업",
          "Echart로 데이터 시각화 구현",
          <a href="https://service.nanodc.info/index" target="_blank" rel="noopener noreferrer">
            https://service.nanodc.info/index
          </a>,
        ],
        backEnd: ["Spring Boot 카카오써트 본인인증 API 적용"],
        fileCoin: [
          "파일코인 마이너 온보딩을 위한 대용량 데이터셋 작업 (AWS S3 데이터셋/AIHUB 데이터 외 다운로드)",
          "path파일(5만 라인 이상, 약 80TiB 기준) n등분하여 다운로드 병렬처리로 7일 소요를 3-4일로 단축",
          "singularity 컨테이너 플랫폼을 이용한 car파일 생성작업(블록체인 상 안전하게 저장/검색 할 수 있도록 하는 파일)",
        ],
      },
    },
    {
      id: 2,
      company: "스타트업 A",
      period: "2023.06 - 2024.02",
      description: "AI 기반 추천 시스템 개발",
      details: {
        frontEnd: [
          "React + TypeScript 기반 프론트엔드 개발",
          "Next.js를 활용한 SSR 최적화",
          "Recoil을 이용한 상태 관리",
        ],
        backEnd: ["Django REST Framework 기반 API 개발", "AWS Lambda 활용 서버리스 아키텍처 구축"],
        fileCoin: [
          "AI 모델 학습을 위한 대규모 데이터 전처리",
          "MLflow를 활용한 모델 버전 관리",
          "Kafka를 활용한 실시간 데이터 스트리밍",
        ],
      },
    },
    {
      id: 3,
      company: "기업 B",
      period: "2022.01 - 2023.05",
      description: "클라우드 기반 SaaS 서비스 개발",
      details: {
        frontEnd: [
          "Vue.js를 활용한 대시보드 개발",
          "Tailwind CSS 적용하여 UI 개선",
          "Axios를 활용한 API 연동",
        ],
        backEnd: ["Node.js + Express 기반 API 개발", "MongoDB를 활용한 NoSQL 데이터베이스 구축"],
        fileCoin: [
          "Docker 컨테이너를 이용한 CI/CD 자동화",
          "Terraform을 활용한 인프라 자동화",
          "Prometheus + Grafana를 활용한 모니터링 시스템 구축",
        ],
      },
    },
  ];

  return (
    <div className="work-container">
      {workExperiences.map((work, index) => (
        <div
          key={work.id}
          className={`work-card ${activeCard === index ? "expanded" : ""}`}
          onClick={() => toggleCard(index)}
        >
          {/* 기본 first-view */}
          <div className="first-view">
            <h3>{work.company}</h3>
            <p>{work.period}</p>
            <p>{work.description}</p>
          </div>

          {/* 클릭 시 second-view */}
          {activeCard === index && (
            <div className="second-view">
              <div className="role-content">
                <p>Front-End</p>
                <ul>
                  {work.details.frontEnd.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="role-content">
                <p>Back-End</p>
                <ul>
                  {work.details.backEnd.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="role-content">
                <p>FileCoin Onboarding</p>
                <ul>
                  {work.details.fileCoin.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;