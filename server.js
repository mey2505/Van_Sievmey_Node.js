import express from 'express'
import userRoutes from './src/routes/UserRoutes.js'
import productRoutes from './src/routes/ProductRoute.js'


const app = express()

app.use(express.json())

// Home route
app.get('/', (req, res) => {
  res.send('API Running')
})

app.use('/api', productRoutes)
app.use('/api', userRoutes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

export default app  
