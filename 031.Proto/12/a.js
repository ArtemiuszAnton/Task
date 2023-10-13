/* 12. Реализуйте функцию, которая будет считать количество своих вызовов
 */

function getCalls() {
    let res = 0
    return () => {
        res += 1
        console.log(res);
    }
}

let res = getCalls()
res()
