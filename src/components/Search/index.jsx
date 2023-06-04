import './styles.scss';

const Search = () => {
  return (
    <div className='search'>
      <img src={require(`../../assets/search.svg`)} alt='search-icon' />
      <input type='text' placeholder='Search' />
    </div>
  );
};
export default Search;
