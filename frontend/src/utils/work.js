// src/data/works.js
const img = (path) => `/img/${path}`;
const works = [
    {
        id: "w-001",
        title: "FoodTrail",
        subtitle: "나만의 맛집 기록 및 리뷰 공유 서비스",
        description:
        "MERN 스택을 기반으로 AWS S3와 JWT 인증 시스템을 갖춘 반응형 맞집 기록, 공유 플랫폼",
        tags: ["REACT", "NODE.JS", "MONGODB", "EXPRESS", "AWS S3"],
        thumbnail: img("FoodTrail.png"),
        // 선택: 상세 보기용
        period: "2025.10 ~ 2025.11",
        role: "Front-Back",
        stack: ["React", "Vite", "Express", "MongoDB"],
        links: {
        demo: "https://foodtrail.vercel.app",
        notion: "https://www.notion.so/FoodTrail-2793e87de50280febd06feb004112384",
        },
    },
    {
        id: "w-002",
        title: "Weather Search",
        subtitle: "상품 리스트 · 필터/정렬",
        description:
        "OpenWeatherMap API를 연동하여 도시별 실시간 날씨 조회, 기상 상태에 따라 배경 테마가 변화하는 React 기반 웹",
        tags: ["REACT", "VITE", "AXIOS", "CSS", "OPENWEATHERMAP"],
        thumbnail: img("weather.png"),
        period: "2025.06",
        role: "Front-end",
        stack: ["React", "Vite", "React Router"],
        links: {
        demo: "https://weather-pa17.vercel.app",
        notion: "https://github.com/hslee15/weather",
        },
    },
    {
        id: "w-003",
        title: "Emotion Diary",
        subtitle: "Works 관리 · CRUD",
        description:
        "Emotion Diary는 React와 Context API를 사용하여 LocalStorage 기반의 데이터 영구성, 다크 모드 전환 가능한 일기장 애플리케이션입니다",
        tags: ["REACT", "VITE", "CONTEXT API", "LOCALSTORAGE"],
        thumbnail: img("diary.png"),

        period: "2025.05",
        role: "Full-stack(미니)",
        stack: ["React", "Zustand", "Express(Mock)"],
        links: {
        demo: "https://emotion-diary-tawny-theta.vercel.app",
        notion: "https://github.com/hslee15/emotion-diary",
        },
    },
    {
        id: "w-004",
        title: "Social Media Dashboard",
        subtitle: "SNS 통합 대시보드 · 반응형 UI",
        description:
        "React + Vite 기반의 SNS 통계/알림을 한눈에 보는 대시보드. 카드/차트/필터 컴포넌트로 모듈화.",
        tags: ["REACT", "RESPONSIVE", "DASHBOARD", "CHART", "CLEANUI"],
        thumbnail: img("p-1.png"),
        // 선택: 상세 보기용
        period: "2025.07 ~ 2025.08",
        role: "Front-end",
        stack: ["React", "Vite", "Zustand", "Recharts"],
        links: {
        demo: "https://example.com/demo1",
        notion: "https://notion.com/you/demo1",
        },
    }
    
];

export default works