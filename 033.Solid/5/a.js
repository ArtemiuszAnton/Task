/* 5. Реализуйте класс ServerPost. Обязательными функциями считаются функции
middleware, controller, service, repository. Цепочка взаимодействия между методами
следующая:
middleware -> controller -> service -> repository, где:
middleware – функция валидатор
controller – функция, принимающая данные. Принимает json
service – функция проверки на то что с repository вернулось значение
repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
этим массивом осуществляется только в repository. Массив находится в приложении
Задание:
на вход подается JSON вида:
`{
"name": "Test", "age": 1
}`
Необходимо добавить в массив БД объект только в том случае, если нет совпадений
по name. Если совпадения нет, то в объект клиента добавить ключ id с последним
возможным уникальным id БД, таким образом, чтобы в БД был запушен объект вида
{"id": 6, "name": "Test", "age": 1}
Если совпадение есть – ошибка. Добавить проверки  */


class ServerPost {
    middleware(json) {
try {
    if(!json.hasOwnProperty('name')) throw new Error('invalid')
    const res = this.controller(json);
    return res
} catch (error) {
    return error.message
}
    }

    controller(json) {
        const res = this.service(json)
        return res
    }

    service(json) {
        const res = this.repository(json)
        return res
    }

    repository(json) {
        const data = [
            { "id": 1, "name": "Yesenia", "age": 22 },
            { "id": 2, "name": "Hanna", "age": 22 },
            { "id": 3, "name": "Stanislau", "age": 25 },
            { "id": 4, "name": "German", "age": 18 },
            { "id": 5, "name": "Aldf", "age": 27 }
        ]
        let check = data.some(el => {
            if (el.name === json.name) return true
        })
        if (check) throw new Error('такой name уже имеется')
        else {
            data.push({ "id": data.length + 1, ...json })
            return data
        }
    }
}


const serverpost = new ServerPost();
const json = JSON.parse(`{"name": "Test", "age": 1}`)
console.log(serverpost.controller(json));