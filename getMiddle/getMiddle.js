function getMiddle(string) {
    const splitString = string.split('');
    const stringLength = splitString.length;
    const roundNumOdd = Math.round(stringLength / 2 - 1);
    const roundNumEven = roundNumOdd + 1;
    
    if (stringLength % 2 === 0) {
        console.log(`${splitString[roundNumEven - 1]}${splitString[roundNumEven]}`);
    } else {
        console.log(`${splitString[roundNumOdd]}`);
    }

}

getMiddle("test");