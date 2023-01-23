const mongoose = require('mongoose');

const { UserModel } = require('../models');

class UserRepository {

    async CreateUser({ email,username,fullname, password, salt }){

        const user = new UserModel({
            email,
            username,
            fullname,
            password,
            salt
        })

        const userResult = await user.save();
        return userResult;
    }
}


module.exports = UserRepository;