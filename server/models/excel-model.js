const xlsx = require('xlsx');
const mysql = require('mysql2');
const db = require('../config/database');

class UploadExelModel {
    tableprefix = 'pardynamic';

    async excelToDatabase(jsonData, kon_id) {
        const tableprefix = 'pardynamic';
        const dynamicTable = tableprefix + kon_id;

        if (jsonData.length <= 0) {
            return;
        }

        //The first column of the excel doc containing relevant data. Prior columns are skipped.
        let colStart = 3;

        db.query(`SHOW TABLES LIKE '${dynamicTable}'`, (error, results) => {
            if (error) {
                console.error('Error: ', error);
            }

            if (results.length > 0) {
                db.query(
                    `DROP TABLE ${db.config.database}.${dynamicTable}`,
                    (dropError) => {
                        if (dropError) {
                            console.error('Error dropping table: ', dropError);
                        }
                        console.log('Table dropped!');
                    }
                );
            }

            db.query(
                `CREATE TABLE IF NOT EXISTS ${dynamicTable}(parID INT AUTO_INCREMENT PRIMARY KEY);`,
                (error, results) => {
                    if (error) console.log(error);
                }
            );

            //Obtain columns from the database for comparison.
            db.query(
                `SHOW COLUMNS FROM ${db.config.database}.${dynamicTable}`,
                (error, results) => {
                    if (error) {
                        console.log(error);
                    }

                    //Array containing the column names.
                    const dbColNames = results.map((row) => row.Field);
                    console.log('Results: ' + `${dbColNames}`);

                    //Tries to find the proper starting index
                    for (let i = 0; i < dbColNames.length; i++) {
                        if (dbColNames[i] == 'Mail') {
                            colStart = i;
                            console.log(colStart);
                            break;
                        }
                    }

                    //A complex sql query has to be made later and will be constructed
                    //alongside potential modifications to the database.
                    let sqlDynamicBase = `INSERT INTO ${db.config.database}.${dynamicTable} (`;

                    //For loop going through the column names of the excel file.
                    for (
                        let index = colStart;
                        index < jsonData[0].length;
                        index++
                    ) {
                        //Create new column in table with columnName if it doesn't already exist
                        //Ensure column name is elligible.
                        const columnName = jsonData[0][index]
                            .replace(/[^a-zA-Z0-9_]/g, '')
                            .slice(0, 32);
                        if (columnName == '') {
                            columnName = `emptyAtIndex${index}`;
                        }

                        //Adds missing columns so the column count matches.
                        if (index - colStart + 1 > dbColNames.length - 1) {
                            const newColQuery = `ALTER TABLE ${db.config.database}.${dynamicTable}
                                ADD ${columnName} VARCHAR(255)`;
                            console.log('SQL Alter table: ', newColQuery);
                            db.query(newColQuery, (err) => {
                                if (err) {
                                    console.error('Error adding column:', err);
                                    callback(err);
                                    return;
                                } else {
                                    console.log('Column added successfully');
                                }
                            });
                        }

                        //Adds the column name to the sql statement.
                        sqlDynamicBase += '`' + `${columnName}` + '`, ';
                    }

                    //Deleting values from the table before adding new ones.
                    db.query(
                        `DELETE FROM ${db.config.database}.${dynamicTable}`
                    );

                    //Trims the string and begins the entry for values.
                    sqlDynamicBase = sqlDynamicBase.slice(0, -2);
                    sqlDynamicBase += ') VALUES (';
                    for (let i = 1; i < jsonData.length; i++) {
                        //Base sql statement has been completed. Is used for the construction of the
                        // "INSERT" sql statement for each participant.
                        let sqlParticipant = sqlDynamicBase;

                        //Read and add each column's value for the participant.
                        for (let j = colStart; j < jsonData[0].length; j++) {
                            if (jsonData[i][j] == null) {
                                sqlParticipant += 'NULL, ';
                            } else {
                                sqlParticipant += `'${jsonData[i][j]}', `;
                            }
                        }

                        //Trim and end the sql query
                        sqlParticipant = sqlParticipant.slice(0, -2);
                        sqlParticipant += ')';
                        db.query(sqlParticipant, (err) => {
                            if (err) {
                                console.error(
                                    'Error inserting participant:',
                                    err
                                );
                                callback(err);
                                return;
                            }
                        });
                    }
                }
            );
        });
    }
}

module.exports = new UploadExelModel();
