const db = require('../config/database');
const uploadExelModel = require('./excel-model');

class UserModel {
    async selectAk(dynamicTable,email,callback) {
        try {
            const query = "" +
            "SELECT aktivitet.* " +
            "FROM useractivitylink " +
            "JOIN aktivitet ON useractivitylink.ak_id = aktivitet.ak_id " +
            "JOIN User ON useractivitylink.email = ?.email AND useractivitylink.user_table_name = ?" +
            "WHERE ?.email = ?;"

            db.query(query,[dynamicTable,,dynamicTable,dynamicTable,email],(error,results) => {
                if (error) {
                    console.error('Error selecting data:', err);
                    callback(err, null);
                }
                console.log('Results from selectById:', results);
                console.log('data slected successfully');
                callback(null, results);
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserModel();
