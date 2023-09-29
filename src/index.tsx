import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createReduxStore } from 'app/providers/StoreProvider';
import App from './app/App';
import './app/styles/index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = createReduxStore();

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    </BrowserRouter>
);
