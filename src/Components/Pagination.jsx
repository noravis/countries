export default function Pagination({
  countriesPerPage,
  totalCountries,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(totalCountries / countriesPerPage);

  const pageNumbers = [];
  for (let i = 1; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="numbersFather">
      {pageNumbers.includes(currentPage - 1) && (
        <a
          href="!#"
          onClick={() => {
            setCurrentPage(currentPage - 1);
            paginate(currentPage - 1);
          }}
        >
          previous
        </a>
      )}
      {pageNumbers.map((number, i) => (
        <div className="numbers" key={i}>
          <a className="number" onClick={() => paginate(number)} href="!#">
            {number}
          </a>
        </div>
      ))}
      {pageNumbers.includes(currentPage + 1) && (
        <a
          href="!#"
          onClick={() => {
            setCurrentPage(currentPage + 1);
            paginate(currentPage + 1);
          }}
        >
          next
        </a>
      )}
    </div>
  );
}
