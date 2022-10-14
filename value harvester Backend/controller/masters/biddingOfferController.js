const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const { BiddingOfferTableModel } = require('../../models/biddingOfferModel');

const biddingOfferController = (() => {

    const saveBiddingOffer = (req, res) => {

        let biddingOfferInfo= new BiddingOfferTableModel;
        biddingOfferInfo.offerNo=req.body.offerNo;
        biddingOfferInfo.bidNo=req.body.bidNo;
        biddingOfferInfo.requisitionNo=req.body.requisitionNo;
        biddingOfferInfo.biddingCommodityDetails=req.body.biddingCommodityDetails;
        biddingOfferInfo.acceptanceFlag=req.body.acceptanceFlag;
       
        
       
        return  biddingOfferInfo.save()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: "Please try again later", errorMsg: error });
            })

    }

       const getBiddingOffer  = (req, res) => {
         const display ={is_deleted:0}
        return   BiddingOfferTableModel.find(display)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }

    const updateBiddingOffer = (req, res) => {
        const updatedBy = { _id: req.body._id }
        const updateValues = req.body;
        return  BiddingOfferTableModel.findOneAndUpdate(updatedBy, updateValues)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }
 

    const deleteBiddingOffer = (req, res) => {
        const deleteId = { _id: req.body._id }
        const updateStatus = { is_deleted: 1 }
        return  BiddingOfferTableModel.findOneAndUpdate(deleteId, updateStatus)
            .then((result) => {
                res.json(result);
               
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }

    const getBiddingOfferNoAcc = (req, res) => {
        let  notAcc = {acceptanceFlag: 0}
        return  BiddingOfferTableModel.find( notAcc)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }
    const  getBiddingOfferAcc = (req, res) => {
        let acc  = {acceptanceFlag: 1}
        return BiddingOfferTableModel.find(acc)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }  

    return {
        saveBiddingOfferInfo:saveBiddingOffer ,
        updateBiddingOfferInfo : updateBiddingOffer,
        getBiddingOfferInfo:getBiddingOffer ,
        deleteBiddingOfferInfo:deleteBiddingOffer,
        getBiddingOfferNoAccInfo:getBiddingOfferNoAcc,
        getBiddingOfferAccInfo: getBiddingOfferAcc 

    }
})();
module.exports = biddingOfferController;