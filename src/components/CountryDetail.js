import { useParams } from "react-router-dom"
import { useContext, useState } from 'react'
import { CountryContext } from "./CountryContext";

const CountryDetails = () => {

    const { countryID } = useParams()
    const { countries } = useContext(CountryContext)

    const country = countries.find(item => item.numericCode === countryID)



    return (
        <div className="countryDetails">
            <h1 >{country.name}</h1>
            <img src={country.flag} alt="" />
            <ul>
                <li>
                    Capital: {country.capital}
                </li>
                <li>
                    Region: {country.region}
                </li>
                <li>
                    Population: {country.population}
                </li>
                <li>
                    Area: {country.area}
                </li>
                <li>
                    Native name: {country.nativeName}
                </li>
                <li>
                    Numeric Code: {country.numericCode}
                </li>
            </ul>
        </div>
    );
}

export default CountryDetails;