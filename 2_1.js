// brute force
let isPrime = true;
num = 17;
for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false
    }
}
console.log(isPrime)

// better way
isPrime = true;
num = 17;
for (var i = 2; i*i <= num; i++) {
    if (num % i === 0) {
      isPrime = false
    }
}
console.log(isPrime)

// betterer way
function isPrimeNum(num) {
    if(num < 2) return false;
    if(num < 4) return true;
    if(num % 2 === 0) return false;
    if(num % 3 === 0) return false;
    for (var i = 6; (i-1)*(i-1) <= num; i+=6) {
        if (num % (i-1) === 0 || num % (i+1) === 0) {
          return false
        }
    }
    return true
}
