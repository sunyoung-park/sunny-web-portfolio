import React, { useState } from "react";
import { GoPlusCircle, GoXCircle } from "react-icons/go"; 
import "../styles/components/WorkExperience.scss";

const WorkExperience = () => {
  const [activeCards, setActiveCards] = useState([]); // ✅ 여러 개의 second-view가 열릴 수 있도록 배열로 변경

  const toggleCard = (index) => {
    console.log("Clicked Card Index:", index);
    if (activeCards.includes(index)) {
      // ✅ X 버튼 클릭 시 해당 카드만 닫힘
      setActiveCards(activeCards.filter((card) => card !== index));
    } else {
      // ✅ 플러스 버튼 클릭 시 기존 카드 유지한 채로 추가
      setActiveCards([...activeCards, index]);
    }
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
        "FileCoin Onboarding": [
          "파일코인 마이너 온보딩을 위한 대용량 데이터셋 작업(AWS S3 데이터셋/AIHUB 데이터 외 다운로드)",
          "path파일(5만 라인 이상, 약 80TiB 기준) n등분하여 다운로드 병렬처리로 7일 소요를 3-4일로 단축 ",
          "singularity 컨테이너 플랫폼을 이용한 car파일 생성작업(블록체인 상 안전하게 저장/검색 할 수 있도록 하는 파일)",
        ],
      },
    },
    {
      id: 2,
      company: "(주)블루페블즈",
      period: "2020.12 - 2023.03",
      description: "라비베베 육아용품 온라인 쇼핑몰",
      details: {
        "Design": [
          "웹배너/상세페이지 제작",
          "오픈마켓 썸네일/배너/인트로 작업",
          "SNS 관리(인스타그램 운영)",
          "제품 디자인(제품 외형 일러스트 작업, 패턴 작업, 색상지정)",
          "패키지 디자인(박스, 설명서 디자인)",
        ],
        "Publishing": ["카페24 스킨 수정(HTML5, CSS3 소스 수정)"],
      },
    },
    {
      id: 3,
      company: "(주)월드버텍",
      period: "2019.02 - 2020.01",
      description: "국립환경과학원 18년~20년 환경연구정보서비스 운영 및 유지관리(2차년)",
      details: {
        "Monitoring": [
          "국립환경과학원 대국민 서비스(34개) 및 내무업무시스템 장애 모니터링 점검",
          "국립환경과학원 대표홈페이지 운영, 유지관리 및 콘텐츠 현행화",
          "국립환경과학원 대표홈페이지 문의전화 질의응답 서비스",
          "운영/유지관리 업무 관련 정량화 및 문서화 작업",
          "웹사이트 취약점, 보안 이벤트 등 결과 처리 요청 및 취합 지원",
        ],
      },
    },
  ];

  return (
    <div className="work-container">
      {workExperiences.map((work, index) => (
        <div key={work.id} className={`work-card ${activeCards.includes(index) ? "expanded" : ""}`}>
          {/* first-view (초기 화면) */}
          <div className={`first-view ${activeCards.includes(index) ? "hide" : ""}`}>
            <h3>{work.company}</h3>
            <p>{work.period}</p>
            <p>{work.description}</p>

            {/* 플러스 버튼 (➕) */}
            <GoPlusCircle className="icon-click plus" onClick={() => toggleCard(index)} />
          </div>

          {/* second-view (확장된 화면) */}
          <div className={`second-view ${activeCards.includes(index) ? "show" : ""}`}>
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