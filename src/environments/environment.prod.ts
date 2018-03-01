export const environment = {
    production: true,
    baseUrl:'http://localhost:4200',
    random:[],
    apiUrl:'http://52.77.252.230:8000/',
    formValidation: {
        emailPattern: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.]([A-Za-z]{2,5}|[A-Za-z){2}[.][A-Za-z]{2})$",
        emailMaxlength: 50,
        emailMinlength: 6,
        phoneNoMinlength: 10,
        phoneNoMaxlength: 14,
        otpMinlength: 6,
        twitterPattern: '(^https://www.twitter.com/[A-Za-z0-9._%+-]+$|"")',
        facebookPattern: '(^https://www.facebook.com/[A-Za-z0-9._%+-]+$|"")',
        googlePlusPattern: '(^https://plus.google.com/[0-9]+$|"")',
        passWordLength: 6,
        userBio: 200
    },


};

