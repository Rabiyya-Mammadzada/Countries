
import { CountryContext } from "./CountryContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";


const Country = ({ name, flag, countryID }) => {

    const { countries } = useContext(CountryContext)



    return (



        <Link to={`/countries/${countryID}`} className='country'>

            <h3>
                {name}
            </h3>
            <img src={flag} alt="" />

        </Link >


    );
}

export default Country;