import express from 'express'
import db from './db.js'

const app = express()

app.use(express.json())

// Home route
app.get('/', (req, res) => {
  res.send('API Running')
})


// Get all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      return res.status(500).send(err)
    }
    res.send(result)
  })
})


// Create user
app.post('/users', (req, res) => {
  const { name } = req.body

  db.query(
    'INSERT INTO users (name) VALUES (?)',
    [name],
    (err, result) => {
      if (err) {
        return res.status(500).send(err)
      }

      res.status(201).send({
        id: result.insertId,
        name
      })
    }
  )
})


// Update user
app.put('/users/:id', (req, res) => {
  const id = req.params.id
  const { name } = req.body

  db.query(
    'UPDATE users SET name = ? WHERE id = ?',
    [name, id],
    (err, result) => {
      if (err) {
        return res.status(500).send(err)
      }

      if (result.affectedRows === 0) {
        return res.status(404).send({
          error: 'User not found'
        })
      }

      res.send({
        message: 'User updated successfully'
      })
    }
  )
})


// Delete user
app.delete('/users/:id', (req, res) => {
  const id = req.params.id

  db.query(
    'DELETE FROM users WHERE id = ?',
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).send(err)
      }

      if (result.affectedRows === 0) {
        return res.status(404).send({
          error: 'User not found'
        })
      }

      res.send({
        message: 'User deleted successfully'
      })
    }
  )
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
