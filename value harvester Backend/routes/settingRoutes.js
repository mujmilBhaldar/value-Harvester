const settingRoutes  = (()=>{
    const router = require('express').Router();
    const settingController = require('../controller/masters/settingController');
    // const authentication = require("../config/authToken");

    router.post("/setting", settingController.saveSettingInfo);
    router.get('/setting',  settingController.getSettingInfo);
    router.put('/setting', settingController.updateSettingInfo );
    router.put('/setting_delete', settingController.deleteSettingInfo);
    
    return router;


})();
module.exports = settingRoutes ;
