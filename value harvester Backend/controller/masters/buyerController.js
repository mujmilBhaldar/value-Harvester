const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const {  BuyerTableModel } = require('../../models/buyerModel');

const buyerController = (() => {

    const saveBuyer =  (req, res) => {
       let buyerInfo = new BuyerTableModel;
     
        buyerInfo.firstName=req.body.firstName;
        buyerInfo.lastName=req.body.lastName;
        buyerInfo.mobileNumber=req.body.mobileNumber;
        buyerInfo.emailId=req.body.emailId;
        buyerInfo.typeOfBussiness=req.body.typeOfBussiness;
        buyerInfo.bussinessName=req.body.bussinessName;
        buyerInfo.pincode=req.body.pincode;
        buyerInfo.district=req.body.district;
        buyerInfo.state=req.body.state;
        buyerInfo.country=req.body.country;
        buyerInfo.panNo=req.body.panNo;
        buyerInfo.aadhar=req.body.aadhar;
        buyerInfo.gstIN=req.body.gstIN;
        buyerInfo.shopActNo=req.body.shopActNo;
        buyerInfo.location=req.body.location;
        buyerInfo.panImage=req.body.panImage;
        buyerInfo.aadharImage=req.body.aadharImage;
        buyerInfo.gstInImage=req.body.gstInImage;
        buyerInfo.shopActNoImage=req.body.shopActNoImage;
        buyerInfo.logitude=req.body.logitude;
        buyerInfo.latitude=req.body. latitude;
        buyerInfo.photograph=req.body.photograph;
        buyerInfo.approvalFlag=req.body.approvalFlag;
        buyerInfo.rejectFlag=req.body.rejectFlag;
        buyerInfo.rejectReason=req.body.rejectReason;
        
               return buyerInfo.save()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: "Please try again later", errorMsg: error });
            })

    }

    const getBuyer= (req, res) => {
        return BuyerTableModel.find()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }
    const getBuyerNewRequest= (req, res) => {
        let newUserReq = {approvalFlag: 0}
        return BuyerTableModel.find(newUserReq)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }
    const getBuyerApprovedUser= (req, res) => {
        let newUserReq = {approvalFlag: 1}
        return BuyerTableModel.find(newUserReq)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }  

     const UpdateApprovalFlag = (req, res) => {
        const updatedBy = { _id: req.body._id }
        let ChangeFlag= {approvalFlag: 1}
        return BuyerTableModel.findOneAndUpdate(updatedBy, ChangeFlag)
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            res.json({ message: 'Please try again later' });
        })
    }

      const UpdateRejectFlag = (req, res) => {
        const updatedBy = { _id: req.body.rejectChangeID}
        const updatedBvalue = { 
            rejectReason: req.body.rejectReason,
            rejectFlag: 1 }
        return BuyerTableModel.findOneAndUpdate(updatedBy, updatedBvalue)
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            res.json({ message: 'Please try again later' });
        })
    }

    const updateBuyer= (req, res) => {
        const updatedBy = { _id: req.body._id }
        const updateValues = req.body;
        return BuyerTableModel.findOneAndUpdate(updatedBy, updateValues)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }
 

   



    return {
        saveBuyerInfo:saveBuyer,
        updateBuyerInfo :updateBuyer ,
        getBuyerInfo:getBuyer,
        getBuyerNewRequestInfo:getBuyerNewRequest,
        getBuyerApprovedUserInfo:getBuyerApprovedUser,
        UpdateApprovalFlagInfo: UpdateApprovalFlag,
        UpdateRejectFlagInfo:UpdateRejectFlag
    }
})();
module.exports = buyerController;




