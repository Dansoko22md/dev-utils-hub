
function hexToRgb(hex) {
    hex = hex.replace('#', '');
    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
    };
}

const hex = process.argv[2] || '#FF5733';
const rgb = hexToRgb(hex);
console.log(`${hex} = rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);