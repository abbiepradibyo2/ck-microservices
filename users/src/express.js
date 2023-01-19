const express = require('express');
const cors  = require('cors');
const { user} = require('./api');
const { CreateChannel } = require('./utils')

module.exports = async (app) => {

    app.use(express.json());
    app.use(cors());
    const channel = await CreateChannel()
    
     user(app, channel);
    // error handling
    
}
