import { useContext } from "react";
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const handleLogin = () => {

    login( 'Rocío' );

    navigate('/', {
      replace: true
    });
  }
  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr/>

      <button onClick={handleLogin} className='btn btn-outline-warning'>
        Login
      </button>
    </div>
  )
}
