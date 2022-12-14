#   PortFolio 프로젝트 소개

바로가기 http://ec2-3-34-3-95.ap-northeast-2.compute.amazonaws.com:3000/

Dizzy 커뮤니티 사이트입니다

# 개발인원및 기간

- 1인개발 (4주소요)

# 목적

- 커뮤니티 기능이 있는 사이트를 만들어 보았습니다

# 구현 영상

https://user-images.githubusercontent.com/108124042/210052850-e0a05176-0d0b-45f4-8d5a-2988d6600551.mp4


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
- 엔티티 생성하여 클래스를 데이터베이스 테이블로 변환
- BaseEntity 생성하여 각 엔티티에 상속
- Class Transformer로 Expose Exclude 사용

## nextjs

- next/router
- react hooks
- 상태관리 context api
- express

## typescript

- object data에 타입을 체크하기 위해 interface 사용

## 외부

- Tailwind css
- bcryptjs 비밀번호를 암호화하여 데이테베이스에 저장
- class-validator 지정한 오브젝트 프로퍼티 검증
- class-transformer 
- dayjs
- 토큰 생성을 위한 Jsonwebtoken
- 환경변수 dotenv
- 백엔드 cookie-parser
- 데이터를 가져오기 위한 swr
- 무한스크롤기능 useSWRInfinite
- axios 이용하여 데이터전송
- 재사용성 middleware
- 캐시 된 데이터를 갱신 mutate


## AWS

- EC2 배포
- 환경에 따른 env-cmd


# 에러 사항


- 클라이언트와 서버 요청 응답 주소가 달라 Cors 모듈 사용하여 해결
- 유저 생성할때 쿠키저장을 위해 withCredentials true 기입


- 백엔드에서 req.body를 받을때 body-parser 라이브러리가 필요했음


- 미들웨어 user.ts 에서 pending이 걸려 진행이되지 않았다
- next()로 해결


- sub엔티티에 imageUrl과 bannerUrl 이 expose 되지않았음
- Base엔티티에 class-transformer에서 가져온 INSTANCETOPLAIN(THIS) 코드를 추가하여 해결


- 이미지가 로드되지않아 
next.config.js 파일에 
이미지 도메인에 이미지경로를 추가하였다
그래도 나오지않아서 찿아보니
SERVER.TS에 public 파일안에 image를 브라우저로 접근했을때 제공 할수있게 해주기위해
app.use(express.static("public")을 적어서 해결


- 메인페이지에 접속했을때 이미지버그가 발생
로그를 보니 imageurl에 경로가 아닌 urn이나옴
topsub 핸들러에 있는 imageurl부분을 postgres operator || 를 사용하여 경로와 이름을 합쳐주었다니 해결



