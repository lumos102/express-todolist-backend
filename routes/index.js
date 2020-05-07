var express = require('express');
var router = express.Router();
var models = require('../config/db')
var mysql = require('mysql')
var sql = require('../modle/sql')

// 连接数据库
var connection = mysql.createConnection(models.mysql_config)
connection.connect()

// 查询列表
router.get('/todo/query', function(req, res, next) {
  connection.query(sql.queryAll, (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result) {
      // console.log(result)
      res.json(result)
    }
  })
});

// 新增
router.post('/todo/create', function(req, res, next) {
  let params = req.body
  connection.query(sql.createTodo, [params.id, params.title, params.thumb, params.extra, params.body, params.footer], (err, result) => {
    if (err) {
      console.log(err)
      res.json({msg: '错误'})
    }
    if (result) {
      // console.log('result', result)
      res.json(result)
    }
  })
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})



module.exports = router;
