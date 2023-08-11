/* Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
'xx.xx.xxxx.
 */

let date = '2023-08-11'
let dateTochka = date.split('-').reverse()
console.log(dateTochka.join('.'));