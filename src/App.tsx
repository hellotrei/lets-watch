import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DefaultErrorBoundary } from './modules/shared/components/ErrorBoundaries/DefaultErrorBoundary'
import { BaseStyle } from './modules/shared/styles/Base'
import { routes } from './routes'
import { RenderRoutes } from './routes/RenderRoutes'
import Header from './modules/shared/components/Header'

export const App: React.FC = () => (
    <BrowserRouter>
        <BaseStyle />
        <div id="main-content">
            <Header />
            <div className="watch-later-wrapper">
                <DefaultErrorBoundary>
                    <RenderRoutes routes={routes} />
                </DefaultErrorBoundary>
            </div>
        </div>
    </BrowserRouter>
)
