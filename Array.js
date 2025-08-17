const getLargestEle = (arr) => {
    let largest = null;
    for (let i = 0; i < arr.length; i++) {
        if (largest === null || arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
};

const secondLargest = (arr) => {
    arr.sort((a, b) => b - a);

    let largest = null;

    for (let i = 0; i < arr.length; i++) {
        if (largest === null) {
            largest = arr[i];
        } else if (arr[i] < largest) {
            return arr[i];
        }
    }

    return null;
};

const seondLargest2 = (arr) => {
    let largest = null;
    for (let i = 0; i < arr.length; i++) {
        if (largest === null || arr[i] > largest) {
            largest = arr[i];
        }
    }

    let secondLargest = null;
    for (let i = 0; i < arr.length; i++) {
        if (
            (secondLargest === null && arr[i] < largest) ||
            (arr[i] < largest && arr[i] > secondLargest)
        ) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
};

const secondLargest3 = (arr) => {
    if (arr.length === 0) return null;

    let l = arr[0];
    let s = null;

    for (let i = 1; i < arr.length; i++) {
        const ele = arr[i];

        if (ele > l) {
            s = l;
            l = ele;
        } else if (s === null || ele > s) {
            s = ele;
        }
    }

    return s;
};

console.log(secondLargest3([210, 1, 2, 4, 8, 90]));
console.log(secondLargest3([1, 10]));
console.log(secondLargest3([]));
