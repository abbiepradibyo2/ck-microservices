 const { UserRepository } = require("../db");
const { FormateData, GeneratePassword, GenerateSalt, GenerateSignature } = require('../utils');

// console.log('cibvananannana');

class UserService {

    constructor(){

        this.repository = new UserRepository();
        
    }

    async SignUp(userInputs){
        
        const { email, password,username,fullname } = userInputs;
        
        // create salt
        let salt = await GenerateSalt();
        
        let userPassword = await GeneratePassword(password, salt);
        
      const existingUser = await this.repository.CreateUser({ email, password: userPassword, username,fullname, salt});
        
        // const token = await GenerateSignature({ email: email, _id: existingCustomer._id});

        console.log("-----");
        console.log(salt);
        console.log("-----");
        console.log(userPassword);
        console.log("-----");
        // console.log(token);
        // console.log("-----");
        // console.log(existingCustomer);
        // console.log("-----");

      return FormateData({id: salt, userPassword });

    }

    
}

 module.exports = UserService;