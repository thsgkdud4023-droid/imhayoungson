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
  ko: [
    "투자 검토와 집행으로 커리어를 시작해,",
    "현재는 대기업과 스타트업의 협업을 만드는 오픈이노베이션 업무를 수행하고 있습니다.",
  ],
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
    "투자 검토와 집행 경험을 바탕으로, 현재는 대기업 현업의 수요를 스타트업과 연결하는 오픈이노베이션 업무를 수행하고 있습니다.",
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
        "펀드 제안서 작성 지원",
        "모태펀드 및 벤처투자조합 규약 협의",
        "회계감사 및 수탁은행 계약",
        "조합원총회 운영",
        "VICS 보고",
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
        "예비투자심의위원회 기업 검토 지원",
        "본투자심의위원회 운영",
        "투자심사보고서 검토",
        "준법 체크리스트 작성",
        "투자계약서 검토",
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
      bullets: [],
      process: [],
      tags: ["Portfolio Monitoring", "KIIPS", "Business Reporting", "Follow-up"],
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
      category: "FinTech · AI · Data · Financial Operations",
      message:
        "금융 현업의 수시 과제를 스타트업과 구체화하고, PoC 계획 수립부터 실행 과정까지 현업-기업 간 협업을 조율했습니다.",
      counts: [
        { value: 7, label: "Regular" },
        { value: 2, label: "On-demand" },
      ],
      funnel: { steps: ["12", "3", "1"], labels: ["지원", "발표평가", "최종선정"] },
      stats: [],
      flow: ["Needs Discovery", "Sourcing", "Selection", "PoC"],
      bullets: [],
      tags: [],
      highlight: "",
    },
    {
      id: "welstory",
      client: "삼성웰스토리",
      program: "W.I.T",
      category: "FoodTech · Healthcare · ESG · Smart Factory · AI",
      message:
        "현업부서별 협업과제에 맞춰 스타트업 선발을 지원하고, 선정기업과 현업부서 간 PoC 진행현황 및 정기미팅을 관리했습니다.",
      counts: [],
      funnel: null,
      stats: [
        { value: 11, label: "개 현업부서 미팅" },
        { value: 155, label: "개 지원" },
        { value: 4, label: "개사 선발" },
      ],
      flow: ["Pain Point", "Sourcing", "Evaluation", "PoC"],
      bullets: [],
      tags: [],
      highlight: "",
    },
    {
      id: "zero1ne",
      client: "현대자동차그룹",
      program: "ZERO1NE",
      category: "Defense · Deep Tech · Startup Acceleration",
      message:
        "방산 분야 기술기업 397개사를 조사해 기술영역별 후보군을 구축하고, ZERO1NE Sprint에서는 선정 7개사의 멘토링 및 육성 프로그램 운영을 지원했습니다.",
      counts: [],
      funnel: null,
      stats: [
        { value: 397, label: "방산 기술기업 리서치" },
        { value: 7, label: "Sprint 선정팀" },
      ],
      flow: [],
      bullets: [],
      tags: ["AI / Software", "Drone", "Cyber", "Sensor", "Semiconductor"],
      highlight: "",
    },
    {
      id: "high",
      client: "현대홈쇼핑",
      program: "H.I.G.H",
      category: "Commerce · AI · Product · Platform",
      message:
        "정규 모집 운영뿐 아니라 신규 현업 기술수요가 발생했을 때 적합한 기술기업을 직접 탐색·추천하는 타깃 소싱을 수행했습니다.",
      counts: [],
      funnel: null,
      stats: [],
      flow: [],
      bullets: [
        "현업 협업과제 기반 스타트업 모집 및 선발",
        "현업 기술수요에 맞는 스타트업 직접 소싱",
        "정규 모집 이후 신규 기술수요에 대한 후보기업 탐색 및 추천",
      ],
      tags: [],
      highlight: "From open call to targeted sourcing.",
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
    "투자조합 운용과 스타트업 투자집행으로 커리어를 시작했습니다.",
    "이후 오픈이노베이션 현장에서 대기업이 어떤 문제를 가지고 있고, 어떤 스타트업과 기술을 실제로 필요로 하는지 가까이에서 경험했습니다.",
    "투자와 사업협력 양쪽의 관점에서 기업을 이해하고, 성장 가능성을 판단하며 실제 성장 과정에 기여하는 커리어를 만들어가고 있습니다.",
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
  lines: ["Let's talk about", "startups and investment."],
  links: [
    { label: "Email", value: "thsgkdud4023@naver.com", href: "mailto:thsgkdud4023@naver.com" },
  ],
};
