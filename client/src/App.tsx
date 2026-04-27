import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import InteractiveBackground from './components/InteractiveBackground'

export default function App() {
  return (
    <>
      <InteractiveBackground />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}