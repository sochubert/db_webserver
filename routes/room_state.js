var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('../views/chanwoong/room_state', { title: 'Room_state' , cust_info:null});
});

module.exports = router;