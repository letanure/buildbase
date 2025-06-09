// src/components/providers/WrapperProvider.tsx
'use client';
import React from 'react';
import { DeviceProvider } from './DeviceProvider';

type WrapperProviderProps = {
  children: React.ReactNode;
};

export function WrapperProvider({ children }: WrapperProviderProps) {
  // Add context providers here
  return (
    <>
      <DeviceProvider>
        {children}
      </DeviceProvider>
    </>
  );
}