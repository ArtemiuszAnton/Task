/* На вход статичный объект. Необходимо объект проверить на пустоту. Если же
объект пустой, то выводим false, если же содержит хотя бы одну пару (ключ:
значение), то true
 */


const obj = {
    // id: 333,
    // 44: 555,
}
let res = 0
for (const key in obj) {
    if (key) {
        res++
    }
}
console.log(res == 0 ? false : true );