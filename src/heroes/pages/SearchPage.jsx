import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const heroes = getHeroesByName( q );

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const handleSearchSubmit = ( e ) => {
    e.preventDefault();
    if( searchText.trim().length <= 1 ) return;
    navigate(`?q=${ searchText }`)
  };

  return (
    <>
      <h1>Search page</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />

          <form onSubmit={ handleSearchSubmit }>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-warning mt-1">Search!</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-warning">Search a hero...</div>
          <div className="alert alert-dark">Sorry, we couldn't find: <b>{ q }</b></div>

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } { ...hero } />
            ))
          }

        </div>
      </div>
    </>
  );
};
