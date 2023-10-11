/* 1. Создайте объект, представляющий информацию о товарах в интернет-магазине
(например, { product1: 10, product2: 5, product3: 8 }). Используйте Object.keys() для
подсчета общего количества различных товаров.

 */


const obj = {
    product1: 10,
    product2: 5,
    product3: 8
}

function isValid(val) {
    val.forEach((el) => {
        if (isNaN(el)) throw new Error('not valid value')
    })
}

function sumElems(obj) {
    try {
        let val = Object.values(obj);
        isValid(obj)
        let res = val.reduce((sum, elem) => {
            return sum += elem
        }, 0)
        return res
    } catch (error) {
        return error.message
    }
}

let fin = sumElems(obj);
console.log(fin);