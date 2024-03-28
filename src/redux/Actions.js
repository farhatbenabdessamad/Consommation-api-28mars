import axios from "axios"
import { GETUSERS } from "./ActionsTypes"

export const get=()=>async(dispatch)=>{
try {
    const response= await axios.get("http://192.168.2.14:4556/api/user/get")
    dispatch({type:GETUSERS,
              payload:response.data})
} catch (error) {
console.log(error)
//alert("Hello")
}
} 

export const adduser=(data)=>async(dispatch)=>{
    try {
        const response= await axios.post("http://192.168.2.14:4556/api/user/add", data)
        dispatch(get())
    } catch (error) {
    console.log(error)
    }
    } 

    export const edituser=(id,data)=>async(dispatch)=>{
        try {
            const response= await axios.put(`http://192.168.2.14:4556/api/user/update/${id}`, data)
            dispatch(get())
        } catch (error) {
        console.log(error)
        }
        } 

        export const deletuser=(id)=>async(dispatch)=>{
            try {
                const response= await axios.delete(`http://192.168.2.14:4556/api/user/delete/${id}`)
                dispatch(get())
            } catch (error) {
            console.log(error)
            }
            } 