//ignore this, this is replaced by connect() function in server/index.js
module.exports = {
  port: 8080,
  db: {
    
    prod: process.env.DATABASE_URL || 'mongodb+srv://jameskobulyar:<james123>@cluster0.qyxuyxt.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://jameskobulyar:<james123>@cluster0.qyxuyxt.mongodb.net/?retryWrites=true&w=majority',
    options: {
      useNewUrlParser: true,
     
      useUnifiedTopology: true 
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
