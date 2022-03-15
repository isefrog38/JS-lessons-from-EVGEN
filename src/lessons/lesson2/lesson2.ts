console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9


/*function sum (numb: number) {
    return function (numb2: number) {
        return numb + numb2
    }
}

console.log(sum(3)(6))*/

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

/*function makeCounter(num: number) {
    let counter = num;
    return function () {
        const _methods = {
            increase: counter++,
            decrease: counter--,
            reset: counter === 0,
            set: (number: number) => counter === number,
        }
        return counter++
    }
}

const counter = makeCounter(1);
console.log(counter()); // 1
console.log(counter()); // 2
const counter2 = makeCounter(1);
console.log(counter2()); // 1
console.log(counter()); // 3*/

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

/*function superSum (number: number): Function {
    if (number <= 0) return () => 0
    if (number === 1) return (n: number) => n

    let _array: Array<number> = [];

    function helper (...args: number[]) {
        _array = [..._array, ...args];
        if (_array.length >= number) {
            _array.length = 3;
        } else {
            return helper
        }
        return _array.reduce((sum, number) => sum + number ,0)
    }
    return helper
}
console.log(superSum(0))//0
console.log(superSum(3)(2)(7)(3)) //12
console.log(superSum(3)(2)(5,6)) //13
console.log(superSum(3)(2,5,3)) //10
console.log(superSum(3)(2,5)(3)) //10
console.log(superSum(3)(2,5)(3,9)) //10*/

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion



/*
///                                   RECURSION

function sumTo (numb: number): number {
    if (numb == 1) return 1
       return numb + sumTo(numb - 1)
}

console.log(sumTo(100))
//                                      FACTORIAL   !5 = 5 * 4 * 3 * 2 * 1

function factorial (n: number): number {
    if (n == 1) return 1
    return n * factorial(n - 1)
}
function factorial2(n: number): number {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5))
console.log(factorial2(5))
*/




// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};