import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/components/Project.scss";

const projects = [
  {
    title: "Flutter 프로젝트",
    subtitle: "아이모리 - 어린이집 업무 자동화 서비스",
    period: "2024.12 - 진행중",
    description:
      "AI를 활용한 기존 어린이집 기록 과정의 비효율성, 학부모의 기록 확인 불편함, 디지털 전환 요구사항 해결을 위해 개발된 업무 자동화 서비스.",
    highlights: [
      "맞춤형 검색 서비스",
      "얼굴 인식을 통한 자동 사진 분류",
      "공지사항/알림장 게시글 자동화",
    ],
    technologies: ["Dart", "Flutter", "Riverpod", "Dio", "Retrofit"],
    github: "https://github.com/aimory-frontend",
    video: "https://youtu.be/sample-video",
    image: "/images/project1.png",
  },
  {
    title: "React 프로젝트",
    subtitle: "AI 기반 데이터 분석 플랫폼",
    period: "2023.07 - 진행중",
    description:
      "대량의 데이터를 분석하고 시각화하는 AI 기반 플랫폼. 사용자가 데이터 업로드 후, 분석된 결과를 직관적으로 확인할 수 있도록 개발.",
    highlights: [
      "AI 모델을 활용한 데이터 분석",
      "실시간 데이터 시각화",
      "대시보드 UI/UX 최적화",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sample-repo",
    video: "https://youtu.be/sample-video",
    image: "/images/project2.png",
  },
];

const Project = () => {
  return (
    <div className="project-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop = { true }
        >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-slide">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h2>{project.title}</h2>
                <h3>{project.subtitle}</h3>
                <p>{project.period}</p>
                <p>{project.description}</p>
                <h4>주요 기능</h4>
                <ul>
                  {project.highlights.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <h4>기술 스택</h4>
                <p>{project.technologies.join(", ")}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                  </a>
                  <a href={project.video} target="_blank" rel="noopener noreferrer">
                    시연 영상 보기
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Project;