function findLongest(array){
    let mapIt = array.map((number) => {
        let string = number.toString();
        return string;
    })
    const longest = mapIt.sort(function (a, b) { return b.length - a.length; })[0];
    console.log(longest);

  }

findLongest([135945, 4181995]);