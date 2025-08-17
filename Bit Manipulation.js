const convert2Binary = (num) => {
    let binary = '';

    while (num) {
        binary = `${num % 2}` + binary;
        num = Math.floor(num / 2);
    }

    return binary.length ? binary : '0';
};

const convert2Decimal = (num) => {
    let decimal = 0;

    for (let i = num.length - 1; i > -1; i--) {
        if (num[i] === '1') {
            decimal += 2 ** (num.length - 1 - i) * num[i];
        }
    }

    return decimal;
};

const swap2Numbers = (a, b) => {
    console.log(`a = ${a}, b = ${b}`);

    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    console.log(`a = ${a}, b = ${b}`);
};

// check if i'th bit is set or not
const isSetBitI = (n, i) => {
    return (n >> i) & 1;
};

const isSetBitI2 = (n, i) => {
    return (1 << i) & n;
};

// set i'th bit
const setIBit = (n, i) => {
    return (1 << i) | n;
};

// clear i'th bit
const clearIBit = (n, i) => {
    return ~(1 << i) & n;
};

// toggle the i'th bit
const toggleIBit = (n, i) => {
    return (1 << i) ^ n;
};

// remove the last set bit (rightmost)
const removeLastSetBit = (n) => {
    return n & (n - 1);
};

// check if the number is power of two
const powerOf2 = (num) => {
    return ((num - 1) & num) === 0;
};

// number of set bits in a number
const noSetBit = (num) => {
    let count = 0;
    while (num) {
        num &= num - 1;
        count++;
    }

    return count;
};

// check if number is odd or even
const isOdd = (num) => {
    return num & 1;
};
