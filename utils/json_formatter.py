
import sys
import json

def format_json(json_string):
    try:
        data = json.loads(json_string)
        return json.dumps(data, indent=2)
    except json.JSONDecodeError:
        return "Invalid JSON"

if __name__ == "__main__":
    json_input = sys.argv[1] if len(sys.argv) > 1 else '{"test": "data"}'
    print(format_json(json_input))