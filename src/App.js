import React from 'react'
import Quiz1 from './components/Quiz1'
import Landing from './components/Landing'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/1" element={<Quiz1 />} />
                <Route path="*" element={<Landing />} />
            </Routes>
        </>
    )
}

export default App