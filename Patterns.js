const ROW = 4;

/**
 * Sqaure
 */
console.log(`
    ***** Square *****
    `);

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW; j++) {
        str += '* ';
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW; j++) {
        str += `${i}${j} `;
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW; j++) {
        if (i === 0 || j === 0 || i === ROW - 1 || j === ROW - 1) {
            str += '* ';
        } else {
            str += '  ';
        }
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
    let str = '';
    for (let j = 0; j < ROW; j++) {
        if (j < ROW - i) {
            str += '* ';
        } else {
            str = '  ' + str;
        }
    }
    console.log(str);
}
//
for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW; j++) {
        if (j >= i) {
            str += `* `;
        } else {
            str += '  ';
        }
    }
    //
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += '* ';
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW; j++) {
        if (j >= ROW - 1 - i) {
            str += '* ';
        } else {
            str += '  ';
        }
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW - i; j++) {
        str += '* ';
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW; j++) {
        if (j > i) str += '* ';
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += `${i + 1} `;
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += `${String.fromCharCode(i + 65)} `;
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += `${j + 1} `;
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += `${String.fromCharCode(j + 65)} `;
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW - i; j++) {
        str += `${j + 1} `;
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW - i; j++) {
        str += `${String.fromCharCode(65 + j)} `;
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += `${(i + j) % 2 === 0 ? 1 : 0} `;
    }
    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += `${j + 1} `;
    }

    for (let j = 0; j < 2 * ROW - 2 * i; j++) {
        str += '  ';
    }

    for (let j = 0; j <= i; j++) {
        str += `${j + 1} `;
    }

    console.log(str);
}

/**
 * Fish Tail
 */

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += '* ';
    }
    console.log(str);
}

ROW -= 1;

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW - i; j++) {
        str += '* ';
    }
    console.log(str);
}

/**
 * Pyramid
 */

for (let i = 0; i < ROW; i++) {
    let str = '';

    for (let j = 0; j < ROW - 1 - i; j++) {
        str += '  ';
    }

    for (let j = 0; j < 2 * i + 1; j++) {
        str += '* ';
    }

    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';

    for (let j = 0; j < i; j++) {
        str += '  ';
    }

    for (let j = 0; j < 2 * ROW - 2 * i - 1; j++) {
        str += '* ';
    }

    console.log(str);
}

/**
 * Diamond / Kite
 */

for (let i = 0; i < ROW; i++) {
    let str = '';

    for (let j = 0; j < ROW - 1 - i; j++) {
        str += '  ';
    }

    for (let j = 0; j < 2 * i + 1; j++) {
        str += '* ';
    }

    console.log(str);
}

ROW -= 1;

for (let i = 0; i < ROW; i++) {
    let str = '';

    for (let j = 0; j < i + 1; j++) {
        str += '  ';
    }

    for (let j = 0; j < 2 * ROW - 2 * i - 1; j++) {
        str += '* ';
    }

    console.log(str);
}
