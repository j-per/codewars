function vowelIndices(word){
    const splitWord = word.split('');
    const myExpression = /(a|e|i|o|u|y)/gi;
    let emptyArray = [];
    splitWord.forEach((letter, index) => {
        if (letter.match(myExpression)) {
            emptyArray.push(index + 1);
        }
    }) 
    return emptyArray;
}
