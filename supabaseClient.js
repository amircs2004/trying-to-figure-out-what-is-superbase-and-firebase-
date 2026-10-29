// supabaseClient.js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY; 

// Create a Supabase client for your server 
const supabase = createClient(supabaseUrl, supabaseAnonKey);

module.exports = supabase;