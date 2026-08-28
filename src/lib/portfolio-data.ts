/** All site copy lives here so wording edits never touch layout code. */

export const NAV = [
  { label: "Experience", id: "experience" },
  { label: "Investment", id: "investment" },
  { label: "Open Innovation", id: "open-innovation" },
  { label: "About", id: "about" },
];

export const RESUME_HREF = "#contact";

export const HERO = {
  titleLines: ["Investment,", "with an Operator's", "Perspective."],
  ko: "투자 검토와 집행으로 커리어를 시작해, 현재는 대기업과 스타트업을 연결하는 오픈이노베이션 업무를 수행하고 있습니다.",
  kicker: "Investment · Fund Operations · Portfolio · Open Innovation",
  primaryStats: [
    { value: 27, label: "투자집행 기업" },
    { value: 104, label: "예비투심 검토 기업" },
  ],
  secondaryStats: [
    { value: 23, label: "조합 정기 영업보고" },
    { value: 6, label: "TIPS 선정기업" },
  ],
};

export const EXPERIENCE = {
  items: [
    {
      period: "2024.03 – 2025.02",
      company: "와이앤아처",
      role: "투자지원센터 · 선임심사역",
      summary: "투자조합 운용 및 투자집행",
      keywords: ["투자검토", "투자집행", "펀드운용", "사후관리"],
      track: "Investment",
    },
    {
      period: "2025.10 – 현재",
      company: "마크앤컴퍼니",
      role: "Accelerating 부문 · OI팀",
      summary: "대기업 및 금융사 오픈이노베이션 프로그램 기획·운영",
      keywords: ["스타트업 소싱", "현업과제 발굴", "기업선발", "PoC"],
      track: "Open Innovation",
    },
  ],
  transition:
    "투자 관점에서 기업을 검토하던 경험을 바탕으로, 현재는 기업과 스타트업이 실제로 협업하는 과정까지 경험의 범위를 확장하고 있습니다.",
};

export const INVESTMENT = {
  headline: ["From fund formation", "to portfolio management."],
  ko: [
    "펀드 결성 및 조합 운용부터 투자 검토, 계약·집행,",
    "피투자기업 모니터링까지 투자 전 과정을 경험했습니다.",
  ],
  flow: [
    { key: "FUND", label: "펀드 결성 및 조합 운용" },
    { key: "REVIEW", label: "기업 검토 및 투자심의" },
    { key: "INVEST", label: "계약 검토 및 투자집행" },
    { key: "PORTFOLIO", label: "피투자기업 모니터링 및 사후관리" },
  ],
  blocks: [
    {
      no: "01",
      title: "Fund Formation & Operations",
      stats: [],
      headline: ["2024년 4개 펀드 결성", "2025년 2개 펀드 결성 진행"],
      body: "",
      bullets: [
        "펀드 제안서 작성 및 모태펀드·벤처투자조합 규약 협의",
        "회계감사 및 수탁은행 계약",
        "조합원총회 운영 및 VICS 보고",
        "관리보수 및 조합 운영비 관리",
      ],
      process: [],
      tags: [],
    },
    {
      no: "02",
      title: "Investment Review",
      stats: [{ value: 104, label: "예비투심 검토 지원", unit: "개사" }],
      headline: [],
      body: "",
      bullets: [
        "예비·본 투자심의위원회 기업 검토 및 운영",
        "투자심사보고서 검토",
        "준법 체크리스트 및 투자계약서 검토",
      ],
      process: [],
      tags: [],
    },
    {
      no: "03",
      title: "Investment Execution",
      stats: [{ value: 27, label: "투자집행", unit: "개사" }],
      headline: [],
      body: "",
      bullets: [
        "투자심의 이후 투자계약 검토",
        "투자금 납입 및 투자집행",
        "관련 행정 및 준법 절차 수행",
      ],
      process: ["IC", "Contract", "Compliance", "Closing"],
      tags: [],
    },
    {
      no: "04",
      title: "Portfolio Management",
      stats: [],
      headline: [],
      body: "피투자기업의 주요 현황을 모니터링하고 투자 이후 사후관리 및 조합 보고 업무를 수행했습니다.",
      bullets: [
        "피투자기업 주요 현황 및 경영정보 모니터링",
        "쿼타북 기반 투자기업 정보 관리",
        "조합 보고 및 투자 이후 사후관리",
      ],
      process: [],
      tags: ["포트폴리오 모니터링", "KIIPS", "조합 보고", "후속관리"],
    },
  ],
  government: [
    { name: "TIPS", detail: "7개사 추천 / 6개사 선정" },
    { name: "LIPS", detail: "13개사 추천 / 6개사 최종 확정" },
  ],
};

export const OPEN_INNOVATION = {
  headline: ["From corporate needs", "to startup collaboration."],
  ko: [
    "대기업·금융사의 현업 수요를 기반으로 적합한 스타트업을 발굴·선정하고,",
    "PoC와 후속 협업까지 연결하는 오픈이노베이션 프로그램을 수행했습니다.",
  ],
  projects: [
    {
      id: "ibk",
      client: "IBK기업은행",
      program: "1st LAB",
      category: "금융 오픈이노베이션 · PoC",
      role: "과제 구체화 · 스타트업 소싱/검토 · PoC 운영 지원",
      recruitment: ["핀테크", "AI", "데이터", "금융업무 혁신"],
      message:
        "금융 현업 수요를 기반으로 협업과제를 구체화하고, 적합한 스타트업을 발굴·선정해 PoC 실행까지 지원했습니다.",
      counts: [{ value: 7, label: "개 협업과제 운영" }],
      funnel: null as { steps: string[]; labels: string[]; } | null,
      stats: [],
      flow: [],
      bullets: [],
      tags: ["정기 과제 5개 · 수요 기반 과제 2개"],
      highlight: "",
    },
    {
      id: "welstory",
      client: "삼성웰스토리",
      program: "W.I.T",
      category: "Corporate Open Innovation · PoC",
      role: "현업과제 발굴 · 스타트업 소싱/평가 · PoC 진행관리",
      recruitment: ["키친로봇", "헬스케어", "ESG", "스마트공정", "애그리/블루테크", "AI 솔루션"],
      message:
        "현업 Pain Point를 협업과제로 구체화하고, 적합한 스타트업을 선발해 PoC까지 연결했습니다.",
      counts: [],
      funnel: null as { steps: string[]; labels: string[]; } | null,
      stats: [
        { value: 11, label: "현업부서" },
        { value: 155, label: "지원기업" },
        { value: 4, label: "최종 선발기업" },
      ],
      flow: [],
      bullets: [],
      tags: [],
      highlight: "",
    },
    {
      id: "zero1ne",
      client: "현대자동차그룹",
      program: "ZERO1NE",
      category: "Defense Industry Research · Startup Acceleration",
      role: "방산 기술기업 리서치 · 스타트업 성장지원 프로그램 운영",
      recruitment: [],
      message: "",
      counts: [],
      funnel: null as { steps: string[]; labels: string[]; } | null,
      stats: [],
      flow: [],
      bullets: [],
      tags: [],
      highlight: "",
      workstreams: [
        {
          title: "Defense Industry Research",
          stat: { value: 397, label: "방산 기술기업 롱리스트" },
          description: "산업·R&D 데이터 기반 방산 기술기업 조사 및 후보군 구축",
        },
        {
          title: "ZERO1NE Sprint",
          stat: { value: 7, label: "선정 스타트업 성장지원" },
          description: "선정 스타트업 대상 성장지원 프로그램 운영 및 진행관리",
        },
      ],
    },
    {
      id: "high",
      client: "현대홈쇼핑",
      program: "H.I.G.H",
      category: "스타트업 선발 · 수요 기반 소싱",
      role: "지원기업 검토·평가 · 협업기업 선발 · 수요 기반 추가 소싱",
      recruitment: ["서비스", "시스템", "상품", "플랫폼", "자율주제"],
      message:
        "현업 협업과제에 적합한 스타트업을 모집·평가하고, 과제별 타깃 소싱을 병행해 최종 협업기업을 선발했습니다.",
      counts: [],
      funnel: { steps: ["141", "21", "5"], labels: ["지원기업", "현업 발표평가", "최종 선발"] },
      stats: [],
      flow: [],
      bullets: [],
      tags: [],
      highlight: "",
    },
  ],
  otherPrograms: [
    { org: "CJ제일제당", program: "Frontier Labs" },
    { org: "삼성증권", program: "C-Lab Outside" },
    { org: "한국관광공사", program: "관광플러스테크" },
  ],
};

export const ABOUT = {
  headline: ["I look at startups from both sides", "— investment and collaboration."],
  paragraphs: [
    "대기업 오픈이노베이션 현장에서 현업이 어떤 문제를 가지고 있고, 어떤 스타트업과 기술을 실제로 필요로 하는지 가까이에서 경험했습니다.",
    "투자와 사업협력 양쪽의 관점에서 기업을 이해하고, 성장 가능성을 판단할 수 있는 투자자로 전문성을 확장하고 있습니다.",
  ],
  education: [
    {
      title: "명지대학교",
      lines: ["경영대학 경영학 학사", "RPA경영 연계전공", "2020.02 – 2024.08"],
    },
    {
      title: "Université Catholique de Lille",
      lines: ["교환학생 · 프랑스", "2023.01 – 2023.06"],
    },
    { title: "OPIc", lines: ["IH", "2025.09"] },
  ],
};

export const CONTACT = {
  lines: ["Exploring what’s next", "in investment."],
  links: [
    { label: "Email", value: "thsgkdud4023@naver.com", href: "mailto:thsgkdud4023@naver.com" },
  ],
};
