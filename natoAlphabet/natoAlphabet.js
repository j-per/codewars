// The idea for this Kata came from 9gag today.here

// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

// Like this:

// Input: If you can read

// Output: India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

// Some notes

// Keep the punctuation, and remove the spaces.
// Use Xray without dash or space.
// Reference

// alt text

// You can use the NATO hash with the alphabet
function to_nato(words) {
	
const nato = {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu"
};

    console.log(words.toUpperCase().split('').map(letter => nato[`${letter}`]).join(' '));

}

to_nato("Jesse Perdue") //Juliett Echo Sierra Sierra Echo Papa Echo Romeo Delta Uniform Echo
