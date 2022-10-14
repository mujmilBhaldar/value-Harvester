var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var buyerRequisitionSchema = new Schema({
  
  
  reqNo: {
    type: Number,
    default: ''
  },
 
  buyerId: {
    type: Number,
    default: ''
  },
 
 reqDate: {
    type: String,
    default: ''
  },
  commodityDetails: {
    type: Array,
    default: ''
  },
  latitude: {
    type: String,
    default: ''
  },
  longitude: {
    type: String,
    default: ''
  },
 
  requisationFlag: {
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

  BuyerRequisitionTableModel: mongoose.model('buyerRequisition_master', buyerRequisitionSchema, 'buyerRequisition_master')
}