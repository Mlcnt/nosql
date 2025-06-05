const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Add your databaseURL if needed
  databaseURL: "https://nosql-crud-30992.firebaseio.com" 
});

const db = admin.firestore();
module.exports = db;
