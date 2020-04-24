const DB = require("../database//dbConfig.js");

module.exports = {
    add,
    findBy
    };

 function findBy(filter) {
    return DB("users")
        .select("id", "username", "password")
        .where(filter);
    }

function add(user) {
    //   console.log('user',user)
    return DB("users").insert(user)
        .then(IDS => {
        return DB('users').where({id: IDS[0]}).first()
        });
    };