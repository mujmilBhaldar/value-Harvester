const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const {    BuyerRequisitionTableModel } = require('../../models/buyerRequisitionModel');

const buyerRequisitionController = (() => {

    const saveBuyerRequisation = (req, res) => {

        
        let buyerRequisationInfo= new  BuyerRequisitionTableModel;
        buyerRequisationInfo.reqNo=req.body.reqNo;
        buyerRequisationInfo.buyerId=req.body.buyerId;
        buyerRequisationInfo.reqDate=req.body.reqDate;
        buyerRequisationInfo.commodityDetails=req.body.commodityDetails;
        buyerRequisationInfo.latitude=req.body.latitude;
        buyerRequisationInfo.longitude=req.body.longitude;
        buyerRequisationInfo.requisationFlag=req.body.requisationFlag;
        
       
        return buyerRequisationInfo.save()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: "Please try again later", errorMsg: error });
            })

    }

    const getBuyerRequisation = (req, res) => {
        const display ={is_deleted:0}
        return  BuyerRequisitionTableModel.find(display)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }

    const updateBuyerRequisation = (req, res) => {
        const updatedBy = { _id: req.body._id }
        const updateValues = req.body;
        return  BuyerRequisitionTableModel.findOneAndUpdate(updatedBy, updateValues)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }
 

    const deleteBuyerRequisation = (req, res) => {
        const deleteId = { _id: req.body._id }
        const updateStatus = { is_deleted: 1 }
        return  BuyerRequisitionTableModel.findOneAndUpdate(deleteId, updateStatus)
            .then((result) => {
                res.json(result);
               
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
        }
            // const getBuyerRequisationNo = (req, res) => {
            //     let buyerRequisationNd = {requisationFlag: 0}
            //     return BuyerRequisationTableModel.find(buyerRequisationNd)
            //         .then((result) => {
            //             res.json(result);
            //         })
            //         .catch((error) => {
            //             res.json({ message: 'please try again later' });
            //         })
            // }
            // const getBuyerRequisationD = (req, res) => {
            //     let RequisationDone = {requisationFlag: 1}
            //     return BuyerRequisationTableModel.find(RequisationDone)
            //         .then((result) => {
            //             res.json(result);
            //         })
            //         .catch((error) => {
            //             res.json({ message: 'please try again later' });
            //         })
            //     }  
            //         const UpdateBuyerRequisationD  = (req, res) => {
            //             const updatedBy = { _id: req.body._id }
            //             let ChangeReqFlag= {requisationFlag: 1}
            //             return BuyerRequisationTableModel.findOneAndUpdate(updatedBy, ChangeReqFlag)
            //             .then((result) => {
            //                 res.json(result)
            //             })
            //             .catch((error) => {
            //                 res.json({ message: 'Please try again later' });
            //             })
            //         }

               
    

    return {
        saveBuyerRequisationInfo:saveBuyerRequisation ,
        getBuyerRequisationInfo :getBuyerRequisation  ,
        updateBuyerRequisationInfo:updateBuyerRequisation,
        deleteBuyerRequisationInfo:deleteBuyerRequisation,
        // getBuyerRequisationNoInfo: getBuyerRequisationNo,
        // getBuyerRequisationDInfo:getBuyerRequisationD,
        // UpdateBuyerRequisationDInfo:UpdateBuyerRequisationD,
     

    }
})();
module.exports = buyerRequisitionController;