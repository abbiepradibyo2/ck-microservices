const express = require('express');
const { PORT } = require('./config');
const { dbCon } = require('./db');
const expressApp = require('./express');


const StartServer = async() => {

    const app = express();
    await dbCon();
    await expressApp(app);
    

    app.listen(PORT, () => {
          console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
    .on('close', (err) => {
        print('close');
        console.log(err);
        process.exit();
    })
    

}

StartServer();