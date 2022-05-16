# 미션1: 저장소 생성 및 커밋하기

## Git 초기 설정
1. 다음 링크를 통해 github의 access token을 발급받는다.<br />
https://curryyou.tistory.com/344

2. git-bash를 우클릭 관리자 권한으로 실행 후 다음 명령어를 입력
```
  git config --local --unset credential.helper
  git config --global --unset credential.helper
  git config --system --unset credential.helper
  git config --global user.name "본인이름"
  git config --global user.email "본인 이메일 주소"
  git pull
  username 입력하라고 팝업 창이 뜸
  github에서 your profiles 페이지의 주소창에 있는 username을 입력
  password는 1번에서 발급받은 토큰 입력
```

3. 다음 명령어로 비밀번호 저장을 한다.
git config credential.helper store

## 첫번째 커밋
- 깃헙에서 hello-git 저장소 생성, 저장소의 소유자가 아닌 사람에게 편집 권한 부여
- 로컬에 클론
- git clone, add, commit, push, pull 명령에 대한 설명이 포함된 hello.md 생성
- hello.md add, commit

## 두번째 커밋
- hello.md 에 "좋은 커밋이란 무엇인가?" 에 대한 내용을 간단히 정리해서 추가
- add, commit, push
- 원격 저장소에서 확인

# 미션2: 브랜치 생성 및 커밋하기
- document 브랜치 생성 및 체크아웃
- branch.md 를 새로 만들고 branch, checkout, merge 에 대한 설명을 작성한다.
- add, commit, push
- master에 document 브랜치를 merge한다.
- master를 push하고 깃헙에서 확인한다.

# 미션3: 풀리퀘 보내기
- document 브랜치 체크아웃
- branch.md에 pull request에 대한 내용 추가 및 커밋 생성
- 깃헙에서 master 저장소에 풀리퀘를 보낸다.
- 머지하고 확인한다.

# 미션4: 저장소 포크 및 풀리퀘
- 저장소의 소유자가 아닌 사람의 원본 저장소를 포크한다.
- test 브랜치를 만들고 GitHub flow 에 대한 내용을 간단 정리해서 추가한다.
- 원본 저장소의 master 브랜치에 풀리퀘를 보낸다.
- 머지하고 확인한다.
