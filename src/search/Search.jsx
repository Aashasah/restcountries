import React, { useState } from 'react'

function Search({search}) {
    const [input, setInput]=useState('')

    const submithandle=(e)=>{
        e.preventDefault()
        onsearch(input)
    }
  return (
    <>
    <section className=' flex  justify-between pt-[20px] pb-[20px]  container mx-auto'>
    <form  className='text-white text-center mt-[15px]'>
        <input className='pl-[10px] pr-[10px] pt-[25px] pb-[25px] text-white border-4 rounded-lg bg-[#40404f] mb-[50px]' type="search" name='search' id='search' placeholder='seacrh for a country' 
        />
      </form>

      <div>
        <select className=' text-white border-4 rounded-lg bg-[#40404f] mb-[50px] select cursor-pointer pl-[10px] container mx-auto pr-[10px] pt-[25px] pb-[25px] ' name="select"  id="select">
          <option value="">Filter by region</option>
          <option value="America">America</option>
          <option value="europe">europe</option>
          <option value="oceania">oceania</option>
          <option value="Africe">Africa</option>
          <option value="Africe">Africa</option>
          <option value="Africe">Africa</option>
        </select>
      </div>
    </section>
     
    </>
  )
}

export default Search
