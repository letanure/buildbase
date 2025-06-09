"use client";
import React from "react";
import { useDevice } from '@/providers/DeviceProvider';

type DemoProps = {
  className?: string;
};

export const Demo = React.forwardRef<HTMLDivElement, DemoProps>(
  ({ className, ref }) => {
    const { isMobile } = useDevice();
    return (
      <ul ref={ref} className={className}>
        <li>
          {isMobile ? "Mobile" : "Desktop"}
        </li>
      </ul>
    );
  }
);

Demo.displayName = "Demo";
