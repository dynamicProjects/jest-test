const express = require("express");
const app = express();
const https = require("https");
const port = 3000;

function allTodod(){
    return [{
        id:1,
        name:"Finished writing a blog post"
    },{
        id:2,
        name:"Get pizza for dinner"
    },{
        id:3,
        name:"Wake up at 7:30am"
    }
]}

app.get("/",(req,res)=>{
    res.send({
            date:new Date(),
            msg:"Greetings!"
    })
})

app.get("/Todo",(req,res)=>{
    res.send(allTodos());
})

app.get("/todo/:id",(req,res)=>{
    const todoId = Math.abs(req.params.id);
    let todos = allTodos();
    let todo = todos.find(t => t.id === todoId);
    res.send(todo);
})

app.get("/joke",(req,res)=>{
   const url = "https://api.chucknorris.io/jokes/random";
   https.get(url,(response)=>{
        let data='';
        response.on('data', (chunk) => {
            data +=chunk;
        });
        response.on('end', (chunk) => {
            res.sen(data);
        })
   })
})

app.listen(port, () =>{
    console.log(`listening on port => ${port}`);
})

module.exports= app;