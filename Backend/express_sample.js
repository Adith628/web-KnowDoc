const express=require('express')
const path=require('path')

const app=express()

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname,"whoareyou.html"))
})

app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname,"login.html"))
})

app.get('/Home',function(req,res){
    res.sendFile(path.join(__dirname,"Home.html"))
})


app.listen(3000,function(){
    console.log("server started")
})
