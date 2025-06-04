const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nosql-crud-a11a9.firebaseio.com" 
});

const db = admin.firestore();
module.exports = db;
