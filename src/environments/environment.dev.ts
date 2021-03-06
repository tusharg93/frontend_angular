// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.


export const environment = {
  production: true,
    baseUrl:'http://localhost:4200',
    random:[],
    apiUrl:'http://13.59.128.238:8000/',
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

