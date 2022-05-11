import axios from "axios";
import { useEffect, useState } from "react";
import Buttons from "./Buttons";


export default function ListItems () {

    const [countries, setCountries] = useState([]);



    useEffect(() => {
        axios
          .get(`https://restcountries.com/v2/all?fields=name,region,area`)
          .then((response) => {
            setCountries(response.data)
          });
      }, []);

    
    
    const sortA = () => {
    const countriesCopy = [...countries];
    setCountries(countriesCopy.sort((a, b) => (a.name > b.name ? 1 : -1)));
  };

    const sortD = () => {
    const countriesCopy = [...countries];
    setCountries(countriesCopy.sort((a, b) => (a.name > b.name ? -1 : 1)));
  };
    

    return (
<>
        <div>Countries</div>
        <Buttons sortA={sortA} sortD={sortD}></Buttons>
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