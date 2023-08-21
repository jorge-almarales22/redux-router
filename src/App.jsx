import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login } from "./slices/authSlice";
import { About } from "./components/About";
import { useEffect } from "react";

export const App = () => {

  const {auth} = useSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    
    if(user !== null) dispatch(login(user))
  }, []);

   return (
      <>
        <Navbar/>

        <Routes>

          <Route path="/" element={<Login isAllowed={!!auth} redirect="/home" />}></Route>
          <Route path="/home" element={<Home isAllowed={!!auth} redirect="/"/>}></Route>
          <Route path="/about" element={<About isAllowed={!!auth} redirect="/"/>}></Route>

        </Routes>
      </>
   )
}