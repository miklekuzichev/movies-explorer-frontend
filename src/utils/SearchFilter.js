const SearchFilter = (searchQueries, moviesData) => {
    const { movietitle = '', shortfilm = false } = searchQueries;
    const filterKey = (movie) => {
      return JSON.stringify(movie.nameRU).toLowerCase().includes(movietitle.toString().toLowerCase())
    }
  
    const filterShortfilm = (movie) => {
      return movie.duration <= 40;
    }
  
    if (shortfilm) {
      return moviesData.filter(filterShortfilm).filter(filterKey);
    } else {
      return moviesData.filter(filterKey);
    }
  }
  
  export default SearchFilter;
