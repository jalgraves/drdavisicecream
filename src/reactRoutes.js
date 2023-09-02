import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AboutInfo } from './components/content/about.js'
import { PepperellContactInfo } from './components/content/index.js'
import { MainInfo } from './components/content/main.js'

export default function ReactRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainInfo/>} />
        <Route path="/index" element={<MainInfo/>} />
        <Route path="/about" element={<AboutInfo/>} />
        <Route path="/contact" element={<PepperellContactInfo/>} />
      </Routes>
    </BrowserRouter>
  )
}
