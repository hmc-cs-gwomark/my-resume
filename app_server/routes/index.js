var express = require('express');
var router = express.Router();

var ctrlDefault = function (req, res) {
    res.render('layout', { title: 'Yo'});
}; 

/* Define routes here*/

// Home/Bio page
router.get('/', ctrlDefault);

// Admin Page
// TODO: learn how to make adming page to easily edit website
// The following should be available to an admin
// 1. Edit Bio
// 2. upload new resume
// 3. Edit contact page
// 4. Edit personal projects page

// Resume page
router.get('/resume', ctrlDefault);

// Contact page
router.get('/contact', ctrlDefault);

// Links to github repos and other coding projects
router.get('/personal-projects', ctrlDeafult);

