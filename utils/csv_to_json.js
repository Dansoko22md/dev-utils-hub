// CSV to JSON Converter
// Usage: node csv_to_json.js "name,age\nJohn,30\nJane,25"

function csvToJson(csv) {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',');
    const result = [];
    
    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');
        
        headers.forEach((header, index) => {
            obj[header.trim()] = currentLine[index].trim();
        });
        
        result.push(obj);
    }
    
    return result;
}

// Command line usage
const csvInput = process.argv[2] || "name,age,city\nJohn,30,NYC\nJane,25,LA\nBob,35,SF";

console.log('CSV to JSON Converter');
console.log('====================\n');
console.log('Input CSV:');
console.log(csvInput);
console.log('\nOutput JSON:');
console.log(JSON.stringify(csvToJson(csvInput), null, 2));