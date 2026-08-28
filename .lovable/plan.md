# 손하영 포트폴리오 — 콘텐츠 구조 확정 & 구현 계획

정리해주신 서사(투자 → 브릿지 → OI → 커리어)를 그대로 뼈대로 삼고, 지금 사이트의 시각 언어(페이퍼 배경 + 라임 액센트 + 하늘색 3D 스테이지 + 블루프린트 그리드 + 모션)에 얹습니다. 별도 Work/Case Study 페이지 없이 한 페이지 스크롤.

## 시각 규칙 (전 섹션 공통)

- 섹션 번호는 `01 / INVESTMENT` 형태의 모노 라벨 + 라임 바.
- 큰 숫자는 `tight-display`로 화면을 지배하는 크기(모바일 18vw / 데스크톱 10vw), 라벨은 모노 소문자 대문자화.
- 스크롤 진입 시 숫자는 0 → 목표값 카운트업, 헤드라인은 기존 SplitText 캐릭터 스태거.
- 하늘색 3D 스테이지는 딱 두 번만 사용: HERO와 CONTACT. 중간은 페이퍼 화이트로 유지해 대비를 만듭니다.

## 섹션별 구성

### 00 Navigation (기존 Frame 재사용)
좌: `SON HAYOUNG` / 중앙-우: Investment · Open Innovation · Experience · About / 맨 우: `Resume ↗`.
하단 HUD(시계·좌표·연도)는 그대로 유지.

### 01 HERO — 하늘색 스테이지
3D 레터링을 `hello` 대신 브랜드 워드로 교체(아래 질문 참고). 그 위에 블랙 대형 타이포:

```text
Investment,
with an Operator's Perspective.
```
아래 국문 2줄 + `Investment · Portfolio · Open Innovation` 모노 라인.
스크롤 직전 하단에 4칸 숫자 스트립: 27 Investments Executed / 104 Startups Reviewed / 23 Funds Reported / 6 TIPS Selections.

### 02 INVESTMENT
- 헤드라인 `From fund formation / to portfolio management.` + 국문 리드.
- **Investment Flow**: 가로 1줄 스티키 프로세스 (FUND → REVIEW → INVEST → PORTFOLIO). 스크롤에 따라 현재 단계가 검정/라임으로 강조되고 나머지는 20% 투명.
- 01~04 블록: 좌측에 거대 숫자(4 Funds Established / 2 in Formation, 104, 27), 우측에 본문 + 불릿 리스트. 04는 숫자 없이 태그 칩(Portfolio Monitoring / KIIPS / Business Reporting / Follow-up Support).
- 03에는 `IC → Contract → Compliance → Closing` 얇은 인라인 프로세스.
- 섹션 하단 얇은 선 위에 Government-linked Investment: TIPS 7 Recommended / 6 Selected, LIPS 13 / 6.

### 03 BRIDGE
풀스크린 100svh, 배경만 살짝 톤 전환. 중앙 초대형 문장 2줄 + 국문 1줄. 스크롤 속도에 따라 문장이 살짝 밀려 올라오는 패럴랙스만.

### 04 OPEN INNOVATION
- 헤드라인 `From corporate needs / to startup collaboration.` + 국문 리드.
- 대표 프로젝트 4개를 카드가 아닌 **풀폭 스택 블록**으로. 각 블록: 클라이언트명(작게) → 프로그램명(대형) → 카테고리 라벨 → 숫자군 → 본문 → 역할 태그.
  - IBK 1st LAB: `12 → 3 → 1` (Applicants → Finalists → Selected), 서브로 7 Regular / 2 On-demand.
  - Samsung Welstory W.I.T: 11 / 155 / 4 3열 숫자, `Pain Point → Sourcing → Evaluation → PoC`.
  - HMG ZERO1NE: 397 / 7 + 기술 태그(AI·Software / Drone / Cyber / Sensor / Semiconductor).
  - 현대홈쇼핑 H.I.G.H: 숫자 대신 `From open call to targeted sourcing.` 강조 한 줄 중심.
- 맨 아래 얇은 선 + `OTHER SELECTED PROGRAMS` 한 줄(CJ Frontier Labs · Samsung Securities C-Lab Outside · 한국관광공사 Tourism Plus Tech). 링크 없음.

### 05 EXPERIENCE
2개 항목만. 좌측 기간(모노), 중앙 회사·역할, 우측 키워드/수치. 행 hover 시 라임 라인.

### 06 CAPABILITIES
3열(INVESTMENT / OPEN INNOVATION / STARTUP) 리스트. 툴 목록 없음.

### 07 ABOUT
좌: 초대형 `I like understanding / how businesses grow.` 우: 국문 2문단.

### 08 EDUCATION / ETC.
About 하단 얇은 3열 미니 블록(명지대 / Université Catholique de Lille / OPIc IH).

### 09 CONTACT — 하늘색 스테이지 (기존 Contact 리라이트)
`Let's talk about / startups and investment.` + Email / LinkedIn / Resume 3행 리스트.

## 기술 메모

- 콘텐츠는 전부 `src/lib/site-data.ts`(또는 `portfolio-data.ts`)에 타입 있는 상수로 분리 → 문구 수정이 데이터 편집만으로 되게.
- 기존 `WorkGrid`/`PROJECTS`(더미 프로젝트 이미지)는 제거하고 OI 섹션으로 대체.
- 신규 공용 컴포넌트: `SectionLabel`, `StatBig`(카운트업), `FlowRail`(스티키 프로세스), `OIBlock`.
- 기존 Preloader / Cursor / SmoothScroll / GridLines / SplitText / sky-stage는 그대로 사용.
- `head()` 타이틀·디스크립션을 손하영 투자/오픈이노베이션 포트폴리오로 갱신.
