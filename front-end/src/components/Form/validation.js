
const validation  = (userData) => {
    let errors = {};

    if ( ! /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(userData.username)){
        errors.username = "Invalid Mail";
    }

    if ( !userData.username ){
        errors.username = "*Introduce Mail";
    }

    if (userData.username.length > 35 ){
        errors.username = "No more than 35 characters";
    }

    if ( !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(userData.password)){
        errors.password = "*Uppercase, more than 8 characters and specialCharacter"
    }

    return errors;

}

export default validation;