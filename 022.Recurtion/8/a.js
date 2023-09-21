// 8. Вычислите сумму массива чисел статичного массива используя рекурсию

let arr = [3, 32, 5, 6];

function getSum(arr) {
    if (arr.length === 0) return 0;
    // console.log(arr[0]);
    return arr[0] + getSum(arr.slice(1))
    

}

let res = getSum(arr);
console.log(res);


