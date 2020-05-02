var express = require('express');
var router = express.Router();
var models = require('../config/db')
var mysql = require('mysql')

// 连接数据库
var connection = mysql.createConnection(models)
connection.connect()

// 查询列表
router.get('/todo/query', function(req, res, next) {
  res.json({"age": 18})
  // res.send('age')
  var sql = "select * from todolist"
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.json(result)
    }
  })
});

// 新增
router.post('/todo/create', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // console.log(req)
  var sql = "select * from todolist"
  connect.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.json(result)
    }
  })
});



module.exports = router;
