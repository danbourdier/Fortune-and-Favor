import express from "express"
const app = express()
import path from "path"

const port = 3000

// This enables our app to have access to what we have access to in our file tree.
app.use( express.static('src') )
app.use( express.static('src/styleSheets') )
app.use( express.static('public') )

// Our route to boot up local host on
app.get('/', (req, res) => {
  // __dirname starts off at /src so i need to slice off the last 3 chars of my path!
  let newDir = __dirname.slice(0, __dirname.length - 3)
  res.sendFile(path.join(newDir + '/public/index.html'))
})


// Our server initiation
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}!`)
})

