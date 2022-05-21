## 공부는 어떻게?

- 구글링, stackoverflow
- MDN 읽기
- 디버깅

## JS의 표준?

- ECMAScript ??
- ES 2015? , ES6?

## 제시코드

두 개의 클래스를 제공한다.

https://gist.github.com/crongro/61d3126778c34c0667a5ed81af5d1a17

### ClassifierAlpha

자연수 분류 ClassifierAlpha, PrimeAlpha 를 이용해서 2-100까지 자연수 중에서  
약수중 완전수(perfect), 과잉수(Abundant), 부족수(Deficient)인지 판단하는 ClassifierAlpha 클래스.

### PrimeAlpha 클래스

소수(Prime) 인지를 판단하는 클래스.

## 미션

- 두 개의 Classes코드를 제거하고, 함수로만 만든다. 중복코드가 있다면 중복을 제거한다.
- var를 사용하지 않고, let이나 const를 사용. 차이에 대해서 주석으로 짧게 설명을 남긴다.
- 생성자에 default paramter를 0으로 세팅하세요
- '==' 말고 '===' 를 사용해서 값을 비교한다. 그 차이에 대해서 주석으로 1-2줄 남겨보세요.
- 완전수(perfect), 과잉수(Abundant), 부족수(Deficient), 소수(Prime) 목록을 각각 출력
  - reduce API를 사용해야 한다.
  - template literal을 사용해서 결과를 친절한 설명으로 표현한다.
```
2 : deficient, prime
3 : deficient, prime
4 : deficient,
5 : deficient, prime
6 : perfect,
7 : deficient, prime
8 : deficient,
9 : deficient,
10 : deficient,
```
- 기존의 for - loop 중에, forEach, map, filter, reduce 등을 활용해서 수정할 수 있다면 수정한다.
- 배열로 되어 있는 자료구조를 JavaScript의 Set으로 수정한다.

## 추가 미션
- JavaScript Classes 에서 상속을 어떻게 구현하는 것인지, 상속은 어떤 원리인지 알아보고 정리한다
  - 관련 키워드 : extend, prototype
- 코드를 더 리팩토링할 수 있는가? 그런 부분을 찾아서 수정해보자. 리팩토링한 부분에 대해서는 주석으로 설명을 추가한다.

## 객체지향 프로그래밍

- 배달의민족 메인화면을 개발한다고 가정한다.
- 클래스를 여러개로 나눈다고 가정하면, 어떤 것들이 클래스 단위가 될까?

## JavaScript에서 객체지향 프로그래밍을 어떻게 할까?

- Object literal
- 생성자패턴
- ES Classes