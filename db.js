import mysql from 'mysql2'

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node'
})

db.connect((err) => {
  if (err) {
    console.log('Database connection failed')
    return
  }
  console.log('Connected to MySQL')
})

export default db