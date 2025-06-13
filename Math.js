/**
 * Extraction of digits
 */
let num = 37290;

const getDigits = (n) => {
    const numArr = [];

    while (n) {
        numArr.push(n % 10);
        n = Math.floor(n / 10);
    }

    return numArr;
};

const digitCount = (n) => {
    let length = 0;

    while (n) {
        n = Math.floor(n / 10);
        length++;
    }

    return length;
};

const digitCount2 = (n) => {
    return Math.floor(Math.log10(n) + 1);
};

const reverse = (n) => {
    let multiplyFactor = digitCount2(n) - 1;
    let reverseDigit = 0;

    while (n) {
        const lastdigit = n % 10;
        reverseDigit += lastdigit * 10 ** multiplyFactor;

        n = Math.floor(n / 10);
        multiplyFactor--;
    }

    return reverseDigit;
};

const reverse2 = (n) => {
    let reverseDigit = 0;
    while (n) {
        const lastDigit = n % 10;
        reverseDigit = reverseDigit * 10 + lastDigit;
        n = Math.floor(n / 10);
    }

    return reverseDigit;
};

const palindrome = (n) => {
    const reverseNum = reverse2(n);

    return reverseNum === n;
};

const armstrongNubmer = (n) => {
    const total = digitCount2(n);
    const num = n;

    let asn = 0;

    while (n) {
        const lastDigit = n % 10;
        asn += lastDigit ** total;
        n = Math.floor(n / 10);
    }

    return asn === num;
};

const factors = (n) => {
    const nums = new Set([1]);

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            nums.add(i);
            nums.add(Math.floor(n / i));
        }
    }

    return Array.from(nums).sort((a, b) => a - b);
};

const isPrime = (n) => {
    if (n === 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
};

const isPrime2 = (n) => {
    let fact = 0;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            fact += 2;
        }

        if (fact) return false;
    }

    return fact === 0;
};

const gcd = (a, b) => {
    const f = Math.min(a, b);

    for (let i = f; i > 1; i--) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }

    return 1;
};

// euclidean gcd formula
// gcd(a, b) = gcd(a - b, b) or gcd(a, b) = gcd(a % b, b)

const gcd2 = (a, b) => {
    if (a === 0) return b;

    if (b === 0) return a;

    let max = null;
    let min = null;

    if (a > b) {
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    }

    return gcd2(max % min, min);
};

const gcd3 = (a, b) => {
    while (a > 0 && b > 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }

    return a === 0 ? a : b;
};

console.log(gcd(120, 960));
console.log(gcd2(120, 960));
