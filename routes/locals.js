var express = require('express');
var router = express.Router();
// 지역검색 페이지
router.get('/', function(req, res, next) {
  // 서버가 오픈하는 경로가 /일때 index.ejs를 불러들여 렌더링 한다.
  res.render('index', { title: '지역검색', pageName:'locals/search.ejs'});
});
// 즐겨찾기 페이지 이동
router.get('/favorite', function(req, res) {
  res.render('index', { title: '즐겨찾기', pageName:'locals/favorite.ejs'});
});
module.exports = router;
