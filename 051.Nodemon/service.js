const json = [
    { "id": 1, "name": "Yesenia", "age": 22 },
    { "id": 2, "name": "Hanna", "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 },
    { "id": 4, "name": "German", "age": 18 },
    { "id": 5, "name": "Maria", "age": 27 }
]


function show() {
    return json
}

function showById(id) {
    const filt = json.filter((el) => {
        if (el.id == id) {
            return true
        }
    })
    return filt
}

function createUser(name, age) {
    const obj = {
        id: json.length + 1,
        name: name,
        age: age
    }
    json.push(obj)
    return json
}

function deleteUser(id) {
    const res = json.filter(el => el.id != id)
    return res
}

function updateUser(id, name, age) {
    for (let i = 0; i < json.length; i++) {
        if (json[i].id == id) {
            json[i].name = name
            json[i].age = age
        }
    }
    return json
}

module.exports = { show, showById, createUser, deleteUser, updateUser }

