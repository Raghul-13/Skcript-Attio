import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    console.error("Caught by ErrorBoundary:", error, errorInfo);
    // logErrorToService(error, errorInfo);
  }

  render() {
    const { hasError, error, errorInfo } = this.state;

    if (hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-2">
            Oops, something went wrong.
          </h2>
          <p className="text-muted-foreground mb-4 max-w-md">
            We encountered an unexpected error. Please try refreshing the page
            or come back later.
          </p>

          <details
            className="w-full max-w-2xl p-4 rounded-lg bg-muted/30 text-left whitespace-pre-wrap text-sm text-muted-foreground overflow-auto"
            open={false}
          >
            <summary className="cursor-pointer mb-2 text-sm font-medium">
              Show technical details
            </summary>
            {error?.toString()}
            <br />
            {errorInfo?.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
