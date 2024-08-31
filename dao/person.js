// const db=require("../dbconnection")
// const { person, personalservice } = require("../servic/person")


// class personData{
//    async createPerson(firstname,lastname,email){
//         const [id]=db('person').insert({
//             email,
//             first_name:firstname,
//             last_name:lastname,
//         })

//         .returning('id') 

//         return id
//     }
// }

// module.exports = new personData()





// this is chat gpt data 

const db = require("../dbconnection");
const { person, personalservice } = require("../servic/person");

class personData {
    async createPerson(firstname, lastname, email) {
        try {
            const [id] = await db('person')
                .insert({
                    first_name: firstname,
                    last_name: lastname,
                    email,
                })
                .returning('id'); // Ensure 'id' is the correct column name in your database
            
            return id;
        } catch (error) {
            console.error("Error creating person:", error);
            throw error; // Rethrow the error to handle it in higher layers
        }
    }
}

module.exports = new personData();
