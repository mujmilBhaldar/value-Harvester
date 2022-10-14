const adminRoutes= (()=>{
    const router = require('express').Router();
    const adminController = require('../controller/masters/adminController');
  

    router.post('/admin', adminController.saveAdminInfo); 
    router.get('/admin',  adminController.getAdminInfo);
    // router.get('/admin_G', adminController.getAdminInfo);
    router.put('/admin', adminController.updateAdminInfo);
    router.put('/admin_delete', adminController.deleteAdminInfo);
    router.post('/admin_login',adminController.admin_loginInfo);

 
    return router;


})();
module.exports =adminRoutes;
