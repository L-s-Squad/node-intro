// const express = require('express')
import express from 'express'
const app = express()
const PORT = 5000

// middleware: 
app.use(express.json())

const customMiddleware = (req, res, next) =>{
     console.log("This is middleware") 
     console.log(req.body, typeof(req.body))
     next()

}
// app.use(customMiddleware)

// apis:
app.get("/blog" ,  (req, res) =>{
    res.send("This is blog page")
})

app.get("/about" ,  (req, res) =>{
    res.send("This is about page")
})


app.post("/sum" ,customMiddleware, (req, res) =>{
    console.log("Sum api is executed")
     let numbers = req.body
     let sum  = numbers.n1 + numbers.n2 
     res.send(`The sum of ${numbers.n1} and ${numbers.n2} is ${sum}`)

})





app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}...`)})

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello Guys, How are you')
// })

// app.listen(3000)



// let articles = []

//Blog => create a article , update a article , delete a article , get all articles , get a article