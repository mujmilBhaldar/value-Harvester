const biddingOfferRoutes = (()=>{
    const router = require('express').Router();
    const biddingOfferController = require('../controller/masters/biddingOfferController');
    // const authentication = require("../config/authToken");

    router.post('/bidOffer', biddingOfferController.saveBiddingOfferInfo);
    router.get('/bidOffer_G',  biddingOfferController.getBiddingOfferInfo);
    router.put('/bidOffer_U', biddingOfferController.updateBiddingOfferInfo );
    router.put('/bidOffer_delete', biddingOfferController.deleteBiddingOfferInfo);
    
    router.get('/bidOfferNo', biddingOfferController.getBiddingOfferNoAccInfo);

    router.get('/bidOfferAc', biddingOfferController.getBiddingOfferAccInfo);
    return router;


})();
module.exports = biddingOfferRoutes;