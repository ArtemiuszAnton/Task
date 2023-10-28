// На входе n – количество элементов массива.
//  Далее производится заполнение массива с клавиатуры.
//  Необходимо создать функцию возвращающую новый массив из элементов, каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”] 

const n = 4;

function doArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt())
    }
    return arr
}



function changeArray(n) {
    let res = doArray(n);
    return res.map((el) => '#' + el)
}

const change = changeArray(n);
console.log(change);
