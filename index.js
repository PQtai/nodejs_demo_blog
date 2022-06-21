const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
  res.send('Hello World!!!bbc')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})