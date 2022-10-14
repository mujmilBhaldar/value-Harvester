const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const { SettingTableModel } = require('../../models/settingModel');

const  settingController = (() => {

    const saveSetting  = (req, res) => {

        let settingInfo= new SettingTableModel ;
        settingInfo.processingFee=req.body.processingFee;
        settingInfo.advancedAmount=req.body.advancedAmount;
        settingInfo.deliveryCharges=req.body.deliveryCharges;
        settingInfo.gst=req.body.gst;
       
     
       
        return settingInfo.save()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: "Please try again later", errorMsg: error });
            })

    }

    const getSetting = (req, res) => {
        const display ={is_deleted:0}
        return SettingTableModel.find(display)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }

    const updateSetting = (req, res) => {
        const updatedBy = { _id: req.body._id }
        const updateValues = req.body;
        return SettingTableModel.findOneAndUpdate(updatedBy, updateValues)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }
 

    const deleteSetting = (req, res) => {
        const deleteId = { _id: req.body._id }
        const updateStatus = { is_deleted: 1 }
        return SettingTableModel.findOneAndUpdate(deleteId, updateStatus)
            .then((result) => {
                res.json(result);
               
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }

    return {
        saveSettingInfo:saveSetting,
        updateSettingInfo : updateSetting ,
        getSettingInfo:getSetting ,
        deleteSettingInfo: deleteSetting  

    }
})();
module.exports = settingController;