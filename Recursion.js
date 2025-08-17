/**
 * Recursion on Number
 */
function printNTime(n, content, curr = 0) {
    if (curr === n) return;

    console.log(curr + 1, content);
    printNTime(n, content, curr + 1);
}

function print1ToN(n) {
    if (n === 0) return;

    print1ToN(n - 1);
    console.log(n);
}

function printNTo1(n) {
    if (n === 0) return;

    console.log(n);
    printNTo1(n - 1);
}

function sumOfN(n) {
    if (n === 0) return n;

    return n + sumOfN(n - 1);
}

function factorial(n) {
    if (n === 0) return 1;

    return n * factorial(n - 1);
}

/**
 * Recursion on Array
 */
function reverseArr(arr, si = 0, ei = arr.length - 1) {
    if (si >= ei) return arr;

    [arr[si], arr[ei]] = [arr[ei], arr[si]];

    return reverseArr(arr, si + 1, ei - 1);
}

function reverseArr2(arr, si = 0) {
    const ei = arr.length - 1 - si;

    if (si >= ei) return arr;

    [arr[si], arr[ei]] = [arr[ei], arr[si]];

    return reverseArr2(arr, si + 1);
}

function reverseArr3(arr) {
    if (arr.length <= 1) return arr;

    const result = reverseArr3(arr.slice(1));
    result.push(arr[0]);

    return result;
}

/**
 * Recursion on String
 */
function isPalindrome(s, l = 0) {
    const r = s.length - 1 - l;

    if (l >= r) return true;

    if (s[r] !== s[l]) return false;

    return isPalindrome(s, l + 1);
}

/**
 * Recursion Example
 */
const sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    };
};

console.log(sum(1)(2)(3)(4)(5)());

const sum1 = (a) => (b) => b ? sum(a + b) : a;

console.log(sum1(1)(2)());
console.log(sum1(1)(2)(3)());
console.log(sum1(1)(2)(3)(4)());
