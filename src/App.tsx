
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

function App() {
  return (
    <div className="gap-1">
      {/* Desktop Header */}
      <Header />

      {/* Mobile Sidebar Header */}
      <div className="sm:hidden">
        <Sidebar />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

      <Footer/>
    </div>
  )
}


export default App
