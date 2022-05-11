import axios from "axios";
import { useEffect, useState } from "react";


export default function ListItems () {

    const [countries, setCountries] = useState([]);



    useEffect(() => {
        axios
          .get(`https://restcountries.com/v2/all?fields=name,region,area`)
          .then((response) => {
            setCountries(response.data)
          });
      }, []);


    

    return (
<>
        <div>Countries</div>
        <ul>
            
            {countries.map((country, i) =>  
            <li key={i} >
              <span>{country.name}</span>
              <span>{country.region}</span>
              <span>{country.area}</span>
            </li>)
            }
      </ul>
</>
    )
    
}