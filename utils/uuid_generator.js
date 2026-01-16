// UUID Generator (v4)
// Usage: node uuid_generator.js [count]

function generateUUIDv4() {
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

if (count > 1) {
    console.log(`Generating ${count} UUIDs:\n`);
}

for (let i = 0; i < count; i++) {
    const uuid = generateUUIDv4();
    if (count === 1) {
        console.log(uuid);
    } else {
        console.log(`${i + 1}. ${uuid}`);
    }
}

if (count > 1) {
    console.log(`\n✓ Generated ${count} UUIDs`);
}