const biddingRoutes = (()=>{
    const router = require('express').Router();
    const biddingController = require('../controller/masters/biddingController');
    // const authentication = require("../config/authToken");

    router.post("/bidding",biddingController.saveBiddingInfo);
    router.get('/bidding', biddingController.getBiddingInfo);
    router.put('/bidding',biddingController.updateBiddingInfo);
    router.put('/bidding_delete',biddingController.deleteBiddingInfo);
    
    return router;


})();
module.exports =biddingRoutes;