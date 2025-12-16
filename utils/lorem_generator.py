import sys

WORDS = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", 
         "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore"]

def generate(word_count):
    return ' '.join([WORDS[i % len(WORDS)] for i in range(word_count)]).capitalize() + '.'

count = int(sys.argv[1]) if len(sys.argv) > 1 else 30
print(generate(count))