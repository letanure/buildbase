// src/tests/utils.tsx
import { WrapperProvider } from '@/providers/WrapperProvider';
import { render } from '@testing-library/react';
import enMessages from '@/locales/en.json';
import { defaultLocale } from '@/config';

export function renderWithProviders(ui: React.ReactElement) {
  return render(
    <WrapperProvider locale={defaultLocale} messages={enMessages}>
      {ui}
    </WrapperProvider>
  );
}