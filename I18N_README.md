# MBTI Love Compatibility App - Multi-Language Support

## Overview
This document explains the multi-language (i18n) implementation for the MBTI Love Compatibility Test app.

## Supported Languages
- Korean (한국어) - `ko`
- English - `en`
- Simplified Chinese (简体中文) - `zh`
- Hindi (हिन्दी) - `hi`
- Russian (Русский) - `ru`

## Files Added

### 1. Core i18n Library
- **File**: `js/i18n.js`
- **Purpose**: Core internationalization class that handles language detection, loading, and UI updates
- **Features**:
  - Auto-detects browser language
  - Falls back to English if language not found
  - Saves language preference in localStorage
  - Updates `document.title` and meta descriptions
  - Updates all elements with `data-i18n` attributes

### 2. Translation Files
Located in `js/locales/` directory:
- `ko.json` - Korean translations
- `en.json` - English translations  
- `zh.json` - Chinese (Simplified) translations
- `hi.json` - Hindi translations
- `ru.json` - Russian translations

Each file contains translations for:
- App title and description
- Intro screen text
- Question screen
- Loading screen
- Result screen
- Premium feature text
- Compatibility check
- Action buttons
- Ad text
- Recommendations section

## Files Modified

### 1. `index.html`
**Changes**:
- Added language selector UI (fixed position, top-right)
- Added `data-i18n` attributes to all translatable text elements
- Added `<script src="js/i18n.js"></script>` before other scripts

**Language Selector HTML**:
```html
<div class="language-selector">
    <button class="lang-btn" id="lang-toggle">🌐</button>
    <div class="lang-menu hidden" id="lang-menu">
        <button class="lang-option" data-lang="ko">한국어</button>
        <button class="lang-option" data-lang="en">English</button>
        <button class="lang-option" data-lang="zh">简体中文</button>
        <button class="lang-option" data-lang="hi">हिन्दी</button>
        <button class="lang-option" data-lang="ru">Русский</button>
    </div>
</div>
```

### 2. `css/style.css`
**Added Styles**:
```css
/* Language Selector */
.language-selector { position:fixed; top:20px; right:20px; z-index:1000; }
.lang-btn { ... glassmorphism with pink accent ... }
.lang-menu { ... dropdown menu with blur effect ... }
.lang-option { ... menu items with hover state ... }
```

### 3. `js/app.js`
**Added**:
- `initI18n()` function that:
  - Loads current language translations
  - Updates UI elements
  - Sets up language selector event listeners
  - Marks current language as active

## How It Works

1. **Page Load**:
   - Browser language is detected automatically
   - If not supported, falls back to English
   - User's saved preference (localStorage) takes priority

2. **Language Switching**:
   - Click the 🌐 button (top-right)
   - Select a language from the dropdown menu
   - All text updates instantly
   - Selection is saved to localStorage

3. **Text Updates**:
   - Any element with `data-i18n="key.path"` gets updated
   - Examples:
     - `data-i18n="intro.title"` → loads from `i18n.translations[lang].intro.title`
     - `data-i18n="result.label"` → loads from `i18n.translations[lang].result.label`

## Translation Structure

Each locale file follows this structure:
```json
{
  "app": { "title": "...", "description": "..." },
  "header": { "title": "...", "sub": "..." },
  "intro": { ... },
  "question": { ... },
  "result": { ... },
  ...
}
```

## Adding New Languages

To add a new language (e.g., Japanese):

1. Add to `i18n.js` supportedLanguages array:
   ```javascript
   this.supportedLanguages = ['ko', 'en', 'zh', 'hi', 'ru', 'ja'];
   ```

2. Add to `getLanguageName()` in `i18n.js`:
   ```javascript
   const names = { ..., 'ja': '日本語', ... };
   ```

3. Create `js/locales/ja.json` with all translations

4. Add button to language selector in `index.html`:
   ```html
   <button class="lang-option" data-lang="ja">日本語</button>
   ```

## Browser Compatibility

The i18n system uses:
- `localStorage` - supported in all modern browsers
- `navigator.language` - standard API
- Async/await and fetch API
- ES6 class syntax

## Performance Notes

- Translations are loaded asynchronously on page init
- Failed translation fallback to English
- Language preference is cached in localStorage
- No impact on initial page load time

## Testing

Test the i18n system:
1. Open app in browser
2. Click 🌐 button in top-right
3. Select different languages
4. Verify all text updates
5. Refresh page - selected language should persist
6. Check browser console for any load errors

## Maintenance

When updating text:
1. Update ALL 5 locale files (ko.json, en.json, zh.json, hi.json, ru.json)
2. Keep the same JSON structure across all files
3. Use consistent key naming (snake_case)
4. Test in all 5 languages before deployment
