function isPrimeNum(num) {
    if(num < 2) return false;
    if(num < 4) return true;
    if(num % 2 === 0) return false;
    if(num % 3 === 0) return false;
    let i = 6;
    while((i-1)*(i-1) <= num) {
        if (num % (i-1) === 0 || num % (i+1) === 0) {
          return false
        }
        i+=6;
    }
    return true
}