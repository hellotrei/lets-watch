import { Component, ReactNode } from 'react';

interface DefaultErrorBoundaryProps {
    children: ReactNode;
}

interface DefaultErrorBoundaryState {
    error: string | null;
}

export class DefaultErrorBoundary extends Component<DefaultErrorBoundaryProps, DefaultErrorBoundaryState> {
    state: DefaultErrorBoundaryState = {
        error: null,
    };

    static getDerivedStateFromError(error: Error) {
        // Update state so next render shows fallback UI.
        return { error: 'Something went wrong' };
    }

    render() {
        if (this.state.error) {
            // You can render any custom fallback UI
            return <p>{this.state.error}</p>;
        }

        return this.props.children;
    }
}

