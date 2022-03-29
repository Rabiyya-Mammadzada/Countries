
import Country from "./Country";
import { useState, useContext } from 'react'
import { CountryContext } from "./CountryContext";
import { Link } from "react-router-dom";





const Countries = () => {
    const { countries } = useContext(CountryContext)


    return (
        <div className="countries">
            {countries.map(country => (
                <Country name={country.name} key={country.numericCode} countryID={country.numericCode} flag={country.flag} />
            ))}

        </div>
    );

}

export default Countries;