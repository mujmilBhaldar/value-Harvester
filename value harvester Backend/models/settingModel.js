

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var settingSchema = new Schema({


processingFee: {
  type: Number,
  default: ''
},
advancedAmount: {
    type: Number,
    default: ''
  },

  deliveryCharges: {
    type: Number,
    default: ''
  },

  gst: {
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

    SettingTableModel: mongoose.model('setting_master', settingSchema, 'setting_master')
}