import { Component } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: unknown) {
    console.error("Ошибка:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <h1>Что-то пошло не так</h1>;
    }

    return this.props.children;
  }
}