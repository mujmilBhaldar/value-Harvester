var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var biddingSchema = new Schema({
   
    biddingNo: {
        type: Number,
        default: ''
      },
      
    reqNumber: {
        type: Number,
        default: ''
      },
      biddingDetails: {
        type:Array,
        default: ''
      },
     
    
      sellerId: {
        type: Number,
        default: ''
      },
   
      remark: {
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

  BiddingTableModel: mongoose.model('bidding_master', biddingSchema, 'bidding_master')
}