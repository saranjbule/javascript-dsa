const ROW = 4;

/**
 * Sqaure
 */
console.log(`
    ***** Square *****
    `);

for (let i = 0; i < ROW; i++) {
    let str = "";
    for (let j = 0; j < ROW; j++) {
        str += "* ";
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = "";
    for (let j = 0; j < ROW; j++) {
        str += `${i}${j} `;
    }
    console.log(str);
}

/**
 * Triangle
 */
console.log(`
    ***** Triangle *****
    `);

for (let i = 0; i < ROW; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
        str += "* ";
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = "";
    for (let j = 0; j < ROW; j++) {
        if (j >= ROW - 1 - i) {
            str += "* ";
        } else {
            str += "  ";
        }
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = "";
    for (let j = 0; j < ROW - i; j++) {
        str += "* ";
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = "";
    for (let j = 0; j < ROW; j++) {
        if (j > i) str += "* ";
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
        str += `${i + 1} `;
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
        str += `${String.fromCharCode(i + 65)} `;
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
        str += `${j + 1} `;
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
        str += `${String.fromCharCode(j + 65)} `;
    }
    console.log(str);
}
