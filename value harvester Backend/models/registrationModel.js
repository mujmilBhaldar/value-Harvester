
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var registrationSchema = new Schema({

    mobileNo: {
        type: Number,
        default: ''

     },

    emailId: {
        type: String,
        default: ''
    },
   
    password: {
        type: String,
        default: ''
    },
  

    verifyFlag: {
        type: Number,
        default: ''
    },

    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
   otp: {
        type: String,
        default: ''
    },
    verifyOtp: {
        type: Number,
        default: ''
    },
    code: {
        type: String,
        default: ''
      },
    userType: {
        type: String,
        default: ''
    },
    entityType: {
        type: String,
        default: ''
    },

    aadharNo: {
        type: Number,
        default: ''
    },

    panNo: {
        type: Number,
        default: ''
    },

    address: {
        type: String,
        default: ''
    },

    pincode: {
        type: Number,
        default: ''
    },

    logitude: {
        type: String,
        default: ''
    },
    latitude: {
        type: String,
        default: ''
    },
   
      profile: {
        type: String,
        // default: ''
    },
    is_deleted: {
        type: Number,
        default: 0
    },
    creatdBy: {
        type: Number,
        default: ''
    },
    updatedBy: {
        type: Number,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },

})
module.exports = {

    RegistrationTableModel: mongoose.model('registration_master', registrationSchema, 'registration_master')
}