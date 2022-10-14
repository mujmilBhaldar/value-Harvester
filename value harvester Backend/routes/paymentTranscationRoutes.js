const paymentTranscationRoutes = (()=>{
    const router = require('express').Router();
    const paymentTranscationController = require('../controller/masters/paymentTranscationController');
    // const authentication = require("../config/authToken");

    router.post('/pt', paymentTranscationController.savePaymentTranscationInfo);
    router.get('/pt_G',  paymentTranscationController.getPaymentTranscationInfo);
    router.put('/pt_U', paymentTranscationController.updatePaymentTranscationInfo);
    router.put('/pt_delete', paymentTranscationController.deletePaymentTranscationInfo);
//     router.get('/prec',  paymentTranscationController.getPaymentTranscationRecInfo);

//     router.get('/pnrec',  paymentTranscationController.getPaymentTranscationNRecInfo);
//    router.put('/pnrecc',paymentTranscationController.UpdatePaymentTranscationInfo);
    
 
    return router;


})();
module.exports =paymentTranscationRoutes;
