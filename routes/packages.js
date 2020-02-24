const express = require ('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');


//packages
router.get('/packs', ensureAuthenticated , (req, res)=>{
    res.render('packages');
});



module.exports = router;