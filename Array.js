const getLargestEle = (arr) => {
    let largest = null;
    for (let i = 0; i < arr.length; i++) {
        if (largest === null || arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
};

const seondLargest = (arr) => {
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

    let seondLargest = null;
    for (let i = 0; i < arr.length; i++) {
        if (
            (seondLargest === null && arr[i] < largest) ||
            (arr[i] < largest && arr[i] > seondLargest)
        ) {
            seondLargest = arr[i];
        }
    }

    return seondLargest;
};

console.log(seondLargest2([210, 1, 2, 4, 8, 90]));
console.log(seondLargest2([1, 10]));
console.log(seondLargest2([]));
