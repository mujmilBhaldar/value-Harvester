var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var buyerSchema = new Schema({
   
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
    
    typeOfBussiness: {
        type: String,
        default: ''
      },
    bussinessName: {
        type: String,
        default: ''
      },
    
    pincode: {
        type: Number,
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
      gstIN: {
        type: String,
        default: ''
      },
      shopActNo: {
        type: String,
        default: ''
      },
      location: {
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
      gstInImage: {
        type: String,
        default: ''
      },

      shopActNoImage: {
        type: String,
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
      photograph: {
        type: String,
        default: ''
      },
      approvalFlag: {
        type: Number,
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

  BuyerTableModel: mongoose.model('buyer_master', buyerSchema, 'buyer_master')
}