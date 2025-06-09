import type { Preview } from '@storybook/nextjs-vite';
import nextIntl from './next-intl';
import '../src/app/globals.css';
import {enabledLocales, defaultLocale} from '../src/config';

const preview: Preview = {
  initialGlobals: {
    locale: defaultLocale,
    locales: {
      ...enabledLocales.map((locale) => ({
        [locale.code]: locale.label,
      })),
    },
  },
  parameters: {
    nextIntl,
    nextjs: {
      appDirectory: true,
      navigation: {
        defaultLocale,
        locales: enabledLocales.map((locale) => locale.code),
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;