import en from '../src/locales/en.json';
import pt from '../src/locales/pt.json';

const messagesByLocale: Record<string, unknown> = { en, pt };

const nextIntl = {
  defaultLocale: 'en',
  messagesByLocale,
};

export default nextIntl;