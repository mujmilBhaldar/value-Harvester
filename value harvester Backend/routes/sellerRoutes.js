const sellerRoutes = (()=>{
    const router = require('express').Router();
    const sellerController= require('../controller/masters/sellerController');
     router.post('/seller',sellerController.saveSellerInfo);
     
     router.get('/seller', sellerController.getSellerInfo);

    router.put('/seller',sellerController.updateSellerInfo);
   
    router.get('/sellerNewRequest', sellerController.getSellerNewRequestInfo);
    router.get('/sellerApprovedUser', sellerController.getSellerApprovedUserInfo);
    router.put('/sellerUpdateApprovalFlag', sellerController.UpdateApprovalFlagInfo);

    router.put('/reject', sellerController.UpdateRejectFlagInfo);

    return router;


})();
module.exports =sellerRoutes;