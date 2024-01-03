import { useState } from 'react'
import './style/Styles.css'
import Home from './components/Home'
import Projects from './components/Projects'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
