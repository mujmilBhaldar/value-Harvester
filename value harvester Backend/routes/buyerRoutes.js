const buyerRoutes = (()=>{
    const router = require('express').Router();
    const buyerController= require('../controller/masters/buyerController');
    // const authentication = require("../config/authToken");

    router.post('/buyer',buyerController.saveBuyerInfo);
    

    router.get('/buyer', buyerController.getBuyerInfo);

    router.put('/buyer', buyerController.updateBuyerInfo);
   
    router.get('/buyerNewRequest', buyerController.getBuyerNewRequestInfo);

   router.get('/buyerApprovedUser', buyerController.getBuyerApprovedUserInfo);
   router.put('/buyerUpdateApprovalFlag', buyerController.UpdateApprovalFlagInfo);
   
   router.put('/buyerUpdateRejectFlag', buyerController.UpdateRejectFlagInfo);
    return router;


})();
module.exports =buyerRoutes;
