import translations from './translations.json';

export type Language = 'en' | 'pl' | 'es' | 'de';

export function getTranslations(lang: Language = 'en') {
  return translations[lang] || translations['en'];
}

export function getTranslation(lang: Language, key: string, defaultValue = '') {
  const parts = key.split('.');
  let value: any = translations[lang] || translations['en'];
  
  for (const part of parts) {
    value = value?.[part];
    if (value === undefined) {
      return defaultValue || key;
    }
  }
  
  return value;
}
