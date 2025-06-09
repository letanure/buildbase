// src/providers/DeviceProvider.tsx
'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type DeviceContextValue = {
  isMobile: boolean;
  isDesktop: boolean;
};

const DeviceContext = createContext<DeviceContextValue>({
  isMobile: false,
  isDesktop: true,
});

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile, isDesktop: !isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDevice() {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }
  return context;
}