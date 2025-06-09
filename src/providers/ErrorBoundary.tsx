'use client';
import React from 'react';

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

const isProd = process.env.NODE_ENV === 'production';

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (isProd) {
      console.error('ErrorBoundary caught:', error, errorInfo);
      // You can report to Sentry or other here
    }
  }

  render() {
    if (!isProd) {
      // 👀 In dev, don't wrap anything — show default React error overlay
      return this.props.children;
    }

    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="flex h-screen w-screen items-center justify-center bg-white text-center">
          <div className="max-w-md p-6 border border-red-300 rounded shadow">
            <h1 className="text-2xl font-semibold text-red-600 mb-2">Something went wrong</h1>
            <p className="text-gray-700">An unexpected error occurred. Please try refreshing the page.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}