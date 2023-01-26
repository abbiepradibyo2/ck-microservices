const amqplib = require("amqplib");
const jwt = require("jsonwebtoken");


const {
  APP_SECRET,
  EXCHANGE_NAME,
  MSG_QUEUE_URL,
} = require("../config");


module.exports.CreateChannel = async () => {
  try {
    const connection = await amqplib.connect(MSG_QUEUE_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue(EXCHANGE_NAME, "direct", { durable: true });
    return channel;
  } catch (err) {
    throw err;
  }
};




module.exports.FormateData = (data) => {
  if (data) {
    return { data };
  } else {
    throw new Error("Data Not found!");
  }
};


module.exports.ValidateSignature = async (req) => {
  const signature = req.get("Authorization");

  if (signature) {
    const payload = await jwt.verify(signature.split(" ")[1], APP_SECRET);

    // console.log(payload);
    req.user = payload;
    return true;
  }

  return false;
};