// 17. Найти значение массива, повторяющееся в нем наибольшее количество раз

let arr = [1, 1, 1, 1, 1, 12, 3, 3, 5, 1, 1, 2, 2, 22]
let res = 0;
let res1 = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
        res++
    } else {
        res1++
    }
}

if (res > res1) {
    console.log(res);
} else {
    console.log(res1);
}