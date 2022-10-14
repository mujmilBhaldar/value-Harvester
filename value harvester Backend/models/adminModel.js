
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var  adminSchema = new Schema({

name: {
    type: String,
    default: ''
},

userName: {
    type: String,
    default: ''
},



password: {
    type: String,
    default: ''
},

role: {
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

adminTableModel: mongoose.model('admin_master', adminSchema , 'admin_master')
}