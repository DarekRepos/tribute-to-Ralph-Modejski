import translations from '../i18n/translations.json';

type Language = 'en' | 'pl' | 'es' | 'de';
const LANG_STORAGE_KEY = 'preferred-lang';

/**
 * Get a translation value by dot notation path
 * e.g., "nav.tribute", "home.title"
 */
export function t(key: string, lang?: string): string {
  const langCode = (lang || localStorage.getItem(LANG_STORAGE_KEY) || 'en') as Language;
  const parts = key.split('.');
  
  let value: any = translations[langCode] || translations['en'];
  
  for (const part of parts) {
    value = value?.[part];
    if (value === undefined) {
      return key; // Return the key if not found
    }
  }
  
  return value || key;
}

/**
 * Update all translatable elements on the page
 * Elements should have a data-i18n attribute with the translation key
 */
export function updatePageTranslations(lang?: string) {
  const langCode = (lang || localStorage.getItem(LANG_STORAGE_KEY) || 'en') as Language;
  
  // Update all elements with data-i18n attribute
  // Use innerHTML to support HTML tags like <strong>
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.innerHTML = t(key, langCode);
    }
  });
  
  // Update all elements with data-i18n-title attribute
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (key) {
      el.setAttribute('title', t(key, langCode));
    }
  });
  
  // Update all elements with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) {
      el.setAttribute('placeholder', t(key, langCode));
    }
  });
  
  // Update all elements with data-i18n-alt attribute
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (key) {
      el.setAttribute('alt', t(key, langCode));
    }
  });
}

// Initialize translations on page load
export function initTranslations() {
  const lang = localStorage.getItem(LANG_STORAGE_KEY) || 'en';
  updatePageTranslations(lang);
  
  // Update on language change event
  window.addEventListener('languagechange', (e: Event) => {
    const event = e as CustomEvent;
    updatePageTranslations(event.detail.lang);
  });
  
  // Update on Astro view transitions
  document.addEventListener('astro:after-swap', () => {
    const lang = localStorage.getItem(LANG_STORAGE_KEY) || 'en';
    updatePageTranslations(lang);
  });
}
