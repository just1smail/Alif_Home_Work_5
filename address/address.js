const user = {
    userName : "Ismail",
    email : "karimovismoil.9985@gmail.com",
    age : "17"
};

const address = {
    city : "Dushanbe",
    state : "Tajikistan",
    postalCode : "123456"
};

const userProfile = Object.assign({}, user, address);

console.log(userProfile);