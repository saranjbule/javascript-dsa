let ROW = 4;

/**
 * Square
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

// hollow square
console.log(`
    ***** Hollow Square *****
    `);

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

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW; j++) {
        if (j >= i) {
            str += `* `;
        } else {
            str += '  ';
        }
    }

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
        if (j >= i) str += '* ';
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

let counter = 1;
for (let i = 0; i <= ROW; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += ` ${counter}`;
        counter++;
    }

    console.log(str);
}

for (i = 0; i <= ROW; i++) {
    let str = '';
    for (j = 0; j <= i; j++) {
        str = ` ${String.fromCharCode(65 + ROW - j)}` + str;
    }

    console.log(str);
}

/**
 * Fish Tail
 */

console.log(`
    ***** Fish Tail *****
    `);

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
 * Reverse Pyramid
 */

console.log(`
    ***** Reverse Pyramid *****
    `);

ROW = 4;

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
 * Pyramid
 */
console.log(`
    ***** Pyramid *****
    `);

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
    let charCode = 65;

    for (let j = 0; j < ROW - 1 - i; j++) {
        str += '  ';
    }

    for (let j = 0; j < 2 * i + 1; j++) {
        if (j <= i) {
            str += ` ${String.fromCharCode(charCode)}`;

            if (j !== i) charCode++;
        } else {
            charCode--;
            str += ` ${String.fromCharCode(charCode)}`;
        }
    }

    console.log(str);
}

/**
 * Diamond / Kite
 */

console.log(`
    ***** Diamond / Kite *****
    `);

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

/**
 * Advance Pattern
 */

console.log(`
    ***** Advance Pattern 1 *****
    `);

ROW = 4;

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW; j++) {
        if (j <= i) {
            str += ` ${j + 1}`;
        } else {
            str += '  ';
        }
    }

    let rStr = '';
    for (let j = 0; j < ROW; j++) {
        if (j <= i) {
            rStr = ` ${j + 1}` + rStr;
        } else {
            rStr = '  ' + rStr;
        }
    }

    console.log(str + rStr);
}

console.log(`
    ***** Advance Pattern 2 *****
    `);

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW; j++) {
        if (j < ROW - i) {
            str += ' *';
        } else {
            str += '  ';
        }
    }

    for (let j = 0; j < ROW; j++) {
        if (j < i) {
            str += '  ';
        } else {
            str += ' *';
        }
    }

    console.log(str);
}

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW; j++) {
        if (j <= i) {
            str += ' *';
        } else {
            str += '  ';
        }
    }

    for (let j = 0; j < ROW; j++) {
        if (j < ROW - i - 1) {
            str += '  ';
        } else {
            str += ' *';
        }
    }

    console.log(str);
}

console.log(`
    ***** Advance Pattern 3 *****
    `);

for (let i = 0; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW; j++) {
        if (j <= i) {
            str += ' *';
        } else {
            str += '  ';
        }
    }

    for (let j = 0; j < ROW; j++) {
        if (j < ROW - i - 1) {
            str += '  ';
        } else {
            str += ' *';
        }
    }

    console.log(str);
}

for (let i = 1; i < ROW; i++) {
    let str = '';
    for (let j = 0; j < ROW; j++) {
        if (j < ROW - i) {
            str += ' *';
        } else {
            str += '  ';
        }
    }

    for (let j = 0; j < ROW; j++) {
        if (j < i) {
            str += '  ';
        } else {
            str += ' *';
        }
    }

    console.log(str);
}

console.log(`
    ***** Advance Pattern 4 *****
    `);

const COL = 2 * ROW - 1;

for (let i = 0; i < COL; i++) {
    let str = '';
    for (let j = 0; j < COL; j++) {
        str += ` ${Math.min(i, j)}`;
    }

    console.log(str);
}

console.log(' ');

for (let i = 0; i < COL; i++) {
    let str = '';
    for (let j = 0; j < COL; j++) {
        // distance of current idx
        const left = j;
        const right = COL - 1 - j;
        const top = i;
        const bottom = COL - 1 - i;

        str += ` ${COL - Math.min(left, right, top, bottom)}`;
    }

    console.log(str);
}

console.log(' ');

for (let i = 0; i < COL; i++) {
    let str = '';
    for (let j = 0; j < COL; j++) {
        str += ` ${COL - Math.min(COL - i - 1, COL - j - 1)}`;
    }

    console.log(str);
}
