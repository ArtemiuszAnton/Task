// 4. Создайте класс StringRepository, который имеет статичный массив words. Наследуйте от него класс
//  FilteredWords, добавив метод getWordsByLength(length), который возвращает только те слова,
//  длинакоторыхравна заданномузначению.
//  Входные:
//  const repo = new FilteredWords(["apple", "banana", "kiwi", "plum"]);
//  repo.getWordsByLength(5);
//  → Результат: ["apple", "plum"]
//  Входные:
//  const repo = new FilteredWords(["cat", "dog", "elephant", "mouse"]);
//  repo.getWordsByLength(3);
//  → Результат: ["cat", "dog"]


// class StringRepository {
//     arr = [];
// }

// class FilteredWords extends StringRepository {
//     constructor(arr) {
//         this.arr = arr;
//     }

//     getWordsByLength = (length) => this.arr.filter(el => el.length === length);

// }