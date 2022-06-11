import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './main'
import SearchPage from './searchPage'

const RouteHandler = () => {

  return (
    <Router>
      <Routes>
    <Route path="/" element={<MainPage></MainPage>}/>
    <Route path="/searchPage" element={<SearchPage></SearchPage>}/>
      </Routes>
    </Router>
  )

}
export default RouteHandler