// 6. Создайте класс SentenceRepository, который имеет массив строк sentences и метод getSentences(), 
// возвращающий этот массив. Наследуйте от него класс LongestSentence, добавив метод
//  getLongestSentence(), который возвращает самую длинную строкупоколичествусимволов.
//  Входные:
//  const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
//  repo.getLongestSentence();
//  → Результат: "This is a longer sentence"
//  Входные:
//  const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
//  repo.getLongestSentence();
//  → Результат: "JavaScript is fun"
//  Входные:
//  const repo = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"]);
//  repo.getLongestSentence();
//  → Результат: "A sentence that is quite long"


class SentenceRepository {
    constructor(arr) {
        this.arr = arr
    }

    getSentences = () => this.arr
}

class LongestSentence extends SentenceRepository {
    getLongestSentence = () => {

    }
}