var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var paymentTranscationSchema = new Schema({
   
    paymentId: {
        type: Number,
        default: ''
      },
      
    bidNo: {
        type: Number,
        default: ''
      },
      sellerId: {
        type:Number,
        default: ''
      },
     
    
      buyerId: {
        type: Number,
        default: ''
      },
   
      paymentDate: {
        type: Date,
        default: ''
      },
   
      advanceAmount: {
        type: Number,
        default: ''
      },
      totalAmount: {
        type: Number,
        default: ''
      },
   
      paymentstatus: {
        type: String,
        default: ''
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

    PaymentTranscationTableModel: mongoose.model('paymentTranscation_master', paymentTranscationSchema, 'paymentTranscation_master')
}