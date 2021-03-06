# Why?
프로그래밍은 사실 디버깅의 연속이다. 디버깅은 학습을 통해서 배울 수 있다.

# 학습 목표

- node.JS로 프로그래밍 하는 방법을 배운다.
- node.JS의 모듈방식 프로그래밍(require, export)을 사용할 수 있다.
- node.JS의 디버깅을 배운다.

# 배경 지식

## 프로그래밍 언어와 JavaScript

Compiled와 Intepretered 의 차이점은 무엇이지?

다양한 프로그래밍 언어들은 각각의 특징을 따라 다양한 패러다임을 가지고 있다. 명령형,함수형, 객체지향 등등

JavaScript언어는 script언어형태인데, 다양한 방식의 프로그래밍 패러다임을 가진 멀티패러다임 언어이다.

- imperative (명령형)
- functional (함수형)
- declarative (선언적)
- event-driven(이벤트중심)

## JavaScript는 어떻게 배울 수 있지?

API(Application Protocol Interface)는 다른 프로그래밍 간의 관계를 정의 하는 방법으로 알려져 있다.

라이브러리(library)의 경우 그 메서드(method)에 대한 설명을 API Documents라고 한다. 줄여서 API Docs라고 많이 부른다.

검색방법에 대한 몇 가지 노하우다.

- 구글에서 영어 검색.
- 영어권의 최신 버전의 문서를 본다.
- MDN이라는 사이트가 JavaScript에 대한 설명으로 유용하다.
- 메서드사용법(어떤 타입의 파라미터가 필수고, 옵션이지? 메서드는 어떤것을 반환하지?)을 정확히 알고 써야 한다.
- 영어 읽는게 어렵다면 example을 먼저 실행해보자.
- API Docs에서는 브라우저 지원(browser compatibility)범위에 대해서도 관심있게 보자.
- Stackoverflow 사이트에 친숙하자.

## NodeJS

NodeJS를 통해서 JavaScript를 브라우저 이외의 공간에서 실행할 수 있음. NodeJS는 v8엔진을 통해서 동작됨.

ECMAScript 문법에 따라서 구현가능 (ECMAScript는 JavaScript문법에 대한 명세).

NodeJS를 통해서 JavaScript코드를 CLI를 통해서 실행할 수 있음.

## IDE

IDE는 통합개발환경이다. 무슨 약자일까?

언어별로 어떤 IDE가 있는지 살펴보자. 또한 JavaScript에서 가장 인기 있는 IDE가 무엇인지 알아보자. VSCode이외에 또 어떤 것이 있을까?

VSCode에서도 javascript코딩을 할 수 있고, nodejs를 통해서 javascript소스를 실행시킬수도 있음.

([VSCode 추천 plugin 리스트](https://github.com/OnboardingForJunior/onboarding/blob/main/02.%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD/VSCode-Plugins.md))

## 온라인 에디터

FE개발을 하다보면 코드를 간단히 테스트하고, 다른사람과 공유할 필요가 있을 수 있다.(stack overflow에서도 활용한다)

https://codepen.io/나 https://codesandbox.io/와 같은 사이트에서 프로그래밍 코딩연습을 해보자.

"javascript playground"와 같이 "~ playground"로 구글에 검색하면 온라인 에디터를 찾을 수 있다.

## VSCODE-NODEJS debugging

vscode에서 nodejs디버깅 방법을 익혀보자.

공식홈페이지의 디버깅 방법을 공부한다.

https://code.visualstudio.com/docs/editor/debugging

https://code.visualstudio.com/docs/editor/debugging#nodejs-articles

## NodeJS 의 module 방식의 프로그래밍에 대해서 공부해보자.

Modular programming 은 모듈방식으로 프로그램을 나누고, 이를 통해 복잡한 애플리케이션의 역할을 나눠서 문제를 해결한다. NodeJS에서도 이를 지원하다.

- require, exports !!
- 참고 : https://nodejs.org/api/modules.html
- 공식사이트의 튜터리얼을 따라해서 export 와 require를 사용해보자.

# 미션

## 1. debugging 기술문서 정리하기

실습 이후에, debugging 방법을 markdown문서로 정리하고, github에 이를 정리해서 올린후, 공유한다.

- breakpoints란
- watch 사용법
- call stack 의 의미
- Step over / Step into/ Step out

## 2. 디버깅 팁을 설명해보자.

디버깅을 통해서 배운방법을, 상대방에 설명한다.

# 정리

개발환경은 개발자에게 아주 어려운 일이고 번거로운 일일 수 있다. 하지만 효율적인 개발을 위해서는 환경을 꾸준히 업그레이드 하면서 잘 만들어놔야 한다. 환경이 쾌적하고 효율적이면 코딩도 그만큼 즐겁다.

디버깅과정을 통해서 프로그래밍의 특성을 더 빨리 배울 수 있다.
