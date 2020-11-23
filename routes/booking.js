var express = require('express');
var router = express.Router();
var connection = require('./db');

router.get('/', function(req, res, next) {
    res.render('../views/chanwoong/booking', { title: 'Booking' , cust_info:null});
    // if(!req.cookies['customer_id']){
  
    // } else {
  
    // }
});

module.exports = router;