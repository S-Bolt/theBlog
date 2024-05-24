//manage routes for homepage
const router = require('express').Router();
const { Comment, BlogPost, User } = require('../models');
const withAuth = require('../utils/auth');
//need to write this file

module.exports = router