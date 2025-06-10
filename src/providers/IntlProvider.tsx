'use client';
import { appConfig } from '@/config';
import { NextIntlClientProvider } from 'next-intl';

type Props = {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, unknown>;
};

export function IntlProvider({ children, locale, messages }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={appConfig.timeZone} >
      {children}
    </NextIntlClientProvider>
  );
}