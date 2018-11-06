// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    const sortArray = arr.sort(function(a, b){return a - b});
    if(sortArray[0] === sortArray[1]) {
        return sortArray[sortArray.length-1];
    } else {
        return sortArray[0];
    }
}

findUniq([ 1, 1, 1, 2, 1, 1 ])

findUniq([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16 ])

findUniq([ 15, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ])

findUniq([10, 10, 10, 5, 10, 10])