import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import JobPost from '../Pages/JobPost'

export default function Router() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/post-job" element={<JobPost />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
