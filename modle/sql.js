var sql = {
  queryAll: 'select * from list',
  createTodo: 'insert into list(id, title, thumb, extra, body, footer) values(?,?,?,?,?,?)',
  modifyTodo: 'update list set title=?, thumb=?, extra=?, body=?, footer=? where id=?'
}

module.exports = sql