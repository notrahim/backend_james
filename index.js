const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

// connect DB

const connect = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/reddit', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

if (require.main === module) {
  app.listen(config.port);
 connect()
  mongoose.connection.on('error', console.log);
}

module.exports = { connect };
