const express = require('express')
const path = require('path')


const app = express()
const port = 8080 
const morgan = require("morgan")
const fileUpload = require("express-fileupload")
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(fileUpload({parseNested:true}))

app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//route configure
require("./route")(app)

//database configure
require('./database')

//Schema sync
require('./database/schema').db


// app.use('/',route)
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
