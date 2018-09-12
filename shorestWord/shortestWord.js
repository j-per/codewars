// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    const splitWords = s.split(' ');
    const numArray = [];
    splitWords.map((word) => {
        numArray.push(word.length);
    })
    numArray.sort(function(a, b){return a - b});
    return numArray[0];
}

findShort("Dogecoin Lisk Steem ProofOfWork MadeSafeCoin LiteCoin Bitcoin Lisk Dash BTC Classic Bitcoin Factom Ethereum LiteCoin Factom Waves DarkCoin 21inc");