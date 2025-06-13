/**
 * Selection sort
 */

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let mini = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[mini] > arr[j]) {
                mini = j;
            }
        }

        if (mini !== i) {
            [arr[mini], arr[i]] = [arr[i], arr[mini]];
        }
    }

    return arr;
};

/**
 * Bubble sort
 */

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let noSwap = true;

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                noSwap = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }

        if (noSwap) break;
    }

    return arr;
};

const bubbleSort2 = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let noSwap = true;

        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                noSwap = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }

        if (noSwap) break;
    }

    return arr;
};

/**
 * Insertion sort
 */

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        while (i > 0 && arr[i - 1] > arr[i]) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            i--;
        }
    }

    return arr;
};

/**
 * Merge sort
 */

const mergeTwoSortedArray = (a, b) => {
    const ans = [];

    let s1 = 0;
    let s2 = 0;
    const e1 = a.length;
    const e2 = b.length;

    while (s1 < e1 && s2 < e2) {
        if (a[s1] < b[s2]) {
            ans.push(a[s1]);
            s1++;
        } else {
            ans.push(b[s2]);
            s2++;
        }
    }

    while (s1 < e1) {
        ans.push(a[s1]);
        s1++;
    }

    while (s2 < e2) {
        ans.push(b[s2]);
        s2++;
    }

    return ans;
};

const mergeSort = (arr) => {
    if (arr.length === 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return mergeTwoSortedArray(left, right);
};

const mergeTwoSortedArrayIdx = (arr, si, ei, mid) => {
    const result = [];

    let a = si;
    let b = mid + 1;

    while (a <= mid && b <= ei) {
        if (arr[a] <= arr[b]) {
            result.push(arr[a]);
            a++;
        } else {
            result.push(arr[b]);
            b++;
        }
    }

    while (a <= mid) {
        result.push(arr[a]);
        a++;
    }

    while (b <= ei) {
        result.push(arr[b]);
        b++;
    }

    for (let i = 0; i < result.length; i++) {
        arr[i + si] = result[i];
    }
};

const mergeSortIdx = (arr, si = 0, ei = arr.length - 1) => {
    if (ei === si) return arr;

    const mid = Math.floor((si + ei) / 2);

    mergeSortIdx(arr, si, mid);
    mergeSortIdx(arr, mid + 1, ei);

    mergeTwoSortedArrayIdx(arr, si, ei, mid);

    return arr;
};

/**
 * mergeSort(si, mid);
 * mergeSort(mid+1, ei);
 *      ✅ Correct	     Properly reduces recursion
 *
 * mergeSort(si, mid-1);
 * mergeSort(mid, ei);
 *      ❌ Infinite loop	 Right side never shrinks
 */

const arr1 = [3, 2, 1];
const arr2 = [100, 3, 9, 82, 8, 83, 23, 90, 1, 5, 42, 77, 15, 62, 2];
const arr3 = [1];
const arr4 = [1, 2, 3, 4];

console.log(mergeSortIdx(arr1));
console.log(mergeSortIdx(arr2));
console.log(mergeSortIdx(arr3));
console.log(mergeSortIdx(arr4));
