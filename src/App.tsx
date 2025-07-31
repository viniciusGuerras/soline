import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router'
import Layout from './layouts/Layout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
