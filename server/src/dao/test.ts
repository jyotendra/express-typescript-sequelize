import {generateToken, validateToken} from "../utils/jwt.util";
  

generateToken({id: 1, email: "abc@gmail.com"}).then(token => 
    validateToken(token).then(res => console.log(res))
).catch(err => console.log('errr', err))
