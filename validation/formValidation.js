const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateFormInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.message = !isEmpty(data.message) ? data.message : '';

    if(!Validator.isLength(data.name, { min: 3 })) {
        errors.name = 'Your name must be more than 3 characters';
    }
    
    if(Validator.isEmpty(data.name)) {
        errors.name = 'Please enter your name';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Please enter your email';
    }

    if(!Validator.isLength(data.message, {min: 5})) {
        errors.message = 'Your message must have 5 characters or more';
    }

    if(Validator.isEmpty(data.message)) {
        errors.message = 'Please enter a message';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}