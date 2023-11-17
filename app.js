const express = require('express')
const path = require('path')
const app = express()
const port = 8080
const fileUpload = require("express-fileupload")
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(fileUpload({parseNested:true}))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
require("./route")(app)

// app.use('/',route)
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})