//8. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на uuid, введенный в input. Вывести true, если провека
// успешна. 

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('p')


class DomHtml {
   data = [
      { "id": 1, "name": "Yesenia", "age": 22 },
      { "id": 2, "name": "Hanna", "age": 22 },
      { "id": 3, "name": "Stanislau", "age": 25 },
      { "id": 4, "name": "German", "age": 18 },
      { "id": 5, "name": "Maria", "age": 27 }
   ]
   middleware() {
      btn.addEventListener('click', () => {
         const check = this.data.some(el => {
            if (inp.value.id == el.id) p.textContent = 'true'
         })
         return check
      })
   }
   controller() {
      const res = this.service()
      return res
   }
   service() {
      const res = this.repository()
      return res
   }
   repository() {
      // const data = [
      //    { "id": 1, "name": "Yesenia", "age": 22 },
      //    { "id": 2, "name": "Hanna", "age": 22 },
      //    { "id": 3, "name": "Stanislau", "age": 25 },
      //    { "id": 4, "name": "German", "age": 18 },
      //    { "id": 5, "name": "Maria", "age": 27 }
      // ]
      // return data
   }
}

const domhtml = new DomHtml();
console.log(domhtml.middleware(data));


