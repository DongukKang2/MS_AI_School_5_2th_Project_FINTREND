# FINTREND: 해외 주식 투자자를 위한 AI 맞춤형 서비스

## 📋 프로젝트 개요
- **프로젝트명**: FINTREND - 해외 주식 투자자 맞춤형 웹 페이지 및 이메일 서비스
- **개발 기간**: 2024년 12월 12일 ~ 2024년 12월 24일 (13일간)
- **팀원**: 강동욱 외 8명

## 💡 프로젝트 소개
해외 주식 투자자에게 도움을 주는 AI 기반 고객 맞춤형 웹 페이지 및 이메일 서비스입니다.

### 주요 기능
1. **사용자 맞춤형 주가 정보와 뉴스 제공**
   - 관심 종목 기반 맞춤 정보 제공
   - AI를 활용한 뉴스 번역 및 요약 서비스
   
2. **관심 종목 기반 이메일 서비스**
   - 투자자 맞춤형 정보 이메일 발송
   - 중요 주가 정보 및 뉴스 알림

## 🔍 핵심 서비스

### 1. 맞춤형 주식 정보 대시보드
- 사용자 관심 종목 기반 실시간 주가 정보
- 종목별 성과 분석 및 차트 제공

### 2. AI 기반 뉴스 번역 및 요약
- GPT-4 활용 해외 주식 뉴스 한국어 번역
- 핵심 정보 요약 및 투자 인사이트 제공

### 3. 맞춤형 이메일 알림 서비스
- 관심 종목 기반 정기 이메일 발송
- 중요 이벤트 및 급변하는 시장 상황 알림

## 🛠️ 기술 스택

### Frontend
- React.js
- HTML/CSS/JavaScript

### Backend
- Python
- Django

### AI/ML
- Azure OpenAI (GPT-4)
- 자연어 처리 및 번역

### 클라우드/인프라
- Azure MySQL
- Azure Blob Storage
- Azure Functions

### Development Tools
- Git/GitHub
- Figma (UI/UX 디자인)

## 👥 담당 역할 및 기여

### UI/UX 디자인 구현
- 직관적인 서비스 설정 및 사용자 페이지 구성
- 메인 화면 배열, 주간 정보와 뉴스 제공 설계
- 사용자 맞춤 설정 서비스 메뉴 디자인

### React 기반 사용자 인터페이스 개발
- React.js를 활용한 최적화된 UX 제공
- 반응형 웹 디자인 적용

### GPT-4 기반 프롬프트 엔지니어링
- Azure OpenAI 활용 해외 주식 뉴스 번역 및 요약
- 웹 크롤링을 통한 언론사별 기사 수집
- GPT 모델 성능 비교 분석 (GPT-4, GPT-4o, O1-mini, O1-preview)

## 🚀 프로젝트 성과 및 경험

### 프로젝트 설계 역량 향상
- WBS를 통한 체계적인 프로젝트 관리 경험
- 서비스 아키텍처 설계 능력 향상

### AI 서비스 통합 경험
- Azure OpenAI GPT-4 모델 활용 및 서비스 적용
- 프롬프트 엔지니어링을 통한 AI 모델 출력 최적화

### 팀 협업 및 통합 개발 경험
- Git 기반 버전 관리 및 코드 리뷰
- 프론트엔드, 백엔드, AI 서비스 간 통합 개발

## 📷 서비스 화면
- 메인 화면
- 주가 정보와 뉴스
- 관심 종목 설정 메뉴
- 메일 발송 설정

## 🚀 시작하기

### 필수 요구사항
- Python 3.8+
- Node.js 14+
- Azure 계정

### 설치 방법
1. 저장소 클론
```bash
git clone https://github.com/DongukKang2/MS_AI_School_5_2th_Project_FINTREND.git
```

2. 패키지 설치
```bash
# 백엔드 설치
pip install -r requirements.txt

# 프론트엔드 설치
cd frontend
npm install
```

3. 환경 변수 설정
```bash
# .env 파일 생성
cp .env.example .env
# Azure 및 기타 API 키 설정
```

4. 실행
```bash
# 백엔드 실행
python manage.py runserver

# 프론트엔드 실행
cd frontend
npm start
```

## 📞 문의하기
- 이메일: kdu79644@gmail.com
- GitHub Issues: [버그 리포트 및 기능 제안](https://github.com/DongukKang2/MS_AI_School_5_2th_Project_FINTREND/issues)

## 🔗 관련 링크
- 원본 GitHub 저장소: [GitHub - kimminki10/newsgen](https://github.com/kimminki10/newsgen)
