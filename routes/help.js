var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    if(!req.cookies['customer_id']){
        res.render('help', { title: 'Help', cust_info:null});
      } else {
        res.render('help', { title: 'Help', cust_info:[req.cookies.customer_id, req.cookies.customer_name, false]});
      }
});

module.exports = router;
