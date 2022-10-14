const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const { BiddingTableModel } = require('../../models/biddingModel');

const biddingController = (() => {

    const saveBidding = (req, res) => {

        let biddingInfo= new BiddingTableModel ;
        biddingInfo.biddingNo=req.body.biddingNo;
        biddingInfo.reqNumber=req.body.reqNumber;
        biddingInfo.biddingDetails=req.body.biddingDetails;
        biddingInfo.sellerId=req.body.sellerId;
        biddingInfo.remark=req.body.remark;
        
       
        return  biddingInfo.save()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: "Please try again later", errorMsg: error });
            })

    }

       const getBidding = (req, res) => {
         const display ={is_deleted:0}
        return  BiddingTableModel .find(display)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }

    const updateBidding = (req, res) => {
        const updatedBy = { _id: req.body._id }
        const updateValues = req.body;
        return BiddingTableModel.findOneAndUpdate(updatedBy, updateValues)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }
 

    const deleteBidding = (req, res) => {
        const deleteId = { _id: req.body._id }
        const updateStatus = { is_deleted: 1 }
        return  BiddingTableModel.findOneAndUpdate(deleteId, updateStatus)
            .then((result) => {
                res.json(result);
               
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }

    return {
        saveBiddingInfo:saveBidding ,
        updateBiddingInfo : updateBidding,
        getBiddingInfo:getBidding ,
        deleteBiddingInfo: deleteBidding 

    }
})();
module.exports =  biddingController;