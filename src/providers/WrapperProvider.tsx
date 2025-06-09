// src/components/providers/WrapperProvider.tsx
'use client';
import React from 'react';
import { DeviceProvider } from './DeviceProvider';
import { IntlProvider } from './IntlProvider';

type WrapperProviderProps = {
    children: React.ReactNode;
    locale: string;
    messages: Record<string, unknown>;
  };

export function WrapperProvider({ children, locale, messages }: WrapperProviderProps) {
    return (
      <IntlProvider locale={locale} messages={messages}>
        <DeviceProvider>
          {children}
        </DeviceProvider>
      </IntlProvider>
    );
  }