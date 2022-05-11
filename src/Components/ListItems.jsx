import axios from "axios";
import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Filter from "./Filter";
import Pagination from "./Pagination";

export default function ListItems() {


  const [countries, setCountries] = useState([]);
  const [filteredC, setFilteredC] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(7);


//fetch data with axios start

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all?fields=name,region,area`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

//fetch data with axios end


// functions for pagination start
const indexOfLast = currentPage * countriesPerPage;
const indexOfFirst = indexOfLast - countriesPerPage;
const shownCountries = countries.slice(indexOfFirst, indexOfLast)

const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

// functions for pagination end

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
    setCurrentPage(1);
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
      <ul className="list-item">
        {filteredC.map((country, i) => (
          <li className="list-item" key={i}>
            <span className="name">{country.name}</span>
            <span className="region">{country.region}</span>
            <span className="area">{country.area}</span>
          </li>
        ))}
        {shownCountries.map((country, i) => (
          <li className="list-item" key={i}>
            <span className="name">{country.name}</span>
            <span className="region">{country.region}</span>
            <span className="area">{country.area}</span>
          </li>
        ))}
      </ul>
      <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
    </>
  );
}
