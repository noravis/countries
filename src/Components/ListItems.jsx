import axios from "axios";
import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Filter from "./Filter";

export default function ListItems() {


  const [countries, setCountries] = useState([]);
  const [filteredC, setFilteredC] = useState([]);


//fetch data with axios start

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all?fields=name,region,area`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

//fetch data with axios end



//sorting functions start

  const sortA = () => {
    const countriesCopy = [...countries];
    const filteredCCopy = [...filteredC];
    setCountries(countriesCopy.sort((a, b) => (a.name > b.name ? 1 : -1)));
    setFilteredC(filteredCCopy.sort((a, b) => (a.name > b.name ? 1 : -1)));
  };

  const sortD = () => {
    const countriesCopy = [...countries];
    const filteredCCopy = [...filteredC];
    setCountries(countriesCopy.sort((a, b) => (a.name > b.name ? -1 : 1)));
    setFilteredC(filteredCCopy.sort((a, b) => (a.name > b.name ? -1 : 1)));
  };

//sorting functions end



//reset function start

  const resetAll = () => {
    setFilteredC([])
   };
//reset function end



//handleInput function start
  const handleInput = (e) => {
    switch (e.target.value) {
      case "oceania":
        const filteredC = countries.filter(
          (country) => country.region === "Oceania"
        );
        setFilteredC(filteredC);
        break;

      case "smaller":
        const filteredC1 = countries.filter((country) => country.area < 65300);
        setFilteredC(filteredC1);

        break;
      default:
    }
  };

  //handleInput function end


  return (
    <>
      <div className="upper-block">Countries</div>
      <Buttons sortA={sortA} sortD={sortD} resetAll={resetAll}></Buttons>
      <Filter handleInput={handleInput}></Filter>
      <ul>
        {filteredC.map((country, i) => (
          <li key={i}>
            <span>{country.name}</span>
            <span>{country.region}</span>
            <span>{country.area}</span>
          </li>
        ))}
        {countries.map((country, i) => (
          <li key={i}>
            <span>{country.name}</span>
            <span>{country.region}</span>
            <span>{country.area}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
