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
        
      const token = await GenerateSignature({ email: email, _id: existingUser._id});
        return FormateData({id: existingUser._id, token });

    }

    
}

 module.exports = UserService;