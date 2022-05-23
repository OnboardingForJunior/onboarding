{
    /* Array.forEach
        배열을 순회하는 Array 클래스의 함수.
        Callback 함수를 인자로 받아서 사용한다.
        익명 함수 또는 Arrow Function을 사용할 수 있다.
    */
    const source = [1,2,3,4,5];
    let sum = 0;
    
    source.forEach(num => {
        sum += num;     // 클로저 스코프로 인해서 블록 외부의 sum 변수에 접근해서 값을 바꿈.
    });
    
    console.log("Array.forEach")
    console.log(`source: [${source}]`)
    console.log(`sum: ${sum}`);
}

{ 
    /* Array.map
        배열을 순회하며 각 항목을 교체하는 Array 클래스의 함수.
    */
    const source = [1,2,3,4,5];

    const result = source.map(num => {
        return num * 2;         //각 항목에 곱하기 2
    })
    
    console.log("\nArray.map")    
    console.log(`source: [${source}]`);
    console.log(`result: [${result}]`);
}

{
    /* Array.filter
        배열을 순회하며 각 항목을 필터링하는 Array 클래스의 함수.
    */
   const source = [1,2,3,4,5];

   const result = source.filter(num => {
        return num % 2 === 0;       // 2로 나눈 나머지가 0인 경우 true
    })

    console.log("\nArray.filter")    
    console.log(`source: [${source}]`);
    console.log(`result: [${result}]`);
}

{
    /* Array.reduce Practice 1 (합계 구하기)
        배열을 순회하며 각 항목을 이용해서 어떠한 값을 누적해가는 Array 클래스의 함수.
        인자는 Callback 함수와 초기 값

        Callback 함수의 인자는 2~3개 (acc, cur, idx)
        acc: 누적되는 값.
        cur: 배열의 현재 인덱스의 value.
        idx: 배열의 현재 인덱스의 key. (0, 1, 2, 3, ...)
    */
    const source = [1,2,3,4,5];

    const sum = source.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    
    console.log("\nArray.reduce practice 1")    
    console.log(`source: [${source}]`);
    console.log(`sum: ${sum}`);  
}

{
    // Array.reduce Practice 2 (곱하기 2)
    const source = [1,2,3,4,5];

    const result = source.reduce((acc, cur) => {
        acc.push(cur * 2);      // push: 배열에 아이템을 추가하는 함수
        return acc;
    }, []);
    
    console.log("\nArray.reduce practice 2")    
    console.log(`source: [${source}]`);
    console.log(`result: [${result}]`);  
}

{
    // Array.reduce Practice 3 (짝수 필터링)
    const source = [1,2,3,4,5];

    const result = source.reduce((acc, cur) => {
        if(cur % 2 === 0) {
            acc.push(cur);
        }
        return acc;
    }, []);

    console.log("\nArray.reduce practice 3")    
    console.log(`source: [${source}]`);
    console.log(`result: [${result}]`);  
}

{
    // Array.reduce Practice 4 (객체에서 필요한 값 뽑아내기)
    const person1 = {
        name : "종구",
        age : 29,
        [Symbol.toPrimitive](hint) {        // 문자열 출력을 위한 toString 구현 (아직 공부 X)
            return `{name: ${this.name}, age: ${this.age}}`
        }
    }
    
    const person2 = {
        name : "Lucas",
        age : 30,
        [Symbol.toPrimitive](hint) {
            return `{name: ${this.name}, age: ${this.age}}`
        }
    }
    
    const person3 = {
        name : "동구",
        age : 33,
        [Symbol.toPrimitive](hint) {
            return `{name: ${this.name}, age: ${this.age}}`
        }
    }

    const source = [person1, person2, person3];

    const nameList = source.reduce((acc, cur) => {
        if(cur.age <= 30) {             // 30살 이하인 사람의 이름을 뽑아낸다.
            acc.push(cur.name);
        }    
        return acc;
    }, []);

    console.log("\nArray.reduce practice 4")
    console.log(`source: [${source}]`);
    console.log(`nameList: [${nameList}]`);  
}


{
    /* 자료구조 Set
        중복되지 않은 Key 값의 집합.
    */

    const arr = [1, 2, 2, 2, 3, 3, 4, 5, 6, 6];
    const set = new Set(arr);
    
    console.log("\n자료구조 Set")
    console.log(`array: [${arr}]`);
    console.log(`set: [${[...set]}]`);
    console.log(`set에 1이 존재하는가? ${set.has(1)}`);
    console.log(`set에 10이 존재하는가? ${set.has(10)}`)
}