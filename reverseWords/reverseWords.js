function reverseWords(str) {
    const splitString = str.split(' ');
    let emptyArray = [];

    splitString.forEach((word) => {
        emptyArray.push(word.split('').reverse().join(''));
    })

    return emptyArray.join(' ');
  }
  
  reverseWords("Hello my name is jesse");