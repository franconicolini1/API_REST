import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json()) // Middleware que transforma req.body a json

const PORT = 3000

app.get('/ping', (_, res) => {
  res.send('PONG')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`RUNNING ON PORT ${PORT}`)
})
