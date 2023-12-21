import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Landing from './components/landing/landing.tsx'
import Home from './components/home/home.tsx'

function App() {
  return(
    // <ThemeProvider theme={themeOptions}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    // </ThemeProvider>
  )
}

export default App
