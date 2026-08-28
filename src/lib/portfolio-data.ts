/** All site copy lives here so wording edits never touch layout code. */

export const NAV = [
  { label: "Investment", id: "investment" },
  { label: "Open Innovation", id: "open-innovation" },
  { label: "Experience", id: "experience" },
  { label: "About", id: "about" },
];

export const RESUME_HREF = "#contact";

export const HERO = {
  titleLines: ["Investment,", "with an Operator's", "Perspective."],
  ko: [
    "스타트업 투자와 펀드 운용을 시작으로,",
    "대기업 오픈이노베이션 현장에서 기업 발굴·검증·PoC까지 경험했습니다.",
  ],
  kicker: "Investment · Portfolio · Open Innovation",
  stats: [
    { value: 27, label: "Investments Executed" },
    { value: 104, label: "Startups Reviewed" },
    { value: 23, label: "Funds Reported" },
    { value: 6, label: "TIPS Selections" },
  ],
};

export const INVESTMENT = {
  headline: ["From fund formation", "to portfolio management."],
  ko: "펀드 결성 및 조합 운용부터 투자 검토, 계약·집행, 피투자기업 모니터링까지 투자 전 과정을 경험했습니다.",
  flow: [
    { key: "FUND", label: "Fund Formation & Operations" },
    { key: "REVIEW", label: "Startup Screening & IC" },
    { key: "INVEST", label: "Contract & Execution" },
    { key: "PORTFOLIO", label: "Monitoring & Follow-up" },
  ],
  blocks: [
    {
      no: "01",
      title: "Fund Formation & Operations",
      stats: [
        { value: 4, label: "Funds Established" },
        { value: 2, label: "in Formation" },
      ],
      body: "모태펀드 및 벤처투자조합 결성·운용 업무를 수행했습니다.",
      bullets: [
        "펀드 제안서 작성",
        "조합 규약 협의",
        "회계감사·수탁은행 계약",
        "조합원총회 및 VICS 보고",
        "관리보수 및 조합 운영비 관리",
      ],
      process: [],
      tags: [],
    },
    {
      no: "02",
      title: "Investment Review",
      stats: [{ value: 104, label: "Startups Reviewed" }],
      body: "예비투자심의위원회 기업 검토부터 본투심 진행을 지원하며 투자 검토 프로세스를 경험했습니다.",
      bullets: [
        "투자심사보고서 검토",
        "준법 체크리스트",
        "투자계약서 검토",
        "예비·본 투자심의위원회 운영",
      ],
      process: [],
      tags: [],
    },
    {
      no: "03",
      title: "Investment Execution",
      stats: [{ value: 27, label: "Investments Executed" }],
      body: "투자심의 이후 계약 검토 및 납입까지 실제 투자집행 프로세스를 수행했습니다.",
      bullets: [],
      process: ["IC", "Contract", "Compliance", "Closing"],
      tags: [],
    },
    {
      no: "04",
      title: "Portfolio & Value-up",
      stats: [],
      body: "투자 이후 피투자기업의 주요 현황을 모니터링하고 후속 지원 및 조합 보고 업무를 수행했습니다.",
      bullets: [],
      process: [],
      tags: ["Portfolio Monitoring", "KIIPS", "Business Reporting", "Follow-up Support"],
    },
  ],
  government: [
    { name: "TIPS", detail: "7 Recommended / 6 Selected" },
    { name: "LIPS", detail: "13 Recommended / 6 Selected" },
  ],
};

export const BRIDGE = {
  lines: ["Then I moved closer", "to how startups actually grow."],
  ko: "투자 이후에는 스타트업과 대기업 현업이 실제로 협업하는 과정을 경험했습니다.",
  scattered: [
    { text: "Corporate Needs", className: "left-[6%] top-[24%]" },
    { text: "Startup Sourcing", className: "left-[68%] top-[18%]" },
    { text: "PoC", className: "left-[12%] top-[74%]" },
    { text: "Collaboration", className: "left-[62%] top-[80%]" },
  ],
};

export const OPEN_INNOVATION = {
  headline: ["From corporate needs", "to startup collaboration."],
  ko: "대기업·금융사의 현업 수요를 정의하고, 적합한 스타트업을 발굴·선정해 PoC와 후속 협업까지 연결하는 오픈이노베이션 프로그램을 수행했습니다.",
  projects: [
    {
      id: "ibk",
      client: "IBK Industrial Bank of Korea",
      program: "1st LAB",
      category: "Financial Open Innovation",
      funnel: { steps: ["12", "3", "1"], labels: ["Applicants", "Finalists", "Selected"] },
      stats: [
        { value: 7, label: "Regular" },
        { value: 2, label: "On-demand" },
      ],
      body: "금융 현업의 수요를 기반으로 기술기업을 발굴하고 스타트업과 현업 간 PoC 설계 및 실행을 지원했습니다.",
      note: "데이터사전 구축·자산관리 등 수시과제와 정시 OI 프로그램을 운영하며 현업-스타트업 간 협업과제 구체화 및 PoC 실행을 지원.",
      roles: ["Needs Discovery", "Startup Sourcing", "Selection", "PoC Moderation"],
      flow: [],
      tags: [],
      highlight: "",
    },
    {
      id: "welstory",
      client: "Samsung Welstory",
      program: "W.I.T",
      category: "Corporate Innovation / PoC",
      funnel: null,
      stats: [
        { value: 11, label: "Departments" },
        { value: 155, label: "Valid Applicants" },
        { value: 4, label: "Selected Teams" },
      ],
      body: "11개 현업부서의 Pain Point를 기반으로 협업과제를 구체화하고 기술 적합성·실증 가능성을 기준으로 스타트업을 발굴·선정했습니다.",
      note: "",
      roles: [],
      flow: ["Pain Point", "Sourcing", "Evaluation", "PoC"],
      tags: [],
      highlight: "",
    },
    {
      id: "zero1ne",
      client: "Hyundai Motor Group",
      program: "ZERO1NE",
      category: "Deep-tech Sourcing",
      funnel: null,
      stats: [
        { value: 397, label: "Deep-tech Companies Researched" },
        { value: 7, label: "Startups Accelerated" },
      ],
      body: "산업·R&D 데이터를 기반으로 딥테크 기업을 탐색하고 기술영역별 후보군 구축 및 스타트업 육성 프로그램 운영을 지원했습니다.",
      note: "선정 7개사를 대상으로 투자·사업성 관점의 멘토링 운영 및 진행관리를 수행했습니다.",
      roles: [],
      flow: [],
      tags: ["AI / Software", "Drone", "Cyber", "Sensor", "Semiconductor"],
      highlight: "",
    },
    {
      id: "high",
      client: "Hyundai Home Shopping",
      program: "H.I.G.H",
      category: "Startup Sourcing / Corporate Collaboration",
      funnel: null,
      stats: [],
      body: "현업 기술수요를 기반으로 협업 가능 스타트업을 발굴하고 오피스아워 및 평가를 통해 PoC 적합성을 검증했습니다.",
      note: "정규 모집 이후에도 신규 AI 기술수요 등에 대응해 적합 솔루션 기업을 직접 탐색·추천했습니다.",
      roles: [],
      flow: [],
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

export const EXPERIENCE = [
  {
    period: "2025.10 — 현재",
    company: "마크앤컴퍼니",
    role: "Accelerating 부문 · OI팀",
    summary: "대기업 및 금융사 오픈이노베이션 프로그램 기획·운영",
    bullets: [
      "대기업 현업 수요 기반 협업과제 발굴 및 스타트업 소싱",
      "지원기업 모집·평가 및 최종 협업기업 선발",
      "현업부서-스타트업 간 PoC 계획 수립 및 진행 모니터링",
      "선정기업 성장지원 및 투자·사업협력 연계",
    ],
    projects: {
      label: "주요 프로젝트",
      items: [
        "IBK기업은행 1st LAB",
        "삼성웰스토리 W.I.T",
        "현대자동차그룹 ZERO1NE",
        "현대홈쇼핑 H.I.G.H",
        "삼성증권 C-Lab Outside",
        "CJ제일제당 Frontier Labs",
        "한국관광공사 관광플러스테크",
      ],
    },
    metrics: null,
  },
  {
    period: "2024.03 — 2025.02",
    company: "와이앤아처",
    role: "투자지원센터 · 선임심사역",
    summary: "벤처투자조합 운용 및 투자집행",
    bullets: [
      "펀드 결성 및 조합 운용",
      "예비·본 투자심의위원회 운영 및 투자검토 지원",
      "투자계약 검토 및 투자금 납입 등 투자집행",
      "피투자기업 모니터링 및 사후관리",
      "TIPS 및 LIPS 기업 추천·운영",
    ],
    projects: null,
    metrics: {
      label: "Key Metrics",
      items: [
        "27개사 투자집행",
        "104개사 예비투심 검토",
        "2024년 4개 펀드 결성",
        "23개 조합 정기 영업보고",
        "TIPS 7개사 추천 / 6개사 선정",
      ],
    },
  },
];

export const CAPABILITIES = [
  {
    group: "INVESTMENT",
    items: [
      "Investment Review",
      "Investment Execution",
      "Fund Operations",
      "Portfolio Monitoring",
    ],
  },
  {
    group: "OPEN INNOVATION",
    items: [
      "Startup Sourcing",
      "Corporate Needs Discovery",
      "Startup Evaluation",
      "PoC Management",
    ],
  },
  {
    group: "STARTUP",
    items: [
      "Business Analysis",
      "IR / Investment Support",
      "Growth Support",
      "Stakeholder Management",
    ],
  },
];

export const ABOUT = {
  headline: ["I like understanding", "how businesses grow."],
  paragraphs: [
    "투자조합 운용과 스타트업 투자집행으로 커리어를 시작했습니다. 이후 오픈이노베이션 현장에서 대기업이 어떤 문제를 가지고 있고, 어떤 스타트업과 기술을 실제로 필요로 하는지 가까이에서 경험했습니다.",
    "숫자와 사업을 함께 보고, 기업의 가능성을 판단하며 성장 과정에 실질적으로 기여하는 투자자로 커리어를 발전시키고자 합니다.",
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
    { title: "OPIc IH", lines: ["2025.09"] },
  ],
};

export const CONTACT = {
  lines: ["Let's talk about", "startups and investment."],
  links: [
    { label: "Email", value: "thsgkdud4023@naver.com", href: "mailto:thsgkdud4023@naver.com" },
  ],
};
