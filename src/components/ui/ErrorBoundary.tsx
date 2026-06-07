import { Component, type ErrorInfo, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

function ErrorUI({ error, onRetry }: { error: Error; onRetry: () => void }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <p className="text-text text-lg font-semibold">{t('errorTitle')}</p>
      <p className="text-text-muted text-sm">{error.message}</p>
      <button
        className="bg-accent text-surface rounded-xl px-4 py-2 text-sm font-medium"
        onClick={onRetry}>
        {t('errorRetry')}
      </button>
    </div>
  );
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught error:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorUI
          error={this.state.error}
          onRetry={() => {
            this.setState({ error: null });
          }}
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
