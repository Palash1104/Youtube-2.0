import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChannelDetail, Feed, VideoDetail, SearchFeed, Navbar } from './components'

const App = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" exact element={<VideoDetail />} />
            <Route path="/channel/:id" exact element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
    </BrowserRouter>
  )


export default App