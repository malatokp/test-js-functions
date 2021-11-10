const ChildClass = require('./childClass')

const wordPalindrom = 'arra'

// const isPalindrom1 = (word) => {
//     let invertedWord = ''
//     for(let i = word.length-1; i >= 0; i--){
//         invertedWord+=word[i];
//     }
//     return word === invertedWord;
// }
//
// console.log(isPalindrom1(wordPalindrom));

// const isPalindrom2 = (word) => {
//     return word === word.split('').reduceRight(
//         (acc, item) => {
//             acc = acc + item;
//         return acc;
//     })
// }
//
// console.log(isPalindrom2(wordPalindrom));

const firstChildPage = new ChildClass();
firstChildPage.takeInformation();

const arr1 = [1,2,3,4,5,6,7];


// arr1.forEach(el => {
//     arr2.push(el * 10);
// })
//
// console.log(arr2, '\n', arr1)

const arr2 = arr1.map(el => el*10)

console.log(arr2, '\n', arr1)
