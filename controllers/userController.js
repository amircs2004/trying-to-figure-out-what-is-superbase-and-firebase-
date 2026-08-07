// controllers/userController.js
const supabase = require('../supabase'); // assuming your client is exported from here

const registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Insert data into your PostgreSQL table
    const { data, error } = await supabase
      .from('users')
      .insert([{ name, email }])
      .select(); // .select() returns the inserted row back to you

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json({ 
      message: "User registered successfully!", 
      user: data[0] 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = registerUser ;