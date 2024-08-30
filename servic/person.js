const dto=require("../dao/person")


class personService{
        createPerson(personData){
        const{firstname,lastname,email}=personData
     return personData.persondata(firstname,lastname,email)
    }
}

module.exports= new personService()