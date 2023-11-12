export default function Pagination({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(totalPosts / postPerPage)) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <button
        onClick={goToPrevPage}
        className="py-2 px-4 bg-violet-800 text-white rounded-md duration-100 active:scale-95"
      >
        Prev
      </button>
      <div className="mx-2">
        {pages.map((page, i) => {
          return (
            <button
              key={i}
              className={`${
                page === currentPage ? "border-b-[1px] border-black" : ""
              } mx-2`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        onClick={goToNextPage}
        className="py-2 px-4 bg-violet-800 text-white rounded-md duration-100 active:scale-95"
      >
        Next
      </button>
    </div>
  );
}
