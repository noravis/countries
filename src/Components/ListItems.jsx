import axios from "axios";
import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Filter from "./Filter";
import Pagination from "./Pagination";

export default function ListItems() {


  const [countries, setCountries] = useState([]);
  const [filteredC, setFilteredC] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const [select, setSelect] = useState('default')



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
const shownCountries = filteredC.length>0 ? filteredC.slice(indexOfFirst, indexOfLast)  :countries.slice(indexOfFirst, indexOfLast)
// const shownCountriesFiltered = filteredC.slice(indexOfFirst, indexOfLast)

const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

// functions for pagination end

//sorting functions start

  const sortA = () => {
    const countriesCopy = [...countries];
    const filteredCCopy = [...filteredC];
    setCountries(countriesCopy.sort((a, b) => (a.name > b.name ? 1 : -1)));
    setFilteredC(filteredCCopy.sort((a, b) => (a.name > b.name ? 1 : -1)));
    shownCountries.sort((a, b) => (a.name > b.name ? 1 : -1))
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
    setFilteredC([]);
    setCurrentPage(1);
    setSelect('default')
   };

//reset function end



//handleInput function start

const changeSelect = (e) => {
    setSelect(e.target.value)
}

  const handleInput = (e) => {
    switch (e.target.value) {
      case "oceania":
        const filteredC = countries.filter(
          (country) => country.region === "Oceania");
          setFilteredC(filteredC);
          setCurrentPage(1);

        break;

      case "smaller":
          const filteredC1 = countries.filter((country) => country.area < 65300);
          setFilteredC(filteredC1);
          setCurrentPage(1);

        break;
      default:
    }
  };

  //handleInput function end


  return (
    <>
      <div className="upper-block">Countries</div>
      <Buttons sortA={sortA} sortD={sortD} resetAll={resetAll}></Buttons>
      <Filter handleInput={handleInput} select={select} changeSelect={changeSelect}></Filter>
      <ul className="list-item-father">
        {shownCountries.map((country, i) => (
          <li className="list-item" key={i}>
            <span className="name">{country.name}</span>
            <span className="region">{country.region}</span><span>showCs</span>
            <span className="area">{country.area}</span>
          </li>
        ))}
      </ul>
      <Pagination countriesPerPage={countriesPerPage} totalCountries={filteredC.length>0? filteredC.length : countries.length} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
    </>
  );
}


/* 
Dalykai, kuriuos reikia pasidaryt: 
- pagination su vienu mygtuku
- pagination kai issifiltruoji

*/