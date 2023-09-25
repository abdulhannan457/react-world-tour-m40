import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])

    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    },[])
   


    const handleVisitedCountry = (country)=>{
        console.log('add this to your visited country')
       const newVisitedCountry = [...visitedCountries,country]
       setVisitedCountries(newVisitedCountry)
    }


    const handleVisitedFlags = (flag) =>{
       console.log('flag adding')
       const newVisitedFlags = [...visitedFlags , flag]
       setVisitedFlags(newVisitedFlags)
    }

// remove item from an array in a state .
// রিমুভ করতে হলে প্রথমে item টাকে select করতে হবে ।
// use filter to select all the elements , except the one that you want to remove .
// তারপর filter দিয়ে সব element select করতে হবে শুধুমাত্র যেটা রিমুভ করব সেটা বাদ দিয়ে ।
    return (
<>
          <div>
          <h3>visited Flags:{visitedFlags.length}</h3>
          </div>
         {/* visited country */}

        <div>
             <h3>Countries:{countries.length}</h3>
             <div>
                <h4>Visited Countries :{visitedCountries.length}</h4>
             <ul>
               {
                visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li>)
               }
             </ul>
             </div>
          
          <div className="flag-container">
             {
                visitedFlags.map((flag, idx)=> <img key={idx}  src={flag}></img>)
             }
          </div>

           {/* display countries */}
        <div className="Country-Container">
           {
            countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} 
                handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
           
           }
            
        </div>
        </div>
       
        </>
    );
};

export default Countries;