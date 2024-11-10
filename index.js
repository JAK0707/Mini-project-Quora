const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended : true})); //important line , jo bhi url encoded data hoga usko bhi express samajh paayega\


const path = require("path");
app.set("view enjine","ejs");

app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username: "jai",
        content: "hi my name is yo",
    },
    {
        username: "suresh",
        content: "skdfhkalsjd",
    },
    {
        username: "baldev",
        content: "hi my name is dfsdlfashld",
    },
];


app.get("/posts",(req,res)=>{
    res.render("index.ejs" , {posts});
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});

