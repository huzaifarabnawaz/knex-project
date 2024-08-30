// const personData = require("../dao/person")
const dto=require("../dao/person")


class personService{
        createPerson(personData){
        const{firstname,lastname,email}=personData
     return dto.createPerson(firstname,lastname,email)
    }
}

module.exports= new personService()