# 1차 프로젝트 88문방구 FrontEnd 소개

### 배민문방구는 주식회사 우아한 형제들의 사이트로 재미있게 사는 (Live or buy) 경험을 추구하는 문구, 리빙, 책, 콜라보 한정판 제품을 판매하며 고유의 색감과 깔끔한 디자인과 탄탄한 기본적인 기능들이 합쳐져있는 온라인 커머스 사이트

</br>

- 문구 커머스사이트인 배민문방구 클론 프로젝트
- 2주라는 짧은 기간안에 클론
- 사이트 UI만 참고, 외부 라이브러리 사용 없이 코드는 모두 직접 작성
- Git 주소 : https://github.com/wecode-bootcamp-korea/32-1st-88stationery-frontend.git

</br>

# 개발 인원 및 기간

![20220505_205219](https://user-images.githubusercontent.com/66737450/167081567-29defd3c-70e4-4109-8667-ce7e6be0a62a.jpg)

- 개발기간 2022/4/25 ~ 2022/5/6
- 개발인원
  - 프론트엔드 : 정덕우,최규성,이수광,이현석
  - 백엔드 : 안남규,전예찬

# 사용기술

- FrontEnd : React.js, React Router, SASS
- BackEnd : Python, Django, AWS, MySQL

# 협업 툴

- Git
- Trello
- Slack
  Slack / Notion / Trello / Git을 이용해 소통 및 작업과정 공유와 필요한 데이터 정리

# 협업 및 작업 과정

### 매일 매일 스탠딩 미팅으로 진행과정 및 도움요청, 질문사항 정리 및 소통진행

![](https://blog.kakaocdn.net/dn/s58Pb/btrBluyXjoM/WM0JCSxAZrcxMYkNA7xTPK/img.gif)
![image](https://user-images.githubusercontent.com/66737450/167083143-9c2dbced-45aa-4f8a-b9bb-7f799a93bc69.png)
![image (1)](https://user-images.githubusercontent.com/66737450/167083152-b925216e-38a6-4383-b0fb-d7f432ca9587.png)

</br>

# 구현기능

- 메인화면 페이지 구성
- 메뉴바 구성 및 카테고리
- 검색기능
- 사이드바, 회원가입 & 로그인
- 상세페이지, 장바구니
- 1:1 문의 및 댓글 기능
- 마이페이지

<br />

# 내가 담당한 부분

## Nav바 / Aside바 구현

![chrome-capture-2022-4-7](https://user-images.githubusercontent.com/66737450/167240370-90732668-8a7c-4a1a-9da7-ac6d719a8b47.gif)

- 스크롤이 제일 위에 있을때는 배경을 투명하게 하고 밑으로 조금이라도 움직이면 borderdhk opacity가 발생한다
- Side바에서는 버튼 클릭시 오른쪽에 숨어있던 바를 right: 0으로 보여주면서 나머지 배경은 어둡게 만들었다. 배경을 눌러도 side바가 풀리게 만들었다

## Search 바 구현

![](https://blog.kakaocdn.net/dn/bOq0tb/btrAUk3bCqX/5TdOUJHxbBJ0yRQ7jRndA1/img.gif)

- Search 아이콘 클릭시 위에 있던 search 바를 자연스럽게 내려오게 만들었다
- 서버와의 통신으로 실시간으로 fetch하여 결과물을 화면에 뿌려주게 만들었다

## Main페이지 캐러셀

![](https://blog.kakaocdn.net/dn/emxWSv/btrARLuHBdC/BgpaEMkoeGXpV8AhiBiWRk/img.gif)

- 덕우님이 만드신 main 캐러셀 밑에 내가 만든 캐러셀을 넣어봤다
- 이미지 hover시 뒤에 있던 이미지를 애니메이션으로 나오게 하고 오른쪽 버튼도 나오게 했다
- 배민문방구에서도 한 번 넘기면 캐러셀이 끝이라 넘길시 반대편 버튼을 나오게 구현했다

## 카테고리 별 sorting
![](https://blog.kakaocdn.net/dn/bOEEWy/btrATRU5kZC/a7WE845EvXeN5za98yacH1/img.gif)

- 카테고리 별로 가격이 높은 순 / 낮은 순 / 신상품으로 sorting되는 기능을 구현했다
- 이 부분도 서버와의 통신으로 실시간으로 백엔드에서 처리 후 뿌려주는 부분이다

# Reference

- 이 프로젝트는 배민문방구 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
