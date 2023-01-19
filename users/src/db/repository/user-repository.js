const mongoose = require('mongoose');

const { UserModel } = require('../models');

class UserRepository {

    async CreateUser({ email, password, phone, salt }){

        const user = new UserModel({
            email,
            password,
            salt,
            phone,
            address: []
        })

        const userResult = await user.save();
        return userResult;
    }
}