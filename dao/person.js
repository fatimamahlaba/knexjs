const db = require('../db/db');

class PersonDAO{
  async  createPerson(firstName, lastName, email) {
      const [id] = await db('person').insert({
           email,
           firstName,
           lastName
        })
        .returning('id');
        
        return id;
    }
}

module.exports = new PersonDAO();