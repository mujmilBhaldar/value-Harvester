const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const { SellerTableModel } = require('../../models/sellerModel');

const sellerController = (() => {

    const saveSeller = (req, res) => {

        let sellerInfo= new SellerTableModel;
        sellerInfo.firstName=req.body.firstName;
        sellerInfo.lastName=req.body.lastName;
        sellerInfo.mobileNumber=req.body.mobileNumber;
        sellerInfo.emailId=req.body.emailId;
        sellerInfo.residentialAddress=req.body.residentialAddress;
        sellerInfo.pinCode=req.body.pinCode;
        sellerInfo.district=req.body.district;
        sellerInfo.state=req.body.state;
        sellerInfo.country=req.body.country;
        sellerInfo.panNo=req.body.panNo;
        sellerInfo.aadhar=req.body.aadhar;
        sellerInfo.panImage=req.body.panImage;
        sellerInfo.aadharImage=req.body.aadharImage;
        sellerInfo.photograph=req.body.photograph;
        sellerInfo.approvalFlag=req.body.approvalFlag;
        sellerInfo.commodity=req.body.commodity;
        sellerInfo.rejectFlag=req.body.rejectFlag;
        sellerInfo.rejectReason=req.body.rejectReason;
      
     
       
        return sellerInfo.save()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: "Please try again later", errorMsg: error });
            })

    }

    const getSeller= (req, res) => {
        return SellerTableModel.find()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }
    const getSellerNewRequest= (req, res) => {
        let newUserReq = {approvalFlag: 0}
        return SellerTableModel.find(newUserReq)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }
    const getSellerApprovedUser= (req, res) => {
        let approveUser = {approvalFlag: 1}
        return SellerTableModel.find(approveUser)
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
        return SellerTableModel.findOneAndUpdate(updatedBy, ChangeFlag)
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
        return SellerTableModel.findOneAndUpdate(updatedBy, updatedBvalue)
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            res.json({ message: 'Please try again later' });
        })
    }

    const updateSeller = (req, res) => {
        const updatedBy = { _id: req.body._id }
        const updateValues = req.body;
        return SellerTableModel.findOneAndUpdate(updatedBy, updateValues)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }
 

   



    return {
        saveSellerInfo:saveSeller,
        updateSellerInfo :updateSeller,
        getSellerInfo:getSeller,
        getSellerNewRequestInfo :getSellerNewRequest,
       getSellerApprovedUserInfo:getSellerApprovedUser,
       UpdateApprovalFlagInfo: UpdateApprovalFlag,
       UpdateRejectFlagInfo: UpdateRejectFlag
    }
})();
module.exports = sellerController;