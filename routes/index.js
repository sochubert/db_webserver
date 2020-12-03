var express = require('express');
var router = express.Router();
var connection = require('./db');

// chanwoong routing
router.get('/', function(req, res, next) {
    if(!req.cookies['customer_id'] && !req.cookies['employee_id']){
      res.render('chanwoong/index', { 
        title: 'Home' , 
        cust_info:null
      });
    } else if(!req.cookies['employee_id']){
      res.render('chanwoong/index', { 
        title: 'Home' , 
        cust_info: [req.cookies.customer_id, req.cookies.customer_name, false],
      });
    } else {
      res.render('chanwoong/index',{
        title: 'Home',
        cust_info: [req.cookies.employee_id, req.cookies.employee_name, true],
      })
    }
});



module.exports = router;