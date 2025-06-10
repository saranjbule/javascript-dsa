/**
 * Extraction of digit
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

const numberOfDigits = (n) => {
    let length = 0;

    while (n) {
        n = Math.floor(n / 10);
        length++;
    }

    return length;
};

const numberOfDigits2 = (n) => {
    return Math.floor(Math.log10(n) + 1);
};

const reverseNumber = (n) => {
    let reverse = "";

    while (n) {
        reverse += n % 10;
        n = Math.floor(n / 10);
    }

    return reverse;
};

console.log(reverseNumber(num));
