import style from "./Form.module.css"
import { useState } from "react";
import validation from "./validation";


const Form = ({login}) => {

    const [ userData, setUserData ] = useState({
        username:'',
        password:''
    })

    const [ errors, setErrors ] = useState({
        username:'',
        password:''
    })

    const HandleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form onSubmit={ handleSubmit } className={style.form} >

            <h2>User Login</h2>
            <br/>

            <label htmlFor="username">Username:</label>
            <input  className={style.inputForm} type="text" name="username"  value={userData.username} onChange={HandleInputChange}/>
            { errors.username && <p style={{color:"beige", fontSize:"12px"}} >{errors.username}</p> }

            <br/>
            <label htmlFor="password" placeholder="Password">Password:</label>
            <input className={style.inputForm} type="password" name="password" value={userData.password} onChange={HandleInputChange}/>
            { errors.password && <p style={{color:"beige",fontSize:"12px"}} >{errors.password}</p> }

            <br/>
            <button className={style.buttonForm} >LOGIN</button>

        </form>
    )
}
export default Form;