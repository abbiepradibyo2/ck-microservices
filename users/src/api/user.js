 const UserService = require('../services/user-service');

    



module.exports = (app, channel) => {


    
    const service = new UserService();

    // SubscribeMessage(channel, service);


    app.post('/signup', async (req, res, next) => {

       
      
        const { email, password, username, fullname } = req.body;
      
        const { data } = await service.SignUp({ email, password, username, fullname });
        res.json(data);
    });
}



