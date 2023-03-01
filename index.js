const express = require('express')
const app = express()
const format = require('date-format')
const PORT = 4000 || process.env.PORT

app.get('/',(req,res)=>{
    res.send("world");
})

app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token);
    res.status(200).json({params:req.params.token});
})

app.get('/api/v1/instagram',(req,res)=>{
    const instaSocial = {
        username:"swapnilyadav",
        folowers:66,
        follows:78,
        date:format.asString("dd-mm-yy",new Date())
    }
    res.status(200).json({instaSocial})
  
})

app.get('/api/v1/facebook',(req,res)=>{
    const instaSocial = {
        username:"swapnilyadav",
        folowers:800,
        follows:100,
        date:format.asString("dd-mm-yy",new Date())
    }
    res.status(200).json({instaSocial})
  
})

app.get('/api/v1/linkdin',(req,res)=>{
    const instaSocial = {
        username:"swapnilyadav",
        folowers:300,
        follows:150,
        date:format.asString("dd-mm-yy",new Date())
    }
    res.status(200).json({instaSocial})
})



app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})
