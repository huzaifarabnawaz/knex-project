const personservice=require("../servic/person")

class personControls{

  async  createPerson(req,res){

    try{
        let id=await personservice.createperson(req.body)
        res.json(201).json(id)
    }

    catch(error){
        console.log(error)
    }


    }
}


module.exports=new personControls();