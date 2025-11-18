// src/data/works.js
const img = (path) => `/img/${path}`;
const works = [
    {
        id: "w-001",
        title: "FoodTrail",
        subtitle: "나만의 맛집 기록 및 리뷰 공유 서비스",
        description:
        "사용자가 방문한 맛집을 기록하고 리뷰를 공유할 수 있는 서비스입니다.",
        tags: ["REACT", "RESPONSIVE", "DASHBOARD", "CHART", "CLEANUI"],
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
        title: "날씨 검색 웹",
        subtitle: "상품 리스트 · 필터/정렬",
        description:
        "날씨를 알고 싶은 지역을 검색하면 날씨, 온도, 습도 까지 확인 할 수 있습니다.",
        tags: ["REACT", "RESPONSIVE", "FILTER", "PAGINATION", "ACCESSIBILITY"],
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
        title: "감정 일기장",
        subtitle: "Works 관리 · CRUD",
        description:
        "단순 일기장이 아닌 그날의 감정을 선택 할 수 있다.",
        tags: ["REACT", "CRUD", "ADMIN", "FORM", "VALIDATION"],
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