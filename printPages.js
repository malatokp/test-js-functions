const pages = '1,2,4,5,6,7,8,9,15,1,4,15,16,17,18, 88 ,66';

const arrayPages = pages.split(',').map(el => parseInt(el))
const arrayPagesSorted = [...arrayPages].sort((a, b) => a - b);

// console.log(arrayPages)
//console.log(arrayPagesSorted)

let arrayDuplicatedPages = [];

for (let i = 0; i < arrayPagesSorted.length; i++) {
    for (let k = i+1; k < arrayPagesSorted.length; k++) {
        if (arrayPagesSorted[i] === arrayPagesSorted[k]) {
            arrayDuplicatedPages.includes(arrayPagesSorted[i]) ? '': arrayDuplicatedPages.push(arrayPagesSorted[i]);
        }
    }
}

console.log('arrayDuplicatedPages ', arrayDuplicatedPages)

let arrayWithoutDuplicatedPages = [];

arrayPagesSorted.forEach(el => {
    if(!arrayDuplicatedPages.includes(el)){
        arrayWithoutDuplicatedPages.push(el);
    }
})


console.log(arrayWithoutDuplicatedPages)
/////////////////////////////

let arrayRangesPages = [];
let multidimensionalArray = [];
//let finalArrayString = ''

for (let i = 0; i < arrayWithoutDuplicatedPages.length; i++) {
        if (arrayWithoutDuplicatedPages[i] + 1 === arrayWithoutDuplicatedPages[i+1]) {

            arrayRangesPages.push(arrayWithoutDuplicatedPages[i]);
            //newPagesArray.push(pagesSorted[i])
        } else {
            if(arrayWithoutDuplicatedPages[i] === arrayWithoutDuplicatedPages[i-1] + 1){
                arrayRangesPages.push(arrayWithoutDuplicatedPages[i]);
                multidimensionalArray.push(arrayRangesPages)
                // finalArrayString = finalArrayString + newArrayWithRange[0].toString() + '-' + newArrayWithRange[newArrayWithRange.length-1].toString() + ',';
                arrayRangesPages = [];
            }
        }
}

console.log('multidimensionalArray ', multidimensionalArray);

console.log('multidimensionalArray ', );


let arraySinglePages = [];

arrayWithoutDuplicatedPages.forEach(el => {
    if(!arrayRangesPages.includes(el)){
        arraySinglePages.push(el);
    }
})

console.log('arraySinglePages ', arraySinglePages)

// let formatedString = ''
// let setRangesPages = [];
// let setRangesPagesString = '';
// let newArrayRanges = arrayRangesPages;
//     function makeFormatedString(){
//     arrayPagesSorted.forEach(el => {
//         if(arrayDuplicatedPages.includes(el)){
//             formatedString += el + ',';
//         }
//         else if(arrayRangesPages.includes(el)){
//
//             for (let i = 0; i < newArrayRanges.length; i++) {
//                 if (newArrayRanges[i] + 1 === newArrayRanges[i+1]) {
//
//                     setRangesPages.push(arrayWithoutDuplicatedPages[i]);
//                     //newPagesArray.push(pagesSorted[i])
//                 } else {
//                 }
//             }
//         }
//     })
// }