// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number following the sequence:

// 0 1 3 6 10 15 21 28 36 45 55 ....

// which is created by

// 0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6+7 etc..

// Input:

// LastNumber

// Output:

// series and result

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

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
