import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../search/Search';
import Filter from '../filter/Filter';
import { Link } from 'react-router-dom';

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
     axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

console.log(countries)

  const getcountryByRegion=async(regionName)=>{
    try{
      const response= await fetch(`https://restcountries.com/v3.1/all/region/${regionName}`)
      if (!response.ok) throw new Error('failed...........')
        const data=await response.json()
      setCountries(data)
      setLoading(false)
    }catch (error){
      setLoading(false)
      setError(false)
    }
  }
  const gecountryByName=async(countryname)=>{
 try{
  const response=await fetch(`https://restcountries.com/v3.1/all/name/${countryname}`)
  if (!response.ok)throw new Error('not found any country')
    const data =await response.json()
  setCountries(data)
  setLoading(false)
 }catch(error){
  setLoading(false)
  setError(error.message)
 }
  }
  return (
    <>
  <div className="header container mx-auto">
    <div className="container mx-auto">
      <div className="search">
        <Search
        onsearch={gecountryByName}
        />
      </div>

      <div className=''>
        <Filter onselect={getcountryByRegion}/>
      </div>
    </div>
    {loading && <p>Loading...</p>}
    {error && <p>Error fetching data!</p>}
    <div className='cb  flex  justify-between '>
     {countries.map((country) => (
         
<Link to={'/country/${country.name.common}'}>
<div className='container mx-auto py-3'>
<div className='shadow-2xl rounded-md  text-center mx-auto'>     
<div className='cc ' key={country}>
    <img src={country.flags.png} alt="" />
</div>
<div className='cd'>
    <h3 className='font-bold text-2xl'>
    {country.name.common}
    </h3>
    <h6>Population: <span>{countries.Population}</span></h6>
    <h6>Region: <span>{country.region}</span></h6>
    <h6 className=''>Capital: <span>{country.capital ? country.capital[0] : 'N/A'}</span></h6>
</div>
</div>
</div>
</Link>

             ))}
    </div>
    </div> 
    </>
  )
}

export default AllCountries
