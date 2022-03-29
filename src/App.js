
import './App.css';
import Navbar from './components/Navbar';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CountryProvider } from './components/CountryContext';
import Home from './components/Home'
import CountryDetails from './components/CountryDetail';
import Countries from './components/Countries';




function App() {

  return (
    <CountryProvider>
      <div className='app'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path='/countries/:countryID' element={<CountryDetails />} />

          </Routes>
        </BrowserRouter>
      </div>
    </CountryProvider >

  );
}




export default App;
