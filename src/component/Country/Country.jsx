
import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
const {name,capital,region,population,flags,timezones,cca3} = country;



// বাটনের কোড এটা
const [visited, setVisited] = useState(false)
const handleClick = () =>{
setVisited(!visited)
}





    return (
        <div className={`Country ${visited ? 'visited': 'non-visited'}`}>
          <p style={{color: visited? 'red': 'blue'}}>Country-Name : {name.common}</p>
          <p>Capital: {capital}</p>
          <p>Region: {region}</p>
          <p>Population : {population}</p>
          <p><img src={flags.png} alt="" /></p>

          <p>TimeZone : {timezones}</p>
         <p>Code : {cca3}</p>

    
         
         <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add flag</button>


         <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
       <br />
<button onClick={handleClick}>{visited? 'gone': 'not gone'}</button>

{
  visited ? 'i have visited this country': 'i have not visited'
}



        </div>
    );
};

export default Country;