# BadaWrite - 실시간 스크립트 지원 서비스

### 목적
영세한 단체(소규모 극단, 독립 강연자, 비영리 조직 등)의 공연/강연 진행시 실시간 스크립트 제공

### 문제점
- 강연 중 실시간으로 스크립트를 생성하기 어렵다.
- 전문 속기사를 고용하는 데 드는 비용이 부담될 수 있다.
- 스크립트 제공의 부재로 인해 청각장애인이 불편함을 겪거나 강연 내용을 따라가기 힘든 사람들이 있다.

### 기능
#### 1. 마이크 On/Off 버튼을 사용한 스크립트 작성
- 마이크 버튼 클릭시 음성을 텍스트로 변환
- 마이크 버튼 재클릭시 마이크 끄기
#### 2. 스크립트 리셋
- 리셋 버튼 클릭시 스크립트 내용 삭제
#### 3. 스크립트 복사 
- 복사 버튼 클릭시 스크립트 내용 복사
#### 4. 전체화면
- 전체화면 버튼 클릭시 전체화면 실행
- 전체화면 버튼 재클릭 또는 Esc 입력시 전체화면 끄기
#### 5. 폰트 크기 설정
- +, - 버튼 클릭시 스크립트 폰트 크기 조절

### 라이브러리
#### 1. React-speech-kit
- <a href="https://developer.mozilla.org/ko/docs/Web/API/Web_Speech_API">Web Speech API</a>를 기반으로 하여 음성 인식 기능을 간편하게 통합할 수 있는 React 라이브러리
- <a href="https://github.com/MikeyParton/react-speech-kit">React-speech-kit Github</a> 

#### 2. IonIcons
- 다양한 플랫폼(web, iOS, Android, and desktop apps)에서 사용할 수 있는 고품질의 아이콘을 제공하는 오픈 소스 아이콘 라이브러리
- <a href="https://github.com/ionic-team/ionicons">IonIcons Github</a>


### 빌드 방법

1. 깃헙 레포지토리 클론

   ```$ git clone https://github.com/minkyung5x5/side-badawrite.git```
2. Terminal에서 패키지 설치
   
   ```$ npm install```
   
4. Terminal에서 실행
   
   ```$ npm run dev```

