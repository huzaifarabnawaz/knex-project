const express=require("express")
const router=require("./routes/indexroutes")

const app=express()
app.use(express.json())


app.get("/getreq",(req,res)=>{
    res.json("api hitting success fully")
})


app.listen(4200,()=>{
    console.log("port 4200 is runing")
})

