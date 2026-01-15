# Contributing to Dev Utils Hub

Thank you for considering contributing to Dev Utils Hub! 🎉

## How to Contribute

### Reporting Bugs 🐛

1. Check if the bug has already been reported in [Issues](https://github.com/Dansoko22md/dev-utils-hub/issues)
2. If not, create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Your environment (OS, Node.js/Python version)

### Suggesting Features 💡

1. Open a new issue with the `enhancement` label
2. Describe the feature and its use case
3. Provide examples if possible

### Adding New Utilities 🛠️

We love new utilities! Here's how to add one:

1. **Fork the repository**
2. **Create a new branch**
```bash
   git checkout -b feature/my-new-utility
```

3. **Create your utility file**
   - JavaScript: `utils/my_utility.js`
   - Python: `utils/my_utility.py`

4. **Follow these guidelines:**
   - Keep it simple and focused
   - Add clear usage instructions in comments
   - Use command-line arguments when appropriate
   - No external dependencies (unless absolutely necessary)

5. **Example template (JavaScript):**
```javascript
   // My Utility
   // Usage: node my_utility.js [arguments]
   
   function myFunction(input) {
       // Your logic here
       return result;
   }
   
   // Command line usage
   const input = process.argv[2] || 'default';
   console.log(myFunction(input));
```

6. **Update the README**
   - Add your utility to the appropriate section
   - Include command and description
   - Add a usage example

7. **Test your utility**
```bash
   node utils/my_utility.js
```

8. **Commit with a clear message**
```bash
   git commit -m "feat: add [utility name]"
```

9. **Push and create a Pull Request**
```bash
   git push origin feature/my-new-utility
```

## Code Style

### JavaScript
- Use `const` and `let` (no `var`)
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused

### Python
- Follow PEP 8 style guide
- Use descriptive variable names
- Add docstrings for functions
- Keep it simple and readable

## Commit Message Format

Use conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add QR code generator
fix: password generator special characters bug
docs: update installation instructions
```

## Pull Request Process

1. Update the README with details of your changes
2. Ensure your code works on Windows, Mac, and Linux (if possible)
3. Your PR will be reviewed and merged if approved

## Questions?

Feel free to open a [Discussion](https://github.com/Dansoko22md/dev-utils-hub/discussions) or reach out!

---

Thank you for contributing! 🚀