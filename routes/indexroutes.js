const express=require("express")
const personControls=require("../controller/person")
const router=express.Router()


router.post("/postapi",personControls.createPerson)


module.exports=router