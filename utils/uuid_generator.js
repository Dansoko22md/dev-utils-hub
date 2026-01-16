// UUID Generator
// Usage: node uuid_generator.js [count]

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Command line usage
const count = parseInt(process.argv[2]) || 1;

console.log('UUID Generator (v4)');
console.log('===================\n');

for (let i = 0; i < count; i++) {
    console.log(generateUUID());
}