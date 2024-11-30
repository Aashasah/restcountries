import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { IoMoonOutline } from "react-icons/io5";
import AllCountries from './Allcountries/AllCountries'
import CountryInfo from './CountryInfo/CountryInfo'
import './app.css'

function App() {
  return (
    <>
      <div className=" shadow-lg py-5">
        <div className=" container mx-auto flex justify-between">
          <h1 className=' py-2 flex gap-3 text-3xl text-black font-bold '>Where in the world?</h1>
          <p className='flex gap-3 '>
      
          <IoMoonOutline className='pt-1 text-2xl' />
            Dark Mode</p>
        </div>
        </div>
        <div className="container">
          <Routes>
            <Route path='/' element={<AllCountries/>}/>
            <Route path='/country/:countryname' element={<CountryInfo/>}/>
          </Routes>
        </div>
     
    </>
  )
}

export default App
