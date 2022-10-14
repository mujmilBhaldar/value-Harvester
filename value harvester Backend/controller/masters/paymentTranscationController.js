const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const {    PaymentTranscationTableModel } = require('../../models/paymentTranscationModel');


const paymentTranscationController = (() => {

    const savePaymentTranscation = (req, res) => {

        let paymentTranscationInfo = new PaymentTranscationTableModel;
        paymentTranscationInfo.paymentId = req.body.paymentId;
        paymentTranscationInfo.bidNo = req.body.bidNo;
        paymentTranscationInfo.sellerId = req.body.sellerId;
        paymentTranscationInfo.buyerId = req.body.buyerId;
        paymentTranscationInfo.paymentDate = req.body.paymentDate;
        paymentTranscationInfo.advanceAmount = req.body.advanceAmount;
        paymentTranscationInfo.totalAmount = req.body.totalAmount;
        paymentTranscationInfo.totalAmount = req.body.totalAmount;
        paymentTranscationInfo.paymentstatus = req.body.paymentstatus;
       
        return paymentTranscationInfo.save()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: "Please try again later", errorMsg: error });
            })

    }

    const getPaymentTranscation = (req, res) => {
        const display = { is_deleted: 0 }
        return  PaymentTranscationTableModel.find(display)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }


    const updatePaymentTranscation= (req, res) => {
        const updatedBy = { _id: req.body._id }
        const updateValues = req.body;
        return PaymentTranscationTableModel.findOneAndUpdate(updatedBy, updateValues)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }


    const deletePaymentTranscation = (req, res) => {
        const deleteId = { _id: req.body._id }
        const updateStatus = { is_deleted: 1 }
        return  PaymentTranscationTableModel.findOneAndUpdate(deleteId, updateStatus)
            .then((result) => {
                res.json(result);

            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }

//     const getPaymentTranscationRec  = (req, res) => {
//         let payTranStatus = {paymentstatus: "recieved"}
//         return PaymentTranscationTableModel.find( payTranStatus)
//             .then((result) => {
//                 res.json(result);
//             })
//             .catch((error) => {
//                 res.json({ message: 'please try again later' });
//             })
//     }  

//     const getPaymentTranscationNRec = (req, res) => {
//         let payTranStatus = {paymentstatus: "Not recieved"}
//         return PaymentTranscationTableModel.find( payTranStatus)
//             .then((result) => {
//                 res.json(result);
//             })
//             .catch((error) => {
//                 res.json({ message: 'please try again later' });
//             })

// }  

//     const UpdatePaymentTranscation = (req, res) => {
//         const updatedBy = { _id: req.body._id }
//         let ChangeFlag= {paymentstatus: "Not recieved"}
//         return BuyerTableModel.findOneAndUpdate(updatedBy, ChangeFlag)
//         .then((result) => {
//             res.json(result)
//         })
//         .catch((error) => {
//             res.json({ message: 'Please try again later' });
//         })
//     }

    return {
        savePaymentTranscationInfo: savePaymentTranscation,
        getPaymentTranscationInfo: getPaymentTranscation,
        updatePaymentTranscationInfo:updatePaymentTranscation,
        deletePaymentTranscationInfo:deletePaymentTranscation,
        // getPaymentTranscationRecInfo: getPaymentTranscationRec,
        // getPaymentTranscationNRecInfo:getPaymentTranscationNRec,
        // UpdatePaymentTranscationInfo:UpdatePaymentTranscation,
        

    }
})();
module.exports = paymentTranscationController;