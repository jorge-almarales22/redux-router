import { Navigate } from 'react-router-dom'

export const Home = ({isAllowed, redirect}) => {

   if(!isAllowed) return <Navigate to={redirect}/>
   return (
      <>
        <h1>Home</h1>
      </>
   )
}