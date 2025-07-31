import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router'
import Layout from './layouts/Layout'
import Main from './pages/Main'
import Wip from './pages/wip'
import Marketing from './pages/Marketing'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/wip" element={<Wip />} />
                    <Route path='/marketing' element={<Marketing />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
