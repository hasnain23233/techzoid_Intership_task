import { useState } from 'react'
import Navbar from './components/navbar'
import './App.css'
import FullwebsitePages from './FullwebsitePages'
import Footer from './components/footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <FullwebsitePages />
        <Footer />
      </Router>
    </>
  )
}

export default App
