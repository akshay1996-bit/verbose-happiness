const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const http = require('http')
console.log(http.STATUS_CODES)

app.use(bodyParser.json())
app.post('/register',(req,res)=>{
        if(!req.body.name || !req.body.email || !req.body.password)
        {       

            res.status(417).json('Registration failed, enter all fields')
                
                
        }
        else{
            res.json('User registered successfully')
            console.log(req.body)
        }
})



app.listen(4000,()=>{
    console.log('server is running')
})