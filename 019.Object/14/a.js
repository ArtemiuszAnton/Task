/*  14. На входе статичный объект с повторяющимися значениями. Необходимо
отфильтровать значения объекта и оставить только уникальные значения
{ {
0 : 7, 0 : 7,
1 : 7, 1 : 6,
2 : 6, 2 : 5,
3 : 5, -> 3 : 2,
4 : 2, 4 : 1
5 : 2 }
6 : 1
}
 */

const obj = {
    1: 1,
    3: 1,
    4: 13,
    5: 5,
    6: 7,
    7: 8,
    8: 8,
}
arr = []
for (const key in obj) {
    arr.push(obj[key])

}

let nArr = []
for (let i = 0; i < arr.length; i++) {
    if (!nArr.includes(arr[i])) {
        nArr.push(arr[i])
    }

}


const res = {};
nArr.forEach(function (elem, index) {
    res[index] = elem
});
console.log(res);