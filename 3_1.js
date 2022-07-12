let first = Number.NEGATIVE_INFINITY;
let second = Number.NEGATIVE_INFINITY;

let arr = [373, 386, 1151, 229, 1549, 363, 649, 1344, 1158, 320, 1301, 327, 1483, 492, 1392, 1454, 174, 1610, 1927, 1372, 1077, 82, 159, 403, 454, 1179, 478, 1251, 505, 18, 1219, 410, 1361, 857, 643, 1050, 151, 1314, 42, 537, 1379, 509, 246, 1756, 351, 684, 1788, 1003, 1239, 1277];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
        second = first;
        first = arr[i];
    }
    else if (arr[i] > second) {
        second = arr[i];
    }
}

console.log(first, second);