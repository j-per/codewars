// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str

// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
    const splitString = str.split('');
    splitString.map((letter) => {
        if(letter.match(/[a-z]/gi)) {
            return letter
        } 
    })
    console.log(splitString.reverse().join(''));

}

reverseLetter('Hello');