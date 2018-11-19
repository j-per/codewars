function sequenceNum (count) {
    let incrementer = 0;
    const emptyArray = [];
    if(count === 0) {
        return`${count}=${count}`;
    } else if (count < 0) {
        return`${count}<0`;
    } else {
    for(let i = 0; i <= count; i++) {
        incrementer += i;
        emptyArray.push(i);
    }
    const test = emptyArray.join('+');
    return`${test} = ${incrementer}`;
}
}

sequenceNum(2);
sequenceNum(0);
sequenceNum(-3);
