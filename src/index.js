const express = require('express')
const app = express()
const path = require('path')

const port = 3000

// This enables our app to have access to what we have access to in our file tree.
app.use( express.static('/src') )
app.use( express.static('/public') )


app.get('/', (req, res) => {
  // __dirname starts off at /src so i need to slice off the last 3 chars of my path!
  let newDir = __dirname.slice(0, __dirname.length - 3)
  res.sendFile(path.join(newDir + '/public/index.html'))
})