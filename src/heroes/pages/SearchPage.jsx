import { HeroCard } from "../components";

export const SearchPage = () => {
  return (
    <>
      <h1>Search page</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />

          <form>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />
            <button className="btn btn-outline-warning mt-1">Search!</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-warning">Search a hero...</div>
          <div className="alert alert-dark">We couldn't find your hero</div>

          {/*<HeroCard />*/}
        </div>
      </div>
    </>
  );
};
