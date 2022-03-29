import { useContext } from 'react'
import { CountryProvider, CountryContext } from './CountryContext'; 

const  Home = () => {
    const { countries } = useContext(CountryContext)

    return (
        <div className='home'>
            World Countries {countries.length}
            <img src="https://geology.com/world/world-map.gif" alt="" />
        </div>
    );
}

export default Home