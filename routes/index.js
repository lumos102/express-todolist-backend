var express = require('express');
var router = express.Router();
var models = require('../config/db')
var mysql = require('mysql')

// 连接数据库
var connection = mysql.createConnection(models)
connection.connect()

// 查询列表
router.get('/todo/query', function(req, res, next) {
  var sql = "select * from list"
  connection.query(sql, (err, result) => {
    if (err) {
      throw(err)
    }
    res.json(result)
    // if (result) {
    //   console.log(result)
    //   res.json(result)
    // }
  })
});

// 新增
router.post('/todo/create', function(req, res, next) {
  console.log(req.query)
  var params = req.query || req.params
  var sql = "insert into list(id, title, thumb, extra, body, footer) values(?,?,?,?,?,?)"
    connection.query(sql, [0, 1, 2, 3, 4, 5], (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.json(result)
    }
  })
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})



module.exports = router;
