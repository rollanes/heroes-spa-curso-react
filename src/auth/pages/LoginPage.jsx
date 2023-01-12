import { useNavigate } from "react-router"


export const LoginPage = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
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
