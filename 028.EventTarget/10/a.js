/* 10. После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
инпут. После нажатия на заблокировать данное действие запрещается, тем самым
выключая возможность редактирования значения инпута
 */

const inp = document.querySelector('input');
const unblock = document.querySelector('#unb');
const block = document.querySelector('#bl');
inp.disabled = true


unblock.addEventListener('click', () => {
    inp.disabled = false
})

block.addEventListener('click', () => {
    inp.disabled = true
})



