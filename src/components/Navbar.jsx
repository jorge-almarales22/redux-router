import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';

export const Navbar = () => {

   const dispatch = useDispatch()
   return (
      <>
        <ol>
            <li><Link to="/"><span>Login</span></Link></li>
            <li><Link to="/home"><span>Home</span></Link></li>
            <li><Link to="/about"><span>About</span></Link></li>
            <li><Link to="/logout" onClick={() => {
               localStorage.removeItem("user")
               dispatch(logout())
            }}><span>Logout</span></Link></li>
        </ol>
      </>
   )
}