import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send({hi:'there',hello:'there'});
})
app.listen(port,()=>{
    console.log("server started on port 8080")
})