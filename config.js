//ignore this, this is replaced by connect() function in server/index.js
module.exports = {
  port: 8080,
  db: {
    
    prod: process.env.DATABASE_URL || 'mongodb://localhost:27017',
    test: 'mongodb://localhost:27017',
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
