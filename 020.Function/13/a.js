/* На входе строка. Необходимо создать функцию, возвращающую true, если это
слово анаграмма и false в противном случае

 */

const str_1 = prompt();
const str_2 = prompt();

function isValidStr(str_1, str_2) {
  if (!isNaN(str_1)) return false
  if (!isNaN(str_2)) return false
  return true
}

function checkStr(str_1, str_2) {
  let res = isValidStr(str_1, str_2)
  if (res === true) {
    return str_1.split('').sort().join('') === str_2.split('').sort().join('') ? true : false
  } else {
    return 'error'
  }

}

let res = checkStr(str_1, str_2);
console.log(res);


