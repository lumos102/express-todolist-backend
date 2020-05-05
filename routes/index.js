var express = require('express');
var router = express.Router();
var models = require('../config/db')
var mysql = require('mysql')
var sql = require('../modle/sql')

// 连接数据库
var connection = mysql.createConnection(models)
connection.connect()

// 查询列表
router.get('/todo/query', function(req, res, next) {
  connection.query(sql.queryAll, (err, result) => {
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
  let params = req.query || req.params
    connection.query(sql.createTodo, [0, 1, 2, 3, 4, 5], (err, result) => {
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
