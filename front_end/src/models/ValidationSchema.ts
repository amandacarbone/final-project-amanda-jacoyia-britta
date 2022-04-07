import * as yup from "yup";

const ValidationSchema = yup.object().shape({

    first_name: yup.string()
    .required('Please enter a first name')
    .min(1, 'First name must be at least one character.')
    .max(500, 'First name is too long'),

    last_name: yup.string()
    .required('Please enter a last name')
    .min(1, 'First name must be at least one character.')
    .max(500, 'First name is too long'),

    email: yup.string()
    .required('Please enter an email address')
    .email('Invalid email format'),

    password: yup.string()
    .required('Please enter a password')
    .matches(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'), 'Password must be at least 8 characters and contain one lowercase letter, one uppercase letter, one number, and one special character (#?!@$%^&*-)')

});

export default ValidationSchema;