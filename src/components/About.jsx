import { Navigate } from 'react-router-dom'

export const About = ({isAllowed, redirect}) => {

    if(!isAllowed) return <Navigate to={redirect}/>
   return (
      <>
        <h1>About</h1>
      </>
   )
}