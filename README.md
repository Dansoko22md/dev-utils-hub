# 🛠️ Dev Utils Hub

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/Dansoko22md/dev-utils-hub?style=for-the-badge)

**Your Swiss Army Knife for Development** 🚀

Simple, fast, and practical utilities for everyday coding tasks

[Features](#-features) • [Quick Start](#-quick-start) • [Tools](#-available-tools) • [Contributing](#-contributing)

</div>

---

## ✨ Features

- ⚡ **Zero dependencies** - Just Node.js and Python
- 🚀 **Lightning fast** - Run from command line instantly
- 📦 **10+ utilities** - Password gen, converters, formatters
- 🎯 **Production ready** - Battle-tested code
- 🆓 **100% free** - MIT licensed
- 🌍 **Cross-platform** - Works on Windows, Mac, Linux

---

## 🚀 Quick Start
```bash
# Clone the repo
git clone https://github.com/Dansoko22md/dev-utils-hub.git
cd dev-utils-hub

# Run any tool instantly
node utils/password_generator.js 20
python utils/word_counter.py "Hello World"
```

No installation needed! 🎉

---

## 🧰 Available Tools

### 🔐 Security & Encoding

| Tool | Command | Description |
|------|---------|-------------|
| **Password Generator** | `node password_generator.js [length]` | Generate secure random passwords with special characters |
| **Base64 Tool** | `node base64_tool.js encode "text"` | Encode/decode base64 strings |

### 📝 Text Processing

| Tool | Command | Description |
|------|---------|-------------|
| **Word Counter** | `python word_counter.py "text"` | Count words, characters, and characters without spaces |
| **Lorem Generator** | `python lorem_generator.py [words]` | Generate lorem ipsum placeholder text |

### 💱 Converters

| Tool | Command | Description |
|------|---------|-------------|
| **Currency Converter** | `node currency_converter.js 100 USD EUR` | Convert between major currencies (USD, EUR, GBP, JPY) |
| **Color Converter** | `node color_converter.js #FF5733` | Convert hex colors to RGB values |
| **Timezone Converter** | `python timezone_converter.py` | Display current time in multiple timezones |

### 🎨 Formatters & Generators

| Tool | Command | Description |
|------|---------|-------------|
| **JSON Formatter** | `python json_formatter.py '{"key":"val"}'` | Pretty-print and validate JSON data |
| **Table Generator** | `node table_generator.js 3 4` | Generate Markdown tables with custom rows/columns |

### 📚 Documentation

| Tool | Description |
|------|-------------|
| **Git Cheatsheet** | Quick reference guide for common Git commands |

---

## 💡 Usage Examples

### Generate a Strong Password
```bash
node utils/password_generator.js 32
# Output: aB3$xY9#mN2&qW5!pL7^zK4@hF8*vC1%
```

### Count Words in Text
```bash
python utils/word_counter.py "The quick brown fox jumps over the lazy dog"
# Words: 9
# Characters: 43
# Characters (no spaces): 35
```

### Convert Currency
```bash
node utils/currency_converter.js 100 USD EUR
# 100 USD = 92.00 EUR
```

### Format JSON
```bash
python utils/json_formatter.py '{"name":"John","age":30,"city":"NYC"}'
# {
#   "name": "John",
#   "age": 30,
#   "city": "NYC"
# }
```

### Generate Markdown Table
```bash
node utils/table_generator.js 3 4
# | Header1 | Header2 | Header3 | Header4 |
# | --- | --- | --- | --- |
# | Cell 1.1 | Cell 1.2 | Cell 1.3 | Cell 1.4 |
# | Cell 2.1 | Cell 2.2 | Cell 2.3 | Cell 2.4 |
# | Cell 3.1 | Cell 3.2 | Cell 3.3 | Cell 3.4 |
```

### Encode to Base64
```bash
node utils/base64_tool.js encode "Hello World"
# SGVsbG8gV29ybGQ=
```

---

## 🎯 Why Dev Utils Hub?

### The Problem 😫
```bash
# Old way:
1. Google "password generator online"
2. Click on sketchy website
3. Deal with ads and popups
4. Copy password
5. Close 10 browser tabs
```

### The Solution 😎
```bash
# New way:
node utils/password_generator.js 20
# Done in 1 second! ⚡
```

---

## 📁 Project Structure
```
dev-utils-hub/
├── utils/
│   ├── password_generator.js    # 🔐 Secure password generation
│   ├── base64_tool.js           # 🔐 Base64 encoding/decoding
│   ├── word_counter.py          # 📝 Text statistics
│   ├── lorem_generator.py       # 📝 Lorem ipsum text
│   ├── currency_converter.js    # 💱 Currency conversion
│   ├── color_converter.js       # 💱 Hex to RGB conversion
│   ├── timezone_converter.py    # 💱 Timezone display
│   ├── json_formatter.py        # 🎨 JSON pretty-printing
│   ├── table_generator.js       # 🎨 Markdown table creation
│   └── git_cheatsheet.md        # 📚 Git command reference
└── README.md
```

---

## 🤝 Contributing

Love this project? Here's how you can help:

1. ⭐ **Star this repo** - Show your support!
2. 🐛 **Report bugs** - Open an issue
3. 💡 **Suggest features** - We're always improving
4. 🔧 **Submit PRs** - Add new utilities
5. 📣 **Share it** - Tell your friends!

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 🗺️ Roadmap

### Coming Soon
- [ ] MD5/SHA256 hash calculator
- [ ] QR code generator
- [ ] Image resizer
- [ ] CSV to JSON converter
- [ ] Cron expression parser
- [ ] URL shortener
- [ ] File size formatter
- [ ] Regex tester

**Want to contribute one?** Open a PR! 🚀

---

## 🌟 Success Stories

> "Saved me 10 minutes every day!" - Developer
> 
> "No more sketchy online tools!" - Security Conscious User
>
> "Perfect for quick CLI tasks!" - DevOps Engineer

---

## 📊 Stats

- **10+ utilities** ready to use
- **0 dependencies** - Pure simplicity
- **2 languages** - JavaScript & Python
- **100% open source** - MIT licensed
- **Cross-platform** - Windows, Mac, Linux

---

## 🛠️ Requirements

- **Node.js** 14+ (for JavaScript utilities)
- **Python** 3.6+ (for Python utilities)

That's it! No additional packages needed.

---

## 📝 License

MIT © [Dansoko22md](https://github.com/Dansoko22md)

Free to use for personal and commercial projects!

---

## 💖 Show Your Support

If this project saved you time, give it a ⭐️!

**Share with the world:**
- 🐦 [Tweet about it](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20collection%20of%20developer%20utilities!%20https://github.com/Dansoko22md/dev-utils-hub)
- 📝 Write a blog post
- ⭐ Star on GitHub
- 📧 Share with your team

---

## 🔗 Links

- [Report Bug](https://github.com/Dansoko22md/dev-utils-hub/issues)
- [Request Feature](https://github.com/Dansoko22md/dev-utils-hub/issues)
- [Discussions](https://github.com/Dansoko22md/dev-utils-hub/discussions)

---

<div align="center">

**Made with ❤️ for developers by developers**

[⬆ Back to Top](#-dev-utils-hub)

</div>