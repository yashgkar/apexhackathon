const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

//welcome page
router.get('/', (req, res, next) => {
    res.render('welcome');
})

//customer dashboard
router.get('/main', ensureAuthenticated, (req, res) => {
    res.render('main');
});

//packages
router.get('/packs', ensureAuthenticated, (req, res, next) => {
    res.render('packages')
});

router.get('/packs:id', ensureAuthenticated, (req, res, next) => {
    
});


//treks and waterfalls
router.get('/tandw', ensureAuthenticated, (req, res) => {
    res.render('tandw');
});

//temples
router.get('/temples', ensureAuthenticated, (req, res) => {
    res.render('temples');
});

//admindashboard
router.get('/admindashb', ensureAuthenticated, (req, res) => {
    res.render('admin');
});

module.exports = router;