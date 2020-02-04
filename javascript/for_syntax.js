const numbers = [{num: 1},{num: 2},{num: 3},{num: 4},{num: 5}]

/**
 * for of 와 for in 의 차이
 */

 for (let number of numbers) { // Object 로 받아 올 수 있음
     console.log(number)
 }

 for (let idx in numbers) { // 
    console.log(numbers[idx])
}
