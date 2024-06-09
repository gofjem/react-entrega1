import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CountryInfo = () => {

    const [data, setData]= useState([])

    useEffect(()=>{
        const fetchData = (countryName)=>{
            //const url=` https://restcountries.com/v3.1/name/${countryName}`
            const url=`https://api.mercadolibre.com/sites/${countryName}`
            axios.get(url)
            .then((response)=>setData(response.data.settings.identification_types[0]))
            .catch((err)=>console.log(err))

        }
        fetchData('MLV')
    },[])
    console.log(data);


  return (
    <div>
        <h1>{data}</h1>
      
    </div>
  )
}

export default CountryInfo
