// 定义数据库相关
var mysql = require('mysql');
var mysql_config = {
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'todolist',
  port: 3306
};

function handleDisconnection () {
  var connection = mysql.createConnection(mysql_config);
  connection.connect(function(err) {
      if(err) {
        console.log('err when connecting to db:', err)
        setTimeout('handleDisconnection()', 2000);
      }
  });

  connection.on('error', function(err) {
      logger.error('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') {
          logger.error('db error执行重连:'+err.message);
          handleDisconnection();
      } else {
          throw err;
      }
  });
  // exports.connection = connection;
}
// module.exports = mysql_config;
exports.mysql_config = mysql_config
exports.handleDisconnection = handleDisconnection