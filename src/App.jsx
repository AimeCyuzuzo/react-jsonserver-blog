import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomeComponent from './Home'
import CreatePost from "./CreatePost"
import BlogDetails from './blogs/[id]'
import NotFound from './NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="App-header">
          {/* <NavBar /> */}
          <Routes>
            <Route path="/" element={ <HomeComponent /> } />
            <Route path="/new-blog" element={<CreatePost />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </div>
  )
}

export default App
