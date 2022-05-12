export default function Pagination({
  countriesPerPage,
  totalCountries,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(totalCountries / countriesPerPage);

  const pageNumbers = [];
  for (let i = 1; i < totalPages+1; i++) {
    pageNumbers.push(i);
  }



  return (
    <div className="numbersFather">
      {pageNumbers.includes(currentPage - 1) && (
        <a
          className="next"
          href="!#"
          onClick={() => {
            setCurrentPage(currentPage - 1);
            paginate(currentPage - 1);
          }}
        >
          previous
        </a>
      )}
      <div className="pages">page {currentPage}/{totalPages}</div>
      {pageNumbers.includes(currentPage + 1) && (
        <a
          className="next"
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
