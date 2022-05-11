import axios from "axios";
import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Filter from "./Filter";

export default function ListItems() {
  const [countries, setCountries] = useState([]);
  const [filteredC, setFilteredC] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all?fields=name,region,area`)
      .then((response) => {
        setCountries(response.data);
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
  return (
    <>
      <div>Countries</div>
      <Buttons sortA={sortA} sortD={sortD}></Buttons>
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
