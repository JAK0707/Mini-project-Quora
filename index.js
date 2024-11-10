const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended : true})); //important line , jo bhi url encoded data hoga usko bhi express samajh paayega\

app.get("/",(req,res)=>{
    res.send("server working well");
});

const path = require("path");
app.set("view enjine","ejs");

app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});

