const json = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 },
    { "id": "firebasestorage", "label": "Firebase Storage", "category": "databases", "priority": 2 },
    { "id": "ibmcloudant", "label": "IBM Cloudant", "category": "databases", "priority": 2 },
    { "id": "react", "label": "React", "category": "webTechnologies", "priority": 1 },
    { "id": "angularjs", "label": "ANGULARJS", "category": "webTechnologies", "priority": 1 },
    { "id": "redux", "label": "Redux", "category": "webTechnologies", "priority": 1 },
    { "id": "materialui", "label": "Material UI", "category": "webTechnologies", "priority": 1 },
    { "id": "git", "label": "Git", "category": "otherSkills", "priority": 2 },
    { "id": "adobephotoshop", "label": "Adobe Photoshop", "category": "otherSkills", "priority": 2 },
];

function getAllData() {
    if (!json.length) {
        throw new Error('json is empty');
    }
    return json
}


function getId(id) {
    const filt = json.filter(el => el.id == id);
    if (!filt.length) {
        throw new Error('this id not found')
    }
    return filt;
};

function createNewData(label, category, priority) {
    const newObject = {
        "id": label.toLowerCase(),
        "label": label,
        "category": category,
        "priority": priority
    };


    for (let i = 0; i < json.length; i++) {
        if (json[i].label.toLowerCase() == newObject.label.toLowerCase()) {
            throw new Error('object already exists') 
        }
    }
    json.push(newObject);

    return json
}

function updateById(id, label, category, priority) {
    let flag = false
    for (let i = 0; i < json.length; i++) {
        if (json[i].id.toLowerCase() == id.toLowerCase()) {
            flag = true
            json[i].label = label
            json[i].category = category
            json[i].priority = priority
        }
    }
    if (!flag) throw new Error('this id not found');
    return json
}

function deleteById(id) {
    const deleteElem = json.filter(el => el.id.toLowerCase() != id);
    if (json.length == deleteElem.length) throw new Error('this id not found');
    return deleteElem
}









module.exports = { getAllData, getId, createNewData, updateById, deleteById }