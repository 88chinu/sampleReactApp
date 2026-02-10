import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import router from './router/user.js'

const port = 5000

//Home directory
app.get("/", (req, res) =>{
    res.send("Well-come to My Express Project")
})

//Get the API directory
app.get("/api",(req,res) =>
{ 
    res.json(
    {
        "message":"Hello from the API"
    })
})

//Json directory
app.use(bodyParser.json());
//Router directory
app.use('/users',router);

//Declear the port for the website
app.listen(port, () =>
    {
    console.log(`Server started on port ${port}`);
})