import React from 'react'
import PracticeTestPage from './PracticeTestPage'
import ErrorBoundary from './ErrorBoundary'

const PracticeScreen = () => {
    return (
        <ErrorBoundary>
            <PracticeTestPage />
        </ErrorBoundary>
    )
}

export default PracticeScreen