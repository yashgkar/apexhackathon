const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const Booking = require('../models/NewBooking.js');
const User = require('../models/User.js');

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

router.post('/packs:id', ensureAuthenticated, (req, res, next) => {
    var plan = req.params.id;
    const { date, loca, totalperson } = req.body;
    let errors = [];

    if (!date || !loca || !totalperson) {
        errors.push({ msg: 'Please enter all fields' });
    }

    /*if (date <= Date.now) {
        errors.push({ msg: 'Date must be valid!' });
    }*/
    if (errors.length > 0) {
        res.render('packages', {
            errors
        });
    } else {
        const newBooking = new Booking({
            name: req.user.name,
            email: req.user.email,
            date,
            location: loca,
            people: totalperson,
            plan
        });
        newBooking.save().then(user => {
                req.flash('success_msg', 'Your Booking is confirmed and your will get a confirmation call for the same');
                res.redirect('/main');
            })
            .catch(err => console.log(err));
    }

});


//treks and waterfalls
router.get('/tandw', ensureAuthenticated, (req, res) => {
    res.render('tandw');
});

//temples
router.get('/temples', ensureAuthenticated, (req, res) => {
    res.render('temples');
});

//my bookings
router.get('/admin', ensureAuthenticated, (req, res) => {
    Booking.find((err, data) => {
        res.render('admin', {
            details: data
        });
    });
    /*try {
        data = await Booking.find({ email: req.user.email });
        res.render('admin', {
            details: data
        });
    } catch (err) {
        console.log(err);
    }
*/


});



//admindashboard
router.get('/admindashb', ensureAuthenticated, (req, res) => {
    res.render('admin');
});

module.exports = router;