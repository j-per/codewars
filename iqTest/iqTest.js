// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. 

// Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers) {
    //Check if vales are odd or even
    const splitNumbers = numbers.split(' ');
    let numberOfEvens = 0;
    let numberOfOdds = 0;
    let oddNumber = 0;
    let evenNumber = 0;
    splitNumbers.forEach((num, index) => {
        if(num % 2 == 0) {
            evenNumber = index + 1;
            numberOfEvens++;
        } else {
            numberOfOdds++;
            oddNumber = index + 1;
        }
    })

    //if even > odd, log the index of the odd value in the array
    if(numberOfEvens > numberOfOdds) {
        return oddNumber;
    } else {
        return evenNumber;
    }

}

iqTest("2 4 7 8 10");
iqTest("1 3 5 10");
iqTest("2 4 6 8 10 12 14 16 17");