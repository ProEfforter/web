var express = require('express');
var router = express.Router();
// 데이터 출력
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource......');
});

module.exports = router;
