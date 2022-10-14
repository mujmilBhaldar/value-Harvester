var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var biddingOfferSchema = new Schema({
   
    offerNo: {
        type: Number,
        default: ''
      },
      
    bidNo: {
        type: Number,
        default: ''
      },

      requisitionNo: {
        type: Number,
        default: ''
      },

      biddingCommodityDetails: {
        type:Array,
        default: ''
      },
     
    
      acceptanceFlag: {
        type: Number,
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

    BiddingOfferTableModel: mongoose.model('biddingOffer_master', biddingOfferSchema, 'biddingOffer_master')
}