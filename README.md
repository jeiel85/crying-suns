# 🚀 Void Strider: The Last Bastion
> **실시간 일시정지(Active Pause) 함선 전투 & 승무원 관리 우주 전략 로그라이크 (FTL & Crying Suns 영감)**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Play_in_Browser-00e5ff?style=for-the-badge&logo=googlechrome)](https://jeiel85.github.io/crying-suns/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/Zero_Dependencies-Pure_HTML5_Canvas-f39c12?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

## 🎮 [웹 브라우저에서 즉시 플레이하기 (Live Demo)](https://jeiel85.github.io/crying-suns/)

외부 에셋(이미지, 사운드 파일) 다운로드 없이, 단 하나의 `index.html` 파일로 즉시 실행되는 브라우저 완결형 우주 함선 승무원 관리 로그라이크 게임입니다.

---

## 📖 세계관 및 시놉시스 (Lore)

> *"연방 수도성이 함락되었다. 제국 반란군의 거대한 추격 함대가 은하계 전체를 집어삼키고 있다.*  
> *당신은 반란군 대함대의 치명적 약점이 담긴 기밀 암호 데이터를 적재한 순양함 **USS Aegis-7**의 함장이다.*  
> *뒤에서는 반란군의 붉은 선봉대가 턱밑까지 추격해 오고 있다. 8개 성계를 돌파하여 은하계 저편의 연방 비밀 사령부에 도달하고, 3페이즈로 변모하는 반란군 총기함(Flagship)을 파괴하라!"*

---

## ✨ 핵심 게임 시스템 (Core Mechanics)

### 1. 🌌 8개 섹터 은하계 분기 맵 & 반란군 추격 함대 (Galaxy Map & Pursuit Fleet)
- **8개 성계 탐험**: 국경 수비 구역부터 민간 교역로, 엔지 연구 성계, 맨티스 전쟁 구역, 락맨 소행성대를 거쳐 **섹터 8 최종 사령부**까지 도달.
- **분기형 비콘 네트워크**: 전투(Combat), 조난 신호(Distress), 보급 상점(Store), 미지의 성간 이벤트(Unknown Event), 성운(Nebula).
- **반란군 추격 경고선**: 매 점프마다 좌측에서 우측으로 조여오는 붉은 추격 파동선. 성운 구역 진입 시 추격 속도 50% 지연.

### 2. 🛡️ 함선 룸(Room) 아키텍처 & 원자로 동력 분배 (Ship Architecture & Reactor)
- **6대 핵심 룸 구성**:
  - **조종실 (Piloting)**: 함선 기본 회피율 부여 및 FTL 도약 연산.
  - **방어막실 (Shields)**: 최대 4겹의 다층 에너지 보호막 가동 및 충전.
  - **무기 관제실 (Weapons)**: 무장 슬롯에 전력을 공급하여 쿨타임 단축 및 발사.
  - **엔진실 (Engines)**: FTL 충전 가속 및 회피율(Evasion %) 대폭 증강.
  - **산소실 (Oxygen)**: 선내 각 룸의 산소 농도(0~100%) 유지.
  - **의료실 (Medbay)**: 전력 공급 시 탑승 승무원의 체력을 급속 치유.
- **실시간 전력 스왑**: 전투 상황에 맞춰 엔진 전력을 방어막으로, 산소실 전력을 무기실로 재배치하는 전략적 동력 관리.

### 3. 👨‍🚀 승무원 마이크로 컨트롤 & 외계 종족 특성 (Crew Management)
- **종족별 고유 능력치**:
  - **인간 (Human)**: 균형 잡힌 정규군 승무원.
  - **엔지니어 (Engi)**: 2배 빠른 수리 속도, 나노머신 신체.
  - **맨티스 (Mantis)**: 1.5배 강력한 백병전 공격력과 빠른 기동력.
  - **락맨 (Rockman)**: 체력 150, 화재 피해 완전 면역.
  - **졸탄 (Zoltan)**: 탑승한 룸에 상시 무료 전력 +1 영구 공급.
- **선내 침투 적(Boarders) & 백병전**: 적 함선의 강습 분대가 아군 룸에 순간 이동 침투 시 맞서 싸우는 백병전.
- **비상 에어락 배출 (진공 소화 & 질식 유도)**: 선내 문과 외부 에어락을 개방해 방 안의 산소를 진공으로 배출, 화재를 즉시 진압하거나 침투한 적을 산소 결핍으로 질식사시키는 FTL 정통 전술 구현.

### 4. ⏸️ 실시간 일시정지(Active Pause) 정밀 타겟팅 함대전 (Tactical Combat)
- **[SPACE] 키로 언제든 전술 일시정지**: 정지된 시간 속에서 적 룸 조준, 승무원 이동 명령, 전력 재배치 하달.
- **정밀 부위 타격**: 적 무기실을 타격해 공격 무력화, 쉴드실을 파괴해 장갑 노출 유도, 엔진실을 파괴해 적 회피율 0% 봉쇄.
- **무장 상성 시스템**:
  - **레이저 (Laser)**: 다연발 사격으로 적 쉴드를 깎고 선체 타격.
  - **미사일 (Missile)**: 적 에너지 방어막을 100% 관통하여 선체와 시스템을 분쇄 (탄약 소모).
  - **이온 캐논 (Ion)**: 시스템을 일시 마비시켜 전력 차단 유도.
  - **할버드 빔 (Beam)**: 쉴드가 벗겨진 순간 다수의 룸을 일도양단하는 궤적 절단 광선.

### 5. 👑 섹터 8 3단계 최종 보스 플래그십 (3-Phase Boss Flagship)
- **1페이즈**: 4중 방어막과 4대 독립 주포 어레이 (버스트 레이저, 미사일, 이온, 빔).
- **2페이즈**: 자율 드론 및 강습 침투 분대 집중 기습.
- **3페이즈**: 관통 불가 졸탄 슈퍼 쉴드(Zoltan Super Shield) 전개 및 화력 집중 폭풍.
- **승리 보상**: 엔지 보텍스(The Torus) 등 신규 함선 클래스 해금.

### 6. 🔊 Web Audio API 순수 절차적 사운드 신시사이저
- 외부 mp3/wav 파일 없이 브라우저 오디오 오실레이터로 레이저 발사음, 미사일 추진음, 폭발음, 실드 피격음, 경보 사이렌, 워프 사운드, 배경 앰비언트 베이스를 100% 실시간 합성 출력.

### 7. 🌐 완전한 다국어 지원 (Full Multilingual Support: 한국어 & English)
- **기본 한국어 기본 탑재**: 모든 UI, 룸 명칭, 무기 시스템, 외계인 용병, 이벤트 대화록, 전투 플로팅 텍스트까지 완벽한 한글화 지원.
- **원클릭 실시간 언어 전환**: 상단 HUD의 `🌐 한국어 / English` 버튼 클릭 한 번으로 게임 진행 중 언제든 즉시 언어 토글 (새로고침 불필요).
- **설정 자동 유지**: 브라우저 LocalStorage를 통해 선택한 언어가 영구 보존됩니다.

### 8. 💾 LocalStorage 실시간 세이브 & 다회차 계승
- FTL 도약 및 전투 승리 시 자동 저장.
- 언제든 "이전 항해 이어하기" 지원 및 함선 완파 시 하드코어 영구 사망(Permadeath) 처리.

---

## ⌨️ 조작법 및 단축키 (Controls)

| 키 / 마우스 | 기능 |
| :--- | :--- |
| **Space** | **전술 일시정지 (Active Pause)** 켜기 / 끄기 |
| **마우스 좌클릭** | 승무원 선택, 룸 이동 명령, 도어 개폐 토글, UI 조작 |
| **1, 2, 3, 4** | 해당 번호 무기 선택 후 적 룸 클릭하여 **정밀 타격 조준** |
| **A** | 무장 **자동 발사 (Autofire)** 토글 |
| **V** | **비상 에어락 전체 배출 (진공 모드)** - 화재 소화 및 적 질식 |
| **Tab** | 선내 모든 내부 문 일괄 개방 |
| **M** | 은하계 **성계 지도 (Sector Map)** 열기 |
| **U** | 함선 시스템 & 원자로 **강화 (Upgrades)** 창 열기 |
| **우클릭 (전력 트랙)** | 해당 시스템 전력 1칸 차단 (원자로 회수) |

---

## 🛠️ 기술 스택 및 구조

- **언어 & 엔진**: Pure HTML5, CSS3, Vanilla JavaScript (ES6+)
- **그래픽스**: HTML5 2D Canvas (파티클 FX, 궤적 물리, 항성계 렌더링)
- **오디오**: HTML5 Web Audio API (Synthesizer & Procedural Sound FX)
- **저장소**: Browser LocalStorage API
- **의존성**: **Zero Dependency** (No npm, No webpack, No external assets)

---

## 🚀 로컬 실행 방법 (Local Setup)

별도의 빌드 과정 없이 `index.html`을 더블클릭하거나 로컬 웹 서버로 열면 즉시 실행됩니다:

```bash
# Python 내장 서버 실행 시
python -m http.server 8080
# 브라우저에서 http://localhost:8080 접속
```

---

## 📜 라이선스 (License)

본 프로젝트는 [MIT License](LICENSE)를 따릅니다.
All game assets and engine code are 100% open-source and procedural.
