import React from 'react'
import Quiz1 from './components/Quiz1'
import Landing from './components/Landing'
import BotNav from './components/BotNav'
import QuizesHub from './components/QuizesHub'
import { Route, Routes } from 'react-router-dom'
import { createTheme } from '@mui/material/styles/';
import { ThemeProvider } from '@mui/material/styles/';
import About from './components/About'
import { Box } from '@mui/material/'

function App() {

    const theme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#936bb9',
            },
            secondary: {
                main: '#3783cf',
            },
            background: {
                default: '#353535',
                paper: '#45454a',
            },
            text: {
                primary: '#fff',
                secondary: 'rgba(255, 255, 255, 0.7)',
                disabled: 'rgba(255, 255, 255, 0.5)',
                hint: 'rgba(255, 255, 255, 0.5)',
            },
            divider: 'rgba(255, 255, 255, 0.12)',
        },
        typography: {
            fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        },
    })

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box marginBottom='10rem'>
                    <Routes>
                        <Route path="/hub" element={<QuizesHub />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/1" element={<Quiz1 />} />
                        <Route exact path="/" element={<Landing />} />
                        <Route path="*" element={<Landing />} />
                    </Routes>
                    <BotNav
                        theme={theme}
                    />
                </Box>
            </ThemeProvider>
        </>
    )
}

export default App