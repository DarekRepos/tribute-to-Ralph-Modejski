# Translation System Guide

This directory contains the i18n (internationalization) system for the tribute website.

## Files

- **translations.json**: Contains all translations for all supported languages (en, pl, es, de)
- **index.ts**: Server-side utilities for getting translations

## Supported Languages

- `en` - English
- `pl` - Polish (Polski)
- `es` - Spanish (Español)
- `de` - German (Deutsch)

## How to Use Translations

### On Pages and Components

1. Add `data-i18n` attributes to elements that should be translated:

```astro
<h1 data-i18n="home.title">Ralph Modejski</h1>
<p data-i18n="about.p1">Original English text...</p>
```

2. For attributes like `alt`, `title`, `placeholder`, use the specific variants:

```astro
<img data-i18n-alt="home.imageAlt" alt="Rudolf Modrzejewski w 1931 roku" />
<button data-i18n-title="button.tooltip" title="Original text">Click me</button>
<input data-i18n-placeholder="form.email" placeholder="Enter email" />
```

3. Import and initialize translations in the page:

```astro
<script>
    import { initTranslations } from "../../utils/i18n-client";
    initTranslations();
</script>
```

## Adding New Translations

1. Edit `translations.json` and add your new keys:

```json
{
  "en": {
    "section": {
      "newKey": "English text"
    }
  },
  "pl": {
    "section": {
      "newKey": "Polish text"
    }
  },
  // ... and for es, de
}
```

2. Use the new key in your page/component with `data-i18n="section.newKey"`

3. Make sure to call `initTranslations()` in a `<script>` tag on the page

## Client-Side Translation

The `src/utils/i18n-client.ts` file provides the translation system for the client:

- **updatePageTranslations(lang)**: Updates all elements with `data-i18n*` attributes
- **t(key, lang)**: Gets a translation value by dot notation path
- **initTranslations()**: Initializes translations and sets up listeners

Translations automatically update when:
- The page loads
- The user changes the language via the Language Selector
- Astro View Transitions occur (page navigation)

## Translation Key Structure

Keys use dot notation to organize translations hierarchically:

- `nav.*` - Navigation links
- `home.*` - Home page content
- `about.*` - About page content
- `footer.*` - Footer content

Add new sections as needed for new pages.
