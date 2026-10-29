// controllers/userController.js
const supabase = require('../supabaseClient'); // assuming your client is exported from here

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

const syncGoogleUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Check if user already exists in your table
    const { data: existingUser } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (existingUser) {
      return res.status(200).json({ 
        message: "User already logged in!", 
        user: existingUser 
      });
    }

    // If new, insert them into your public.users table
    const { data, error } = await supabase
      .from('users')
      .insert([{ name, email }])
      .select();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json({ 
      message: "Google user saved to database!", 
      user: data[0] 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 
module.exports = {registerUser , syncGoogleUser} ;