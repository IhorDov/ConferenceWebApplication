class AdminModel {
    adminInsertModel = 'INSERT INTO admin (name, email, password) VALUES(?)';
    adminSelectModel = 'SELECT * FROM admin WHERE email =? AND password =?';
    adminSelectEmailPasswordModel =
        'SELECT email, password FROM admin WHERE email =? AND password =?';
    adminSelectJustEmailPasswordModel =
        'SELECT email, password FROM admin WHERE email =? ';
    adminSelectNameEmailPasswordModel =
        'SELECT name, email, password FROM admin WHERE name =? AND email =? AND password =?';
    adminSelectEmailModel = 'SELECT * FROM admin WHERE email =? ';
    adminSelectPasswordModel = 'SELECT password FROM admin WHERE email =? ';
    adminSelectJustEmailModel = 'SELECT email FROM admin WHERE email =? ';
    findAdminByIdModel = `SELECT * FROM admin WHERE id = ?}`;
    AdminUpdateVerifacationTokenModel =
        'UPDATE admin set verificationToken=? where email=?';
    adminUpdatePasswordModel = 'UPDATE admin SET password = ? WHERE id=?';
    // adminFindIdByEmailModel = 'SELECT * FROM admin WHERE email =?';
    deleteSingleAdmin = 'DELETE FROM admin WHERE id =';
}

module.exports = new AdminModel();
