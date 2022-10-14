const unitRoutes = (()=>{
    const router = require('express').Router();
    const unitController = require('../controller/masters/unitController');
    // const authentication = require("../config/authToken");

    router.post('/unit',unitController.saveUnitInfo);
    router.get('/unit', unitController.getUnitInfo);
    router.put('/unit',unitController.updateUnitInfo);
    router.put('/unit_delete',unitController.deleteUnitInfo);
    
    return router;


})();
module.exports = unitRoutes;