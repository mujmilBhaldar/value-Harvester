const buyerRequisationRoutes = (()=>{
    const router = require('express').Router();
    const buyerRequisitionController = require('../controller/masters/buyerRequisitionController');
    // const authentication = require("../config/authToken");
    router.post("/brq",buyerRequisitionController.saveBuyerRequisationInfo);
    router.get('/brq', buyerRequisitionController.getBuyerRequisationInfo );
    router.put('/brq',buyerRequisitionController.updateBuyerRequisationInfo);
    router.put('/brq_delete',buyerRequisitionController.deleteBuyerRequisationInfo);
    // router.get('/brq_rec', buyerRequisationController.getBuyerRequisationNoInfo);

    // router.get('/brq_Nrec', buyerRequisationController.getBuyerRequisationDInfo);
    // router.put('/brq_Rc', buyerRequisationController.UpdateBuyerRequisationDInfo);
    return router;


})();
module.exports = buyerRequisationRoutes;