//8. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на uuid, введенный в input. Вывести true, если провека
// успешна. 

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('p')


class DomHtml {
   // data = [
   //    { "id": 1, "name": "Yesenia", "age": 22 },
   //    { "id": 2, "name": "Hanna", "age": 22 },
   //    { "id": 3, "name": "Stanislau", "age": 25 },
   //    { "id": 4, "name": "German", "age": 18 },
   //    { "id": 5, "name": "Maria", "age": 27 }
   // ]
  
   }
   repository(json) {
      const data = [
         { "id": 1, "name": "Yesenia", "age": 22 },
         { "id": 2, "name": "Hanna", "age": 22 },
         { "id": 3, "name": "Stanislau", "age": 25 },
         { "id": 4, "name": "German", "age": 18 },
         { "id": 5, "name": "Maria", "age": 27 }
      ]

      btn.addEventListener('click', () => {
         const check = data.some(el => {
            if (json.id == el.id) p.textContent = 'true'
         })
        
      })
      return check
   }
}

const domhtml = new DomHtml();
const json = JSON.parse(inp.value)
console.log(domhtml.middleware(json));


