import logo from './logo.svg'
import './App.css'
import Resp from './components/Resp'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Beers from './components/Beers'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/list" element={<Resp />} />
      </Routes>
    </Router>
  )
}

export default App
