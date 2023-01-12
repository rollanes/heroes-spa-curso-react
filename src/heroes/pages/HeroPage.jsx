import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = useMemo( () => getHeroById( id ), [ id ] );

  const navigate = useNavigate()
  const handleNavigateBack = () => {
    navigate(-1);
  }

  return (
    <>
      {!hero ? (
        <Navigate to="/marvel" />
      ) : (
        <div className="row mt-5">
          <div className="col-4">
            <img
              src={ `/assets/heroes/${id}.jpg` }
              className="img-thumbnail"
              alt={ hero.superhero }
            />
          </div>
          <div className="col-8">
            <h3>{ hero.superhero }</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego }</li>
              <li className="list-group-item"><b>Publisher:</b> { hero.publisher }</li>
              <li className="list-group-item"><b>First appearance:</b> { hero.first_appearance }</li>
            </ul>
            <h5 className="mt-5">Characters</h5>
            <p>{ hero.characters }</p>

            <button className="btn btn-warning text-black" onClick={ handleNavigateBack }>
              Go back
            </button>
          </div>
        </div>
      )}
    </>
  );
};
