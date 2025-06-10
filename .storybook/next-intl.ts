import { defaultLocale } from '../src/config';
import en from '../src/locales/en.json';
import pt from '../src/locales/pt.json';

const messagesByLocale: Record<string, unknown> = { en, pt };

const nextIntl = {
  defaultLocale: defaultLocale,
  messagesByLocale,
};

export default nextIntl;