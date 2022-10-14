const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const { UnitTableModel } = require('../../models/unitModel');

const unitController = (() => {

    const saveUnit = (req, res) => {

        let unitInfo= new UnitTableModel;
         unitInfo.unit=req.body.unit;
       
       
        return unitInfo.save()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: "Please try again later", errorMsg: error });
            })

    }

    const getUnit = (req, res) => {
        const display ={is_deleted:0}
        return UnitTableModel.find(display)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }

    const updateUnit = (req, res) => {
        const updatedBy = { _id: req.body._id }
        const updateValues = req.body;
        return UnitTableModel.findOneAndUpdate(updatedBy, updateValues)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }
 

    const deleteUnit = (req, res) => {
        const deleteId = { _id: req.body._id }
        const updateStatus = { is_deleted: 1 }
        return UnitTableModel.findOneAndUpdate(deleteId, updateStatus)
            .then((result) => {
                res.json(result);
               
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }

    return {
        saveUnitInfo:saveUnit,
        getUnitInfo :getUnit,
        updateUnitInfo:updateUnit,
        deleteUnitInfo:deleteUnit 

    }
})();
module.exports = unitController;