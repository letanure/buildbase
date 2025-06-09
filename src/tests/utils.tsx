// src/tests/utils.tsx
import { WrapperProvider } from '@/providers/WrapperProvider';
import { render } from '@testing-library/react';

export function renderWithProviders(ui: React.ReactElement) {
  return render(<WrapperProvider>{ui}</WrapperProvider>);
}