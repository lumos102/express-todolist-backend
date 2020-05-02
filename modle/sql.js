var sql = {
  queryAll: 'SELECT * FROM todo-list',
  createTodo: 'insert into list(id, title, thumb, extra, body, footer) values(?,?,?,?,?,?)',
  modifyTodo: 'update list set title=?, thumb=?, extra=?, body=?, footer=? where id=?'
}

// export default sql
module.exports = sql