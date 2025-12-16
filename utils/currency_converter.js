
const rates = {
    USD: 1.0,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 149.50
};

function convert(amount, from, to) {
    const usdAmount = amount / rates[from];
    return usdAmount * rates[to];
}

const [amount, from, to] = [parseFloat(process.argv[2]) || 100, process.argv[3] || 'USD', process.argv[4] || 'EUR'];
console.log(`${amount} ${from} = ${convert(amount, from, to).toFixed(2)} ${to}`);