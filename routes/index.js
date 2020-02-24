const express = require ('express');
const router = express.Router();
const { ensureauthenticated } = require('../config/auth');

//welcome page
router.get('/',(req, res, next)=>{
    res.render('welcome');
})

//customer dashboard
router.get('/packages', (req, res)=>{
    res.render('main');
});

module.exports = router;