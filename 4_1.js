const calc= (num, cb) => {
    let acc = 1;
    for (var i=2; i<=num; i++) {
        acc = cb(acc, i);
    }
    return acc;
}

const calcArr = (arr, cb) => {
    let acc = arr[0];
    for (var i=1; i<arr.length; i++) {
        acc = cb(acc, arr[i]);
    }
    return acc;
}

console.log(calc(5, (a, b) => a + b))
console.log(calc(5, (a, b) => a * b))
console.log(calc(4, (a, b) => a - b))

console.log(calcArr([1,2,3,4,5], (a, b) => a + b))
console.log(calcArr([1,2,3,4,5], (a, b) => a * b))
console.log(calcArr([1,2,3,4], (a, b) => a - b))