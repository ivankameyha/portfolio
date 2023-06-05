import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Works } from './components/Works'
import { Contact } from './components/Contact'
import { NavBar } from './components/NavBar'
import {Footer} from './components/Footer'
import './App.css'

export const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/works' element={<Works/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}
