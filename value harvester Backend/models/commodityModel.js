

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var commoditySchema = new Schema({
  
  
  commodityName: {
    type: String,
    default: ''
  },
 
  description: {
    type: String,
    default: ''
  },
 
 unit: {
    type: String,
    default: ''
  },
  moq: {
    type: String,
    default: ''
  },
 
  hindiName: {
    type: String,
    default: ''
  },
  englishName: {
    type: String,
    default: ''
  },
  
  minPrice: {
    type: Number,
    default: ''
  },
  
  maxPrice: {
    type: Number,
    default: ''
  },
  nodalPrice: {
    type: Number,
    default: ''
  },
  image: {
    type: String,
    // default: ''
  },
  pumpBill_image: {
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

  CommodityTableModel: mongoose.model('commodity_master', commoditySchema, 'commodity_master')
}