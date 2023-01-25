const convertPasswordToStars = (password) => {
    return password ? password.replace(/./g, '*') : ""
}

export {convertPasswordToStars}