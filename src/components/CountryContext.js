import React, { useState, createContext, useEffect, useContext } from 'react'


export const CountryContext = createContext()

export const CountryProvider = (props) => {

    const [countries, setCountries] = useState([])
    useEffect(() => {

        const fetchCountries = async () => {
            const response = await fetch("https://restcountries.com/v2/all")
            const data = await response.json()
            setCountries(data)
        }

        fetchCountries()

    },[countries]);


    return (
        <CountryContext.Provider value={{countries}}>
            {props.children}
        </CountryContext.Provider >
    )
}

