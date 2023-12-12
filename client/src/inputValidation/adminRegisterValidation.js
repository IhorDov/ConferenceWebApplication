function adminRegisterValidation(values) {
    let error = {};
    const name_pattern = /^[a-zA-Z]{3,}$/;
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,}$/;
    const admin_key_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,}$/;

    if (values.name === '') {
        error.name = 'Admins name should not be empty';
    } else if (!name_pattern.test(values.name)) {
        error.name = 'Admins name Did not match!';
    } else {
        error.name = '';
    }

    if (values.admin_key === '') {
        error.admin_key = 'Admin key should not be empty';
    } else if (!admin_key_pattern.test(values.admin_key)) {
        error.admin_key = 'Admin key Did not match!';
    } else {
        error.admin_key = '';
    }

    if (values.email === '') {
        error.email = 'Email should not be empty';
    } else if (!email_pattern.test(values.email)) {
        error.email = 'Email Did not match!';
    } else {
        error.email = '';
    }

    if (values.password === '') {
        error.password = 'Password should not be empty';
    } else if (!password_pattern.test(values.password)) {
        error.password = 'Password did not match';
    } else {
        error.password = '';
    }

    return error;
}

export default adminRegisterValidation;
