const isSignupValid = (firstName, email, password) => {
    const errors = {
        "first": [],
        "email": [],
        "password": []
    }

    if(firstName !== null) {
        if(!firstName) {
            errors["first"].push("First Name is required")
        }else if(firstName.length > 50) {
            errors["first"].push("First Name has to be or less than 50 characters")
        }
    }

    if(email !== null) {
        if(!email) {
            errors["email"].push("Email is required")
        }else if(email.length > 50) {
            errors["email"].push("Email has to be or less than 50 characters")
        }
    
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            errors["email"].push("Email has to be a valid address")
        }
    }

    if(password !== null) {
        if(!password) {
            errors["password"].push("Password is required")
        }else if(password.length > 50) {
            errors["password"].push("Password has to be or less than 50 characters")
        }
    
        if(password !== null && !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(password)) {
            errors["password"].push("Password must contain one lower case letter, one upper case letter, one digit, and one special character")
        }
    }

    const invalid = errors["first"].length > 0 || errors["email"].length > 0 || errors["password"].length > 0

    return {valid: !invalid, errors}
}

const isMoreInfoValid = (color, terms) => {
    const errors = {
        "color": [],
        "terms": []
    }

    if(color !== null && !color) {
        errors["color"].push("Color is required")
    }

    if(terms !== null && !terms) {
        errors["terms"].push("You must agree to our Terms and Conditions to move forward")
    }

    const invalid = errors["color"].length > 0 || errors["terms"].length > 0

    return {valid: !invalid, errors}
}



export {isSignupValid, isMoreInfoValid}