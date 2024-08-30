const db=require("../dbconnection")
const { person, personalservice } = require("../servic/person")


class personData{
   async createPerson(firstname,lastname,email){
        const [id]=db('person').insert({
            email,
            first_name:firstname,
            last_name:lastname,
        })

        .returning('id') 

        return id
    }
}

module.exports=new personData()