function encode(str) {
    return Buffer.from(str).toString('base64');
}

function decode(str) {
    return Buffer.from(str, 'base64').toString('utf-8');
}

const [action, text] = [process.argv[2] || 'encode', process.argv[3] || 'Hello'];
console.log(action === 'encode' ? encode(text) : decode(text));