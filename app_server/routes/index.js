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

// Resume page
router.get('/resume', ctrlDefault);

// Contact page
router.get('/contact', ctrlDefault);

// Links to github repos and other coding projects
router.get('/personal-projects', ctrlDeafult);

