import {Routes,Route} from 'react-router-dom'
import Home from './users/pages/Home'
import './App.css'
import Books from './users/pages/Books'
import Contact from './users/pages/Contact'
import Profile from './users/pages/Profile'
import View from './users/pages/View'
import AdminProfile from './admin/Pages/AdminProfile'
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'
import AdminHome from './admin/Pages/AdminHome'
import AdminCollections from './admin/Pages/AdminCollections'
import Preloader from './components/Preloader'
import { useState } from 'react'
import PaymentSuccess from './users/pages/PaymentSuccess'
import PaymentError from './users/pages/PaymentError'


function App() {

const [loading,setLoading] = useState(true)

setTimeout(() => {
  setLoading(false)
},7500);

  return (
    <>
         <Routes>
          <Route path='/' element={loading?<Preloader/>:<Home/>} />
           <Route path='/login' element={<Auth/>} />
          <Route path='/register' element={<Auth insideRegister={true} />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/books' element={<Books/>} />

          <Route path='/user/profile' element={<Profile/>} />
          <Route path='/books/:id/view' element={<View/>} />
                    <Route path='/user/payment-success' element={<PaymentSuccess/>} />
          <Route path='/user/payment-error' element={<PaymentError/>} />

          


          <Route path='/admin/home' element={<AdminHome/>} />
          <Route path='/admin/profile' element={<AdminProfile/>} />
          <Route path='/admin/resources' element={<AdminCollections/>} />

          <Route path='/*' element={<Pnf/>} />
         </Routes>
    </>
  )
}

export default App
