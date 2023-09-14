/*
Необходимо реализовать конкатенацию строк при каждом последующем вызове
функции с использованием замыкания
 */

function sumString() {
    let str = '';
    return (newString) => {
        str += newString;
        console.log(str);
    }
}

let res = sumString()

res('fes');
res('frf');
res('frrfr');