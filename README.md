#   PortFolio 프로젝트 소개

바로가기 http://ec2-3-34-3-95.ap-northeast-2.compute.amazonaws.com:3000/

Dizzy 커뮤니티 사이트입니다

# 개발인원및 기간
- 1인개발 (4주소요)

# 목적
- 커뮤니티 기능이 있는 사이트를 만들어 보았습니다

# 구현 영상
https://user-images.githubusercontent.com/108124042/208572433-6aad9795-d7dc-4175-a580-b831f8c7ca18.mp4

- 회원가입 로그인
- 커뮤니티 생성
- 포스트 페이지 생성
- 상위 커뮤니티
- 댓글과 투표기능
- 무한스크롤
- 유저페이지
- 이미지 업로드

# 적용 기술
## docker
- 도커를 이용한 Postgres 실행

## typeorm
- 객체와 관계형 데이터베이스의 데이터 연결
- entity 생성

## nextjs
- 재사용성 middleware
- 캐시 된 데이터를 갱신 mutate
- 특정 dom 선택 useRef
- 상태관리 context api
- Tailwind css
- next/router
- 토큰 생성을 위한 Jsonwebtoken
- 환경변수 dotenv
- 백엔드 cookie-parser
- 데이터를 가져오기 위한 swr
- 무한스크롤기능 useSWRInfinite
- next/router의 useRouter
- Axios 

## typescript
- object data에 타입을 체크하기 위해 interface 사용

## nodejs
- express

## AWS
- EC2 배포
- 환경에 따른 env-cmd


# 에러 사항

- 커뮤니티 생성할때 토큰을 쿠키안에 넣어서 보내주는데 
프론트부분은 withCredentials true을 적어 잘보내졌고
백엔드부분은 안되서 cookie-parser를 설치하니 잘받아졌습니다

- 클라이언트와 서버 요청 응답 주소가 달라 Cors 모듈 사용

- Link 태그 아래 a태그 쓸때 legacyBehavior 기입

