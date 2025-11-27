# EditorConfig Setup Guide

EditorConfig helps maintain consistent coding styles across different editors and IDEs.

## 📁 What is EditorConfig?

EditorConfig is a file format and collection of text editor plugins for maintaining consistent coding styles between different editors and IDEs. The `.editorconfig` file defines coding styles that are automatically applied by supported editors.

## ✅ Benefits

- **Consistent formatting** across team members
- **Automatic application** when opening files
- **Works with any editor** that supports EditorConfig
- **No configuration needed** in each editor (after initial setup)

## 📋 Current Configuration

### Global Settings (All Files)
- **Charset**: UTF-8
- **End of line**: LF (Unix-style)
- **Insert final newline**: Yes
- **Trim trailing whitespace**: Yes

### File-Specific Settings

#### JavaScript/TypeScript Files (`.js`, `.jsx`, `.ts`, `.tsx`)
- **Indent style**: Spaces
- **Indent size**: 2 spaces
- **Max line length**: 100 characters

#### JSON Files (`.json`)
- **Indent style**: Spaces
- **Indent size**: 2 spaces

#### Markdown Files (`.md`)
- **Trim trailing whitespace**: No (preserves formatting)
- **Max line length**: Off

#### CSS/SCSS Files (`.css`, `.scss`, `.less`)
- **Indent style**: Spaces
- **Indent size**: 2 spaces

## 🚀 Editor Setup

### VS Code

1. **Install Extension** (if not already installed):
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
   - Search for "EditorConfig for VS Code"
   - Install by EditorConfig

2. **Verify it's working**:
   - Open any `.ts` or `.tsx` file
   - Check that indentation is 2 spaces
   - EditorConfig settings are applied automatically

### Other Editors

#### WebStorm / IntelliJ IDEA
- Built-in support (no extension needed)
- Settings → Editor → Code Style → Enable EditorConfig support

#### Sublime Text
- Install "EditorConfig" package via Package Control

#### Atom
- Install "editorconfig" package

#### Vim
- Install `editorconfig-vim` plugin

#### Emacs
- Install `editorconfig` package

## 🔧 Configuration Details

### Why These Settings?

#### UTF-8 Encoding
- Universal character encoding
- Supports all languages and special characters

#### LF Line Endings
- Unix-style line endings (recommended for cross-platform)
- Prevents Git diff issues on Windows/Mac/Linux

#### 2 Space Indentation
- Common standard for JavaScript/TypeScript
- Matches Prettier configuration
- Easier to read nested code

#### 100 Character Line Length
- Matches Prettier `printWidth` setting
- Balances readability with screen space

#### Trim Trailing Whitespace
- Keeps code clean
- Prevents unnecessary Git diffs

#### Insert Final Newline
- POSIX standard
- Prevents issues with some tools

## 🎯 Integration with Prettier & ESLint

EditorConfig works alongside Prettier and ESLint:

1. **EditorConfig**: Basic formatting (indentation, line endings, etc.)
2. **Prettier**: Advanced formatting (quotes, semicolons, etc.)
3. **ESLint**: Code quality and best practices

### Order of Application
1. EditorConfig applies when you type
2. Prettier formats on save
3. ESLint checks code quality

## 📝 Customization

### Change Indent Size

Edit `.editorconfig`:
```ini
[*.{js,jsx,ts,tsx}]
indent_size = 4  # Change from 2 to 4
```

### Change Line Length

Edit `.editorconfig`:
```ini
[*.{js,jsx,ts,tsx}]
max_line_length = 120  # Change from 100 to 120
```

### Add File Type

Edit `.editorconfig`:
```ini
[*.vue]
indent_style = space
indent_size = 2
```

## 🔍 Verification

### Check if EditorConfig is Working

1. Open a `.ts` or `.tsx` file
2. Press Tab - should insert 2 spaces (not a tab)
3. Check line endings - should be LF (not CRLF)
4. Save file - trailing whitespace should be trimmed

### VS Code Status Bar

When EditorConfig extension is active, you'll see:
- File encoding (e.g., "UTF-8")
- Line ending (e.g., "LF")
- Indent info (e.g., "Spaces: 2")

## 🐛 Troubleshooting

### Settings Not Applying

1. **Check extension is installed** (VS Code)
2. **Restart editor** after installing extension
3. **Check file is in project root** (EditorConfig looks for `.editorconfig` in parent directories)
4. **Verify file syntax** (no errors in `.editorconfig`)

### Conflicts with Editor Settings

If your editor settings conflict:
- EditorConfig takes precedence (if extension is installed)
- Or configure editor to respect EditorConfig

### Line Ending Issues

If you see CRLF instead of LF:
1. Check `.editorconfig` has `end_of_line = lf`
2. Install/restart EditorConfig extension
3. Convert existing files: `npm run format` (Prettier will fix)

## 📚 Resources

- [EditorConfig Website](https://editorconfig.org/)
- [EditorConfig Specification](https://editorconfig.org/#file-format-details)
- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## ✅ Best Practices

1. **Commit `.editorconfig`** to version control
2. **Keep it simple** - only essential settings
3. **Match Prettier** - align with Prettier config
4. **Team agreement** - ensure team uses same settings
5. **Document exceptions** - if you need special cases

## 🎨 Example Workflow

1. **Open file** → EditorConfig applies formatting
2. **Type code** → Editor uses EditorConfig settings
3. **Save file** → Prettier formats code
4. **Commit** → Consistent formatting across team

---

**Note**: EditorConfig is a foundation. Prettier handles advanced formatting, and ESLint handles code quality. All three work together for the best development experience.

