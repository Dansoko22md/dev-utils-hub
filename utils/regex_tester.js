// Regex Tester
// Usage: node regex_tester.js "pattern" "test string" [flags]

function testRegex(pattern, testString, flags = 'g') {
    try {
        const regex = new RegExp(pattern, flags);
        const matches = testString.match(regex);
        
        console.log('Regex Tester');
        console.log('============');
        console.log('Pattern:', pattern);
        console.log('Flags:', flags);
        console.log('Test String:', testString);
        console.log('\nMatches:', matches ? matches.length : 0);
        
        if (matches) {
            console.log('Results:', matches);
        } else {
            console.log('No matches found');
        }
        
        console.log('\nTest Result:', regex.test(testString) ? '✓ Match' : '✗ No match');
    } catch (error) {
        console.error('Invalid regex pattern:', error.message);
    }
}

// Command line usage
const pattern = process.argv[2] || '\\d+';
const testString = process.argv[3] || 'Test 123 and 456';
const flags = process.argv[4] || 'g';

testRegex(pattern, testString, flags);