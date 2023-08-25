import { useDispatch } from 'react-redux';
import { startLogin } from '../thunks/authThunk';
import { Navigate } from 'react-router-dom'

export const Login = ({isAllowed, redirect}) => {

   const dispatch = useDispatch()

   const handleFormLogin = (event) => {
        event.preventDefault()
        dispatch(startLogin(2))
        
   }

   if(isAllowed) return <Navigate to={redirect}/>

   return (
      <form onSubmit={handleFormLogin}>
         <h1>Presiona login para ingresar</h1>
        <button type="submit">Login</button>
      </form>
   )
}
