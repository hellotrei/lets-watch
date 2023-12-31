import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import '../src/modules/shared/components/i18n/i18n';
import { store } from './modules/core/reduxStore';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={null}>
                <App />
            </Suspense>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
