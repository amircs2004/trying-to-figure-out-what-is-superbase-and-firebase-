require('dotenv').config();

const express = require('express');
const app = express(); 
app.use(express.json());
const userRoutes = require('./routes/user.route');


//i need to use the superbase client to connect to the database and perform CRUD operations 
/*
const startserverConnection  = async () => {

}
 */
app.get('/', (req, res) => {
  res.json({ message: "Express server is live and connected to Supabase!" });
});
app.use('/api', userRoutes);

module.exports = app 