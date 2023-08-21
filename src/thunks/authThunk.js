import { login } from "../slices/authSlice"

export const startLogin = (num) => {
    return async(dispatch, getState) => {
        console.log(num)
        console.log("getstate",getState())
        
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
        const data = await resp.json()
        
        const user = {
            uid: "12jkjss",
            email: "jorge@gmail.com",
            name: "Jorge Almarales"
        }
        localStorage.setItem("user", JSON.stringify(user))
        dispatch(login(user))
    }
}
