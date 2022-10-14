var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var otpSchema = new Schema({
  
  
emailId: {
    type: String,
    default: ''
  },

 mobileNo: {
    type: Number,
    default: ''

},

 otp: {
  type: String,
  default: ''
},
 code: {
    type: String,
    default: ''
  },
 
 expireIn: {
    type: String,
    default: ''
  },
  

})
module.exports = {

  OtpTableModel: mongoose.model('otp_master', otpSchema, 'otp_master')
}