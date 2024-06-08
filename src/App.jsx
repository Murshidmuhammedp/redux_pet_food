import './App.css'
import Home from './User/Pages/Home'
import Login from './User/Pages/Login'
import Registrationform from './User/Pages/Registrationform'
import { Route, Routes } from 'react-router-dom'
import Products from './User/Components/Products'
import Contact from './User/Components/Contact'
import Detailspage from './User/Components/Detailspage'
import Category from './User/Components/Category'
import { createContext, useState } from 'react'
import Addcart from './User/Components/Addcart'
import Searchbar from './User/Components/Searchbar'
import Payment from './User/Components/Payment'
import Adminhome from './assets/Adminside/Adminhome'

export const Mycontext = createContext()

function App() {
  const [cate, setcate] = useState("");
  const [search, setsearch] = useState("")

  return (
    <div>
      <Mycontext.Provider value={{ setcate, cate, search, setsearch }}>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/registrationform' element={<Registrationform />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/detailspage/:userid' element={<Detailspage />}></Route>
          <Route path='/category' element={<Category />}></Route>
          <Route path='/addcart' element={<Addcart />}></Route>
          <Route path='/searchbar' element={<Searchbar />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
          <Route path='/admin/*' element={<Adminhome />}></Route>
        </Routes>

      </Mycontext.Provider>

    </div>
  )
}

export default App
