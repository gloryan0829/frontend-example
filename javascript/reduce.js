const a = ['a','a','a','b','b','c','d','d']

const reducedA = a.reduce((wordCount, currentItem, currentItemIndex) => {
    if(wordCount[currentItem]) {
        wordCount[currentItem] += 1
    } else {
        wordCount[currentItem] = 1
    }
    return wordCount
},{});

console.log(reducedA)