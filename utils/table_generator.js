function generateTable(rows, cols) {
    let table = '| ' + Array(cols).fill('Header').map((h, i) => h + (i+1)).join(' | ') + ' |\n';
    table += '| ' + Array(cols).fill('---').join(' | ') + ' |\n';
    for (let i = 1; i <= rows; i++) {
        table += '| ' + Array(cols).fill('Cell').map((c, j) => c + ' ' + i + '.' + (j+1)).join(' | ') + ' |\n';
    }
    return table;
}

const [rows, cols] = [parseInt(process.argv[2]) || 2, parseInt(process.argv[3]) || 3];
console.log(generateTable(rows, cols));