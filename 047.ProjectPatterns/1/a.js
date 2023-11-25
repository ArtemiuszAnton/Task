/* 1. Посчитать количество гласных и согласных в строке. Реализовать Html: input,
button, div (для отображения результата подсчета)
 */

class Html {
    countVowels(){
        const inp = document.querySelector('input');
        const btn = document.querySelector('button');
        const p = document.querySelector('p');

        btn.addEventListener('click',()=>{
            const vowels = 'eyuioa';
            let count = 0;
            for (let i = 0; i < inp.value.length; i++) {
              if (vowels.includes(inp.value[i])) {
                count++
              }
            }
            p.textContent = `Гласные: ${count} Согласные: ${inp.value.length - count}`
            inp.value = ''
        })
    }
}

const html = new Html();
html.countVowels();
