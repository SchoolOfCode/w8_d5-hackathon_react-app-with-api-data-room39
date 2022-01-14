
import { Routes, Route, } from 'react-router-dom'
import Header from '../Header/index.js'
import Home from '../Home/index.js'
import Main from '../Main/index.js'

function App() {
  return (
    <div className='App'>
    
        <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Main />} />
      </Routes>

    </div>
  )
}



export default App
