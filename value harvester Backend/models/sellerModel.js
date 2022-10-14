var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var sellerSchema = new Schema({
  
  
  firstName: {
    type: String,
    default: ''
  },
 
    lastName: {
    type: String,
    default: ''
  },

  mobileNumber: {
    type: Number,
    default: ''
  },

   emailId: {
    type: String,
    default: ''
  },

  residentialAddress: {
    type: String,
    default: ''
  }, 

  pinCode: {
    type:  Number,
    default: ''
  },

  district: {
    type: String,
    default: ''
  }, 

  state: {
    type: String,
    default: ''
  },
country: {
    type: String,
    default: ''
  }, 
 panNo: {
    type: Number,
    default: ''
  },
 
  aadhar: {
    type: String,
    default: ''
  },
 panImage: {
    type: String,
    default: ''
  },
  aadharImage: {
    type: String,
    default: ''
  },
  photograph: {
    type: String,
    default: ''
  },
  approvalFlag: {
    type: Number,
    default: 0
  },
  commodity: {
    type: Array,
    default: ''
  },
  rejectFlag: {
    type: Number,
    default: ''
  },  

rejectReason: {
    type: String,
    default: ''
  },

})
module.exports = {

  SellerTableModel: mongoose.model('seller_master', sellerSchema, 'seller_master')
}