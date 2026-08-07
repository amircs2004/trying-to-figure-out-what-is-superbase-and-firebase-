// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {registerUser , syncGoogleUser}  = require('../controllers/userController');

// POST /api/users/register
router.post('/register', registerUser);

// POST /api/users/sync-google
router.post('/sync-google', syncGoogleUser);

module.exports = router;