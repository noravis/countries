export default function Pagination({ countriesPerPage, totalCountries, paginate, currentPage, setCurrentPage}) {


    const totalPages = Math.ceil(totalCountries / countriesPerPage)
    
    const pageNumbers = [];
    
      for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
      } 
    
      return (
        <div>
          {pageNumbers.map((number, i) => (
            <div key={i}>
              <a onClick={() => paginate(number)} href="!#">
                {number}
              </a>
            </div>
          ))}
        </div>
      );
    }
    