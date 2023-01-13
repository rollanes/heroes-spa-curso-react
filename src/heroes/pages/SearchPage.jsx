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
    
    navigate(`?q=${ searchText }`)
  };

  return (
    <>
      <h1 className="mt-2">Search page</h1>
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

          {
            ( q === '' ) 
              ? <div className="alert alert-warning animate__animated animate__fadeIn">Search a hero...</div>
              : ( heroes.length === 0 ) 
                  && <div className="alert alert-dark animate__animated animate__fadeIn">Sorry, we couldn't find <b>{ q }</b></div>
          }
          
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
