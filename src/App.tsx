import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router'
import Layout from './layouts/Layout'
import Main from './pages/Main'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<Main />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
