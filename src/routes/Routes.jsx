import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Menu from '../components/Menu'
import Contact from '../components/Contact'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/menu' exact element={<Menu/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes
