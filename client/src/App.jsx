import { Route, Routes } from 'react-router-dom'
import './App.css';
import axios from 'axios';
import Layout from './Layout';
import Home from './pages/HomePage';
import HotelAdding from './pages/HotelAdding';
import FoodAdding from './pages/FoodAdding';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotelAdding' element={<HotelAdding />}/>
      <Route path='/addFood' element={<FoodAdding/>}/>
      </Route>
    </Routes>
  )
}

export default App
