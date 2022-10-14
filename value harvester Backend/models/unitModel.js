var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var unitSchema = new Schema({
  
    unit: {
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

  UnitTableModel: mongoose.model('unit_master', unitSchema, 'unit_master')
}