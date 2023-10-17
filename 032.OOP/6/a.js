/* 6. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
controller, service, repository. Цепочка взаимодействия между методами
следующая:
controller -> service -> repository, где:
controller – функция, принимающая данные. Принимает json
service – функция проверки на то что с repository вернулось значение
repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
этим массивом осуществляется только в repository. Массив находится в
приложении
Задание:
Необходимо вывести в консоль весь массив
*/

class Server {
    controller() {
        const data = this.service()
        return data
    }

    service() {
        const data = this.repository()
        return data
    }

    repository() {
        const arr = [{ id: 1, name: 'artem' }, { id: 2, name: 'oleg' }, { id: 3, name: 'alina' }];
        return arr
    }
}

const server = new Server()
console.log(server.controller());