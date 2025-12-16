# Word Counter
# Usage: python word_counter.py "your text here"

import sys

def count_words(text):
    words = text.split()
    return {
        'words': len(words),
        'characters': len(text),
        'characters_no_spaces': len(text.replace(' ', ''))
    }

if __name__ == "__main__":
    text = ' '.join(sys.argv[1:]) if len(sys.argv) > 1 else "Hello world"
    stats = count_words(text)
    print(f"Words: {stats['words']}")
    print(f"Characters: {stats['characters']}")
    print(f"Characters (no spaces): {stats['characters_no_spaces']}")