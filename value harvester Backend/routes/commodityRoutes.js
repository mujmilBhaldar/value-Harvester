const commodityRoutes = (()=>{
    const router = require('express').Router();
    const commodityController = require('../controller/masters/commodityController');
    // const authentication = require("../config/authToken");


 var multer  = require('multer')

 var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'public/images')
        },
        filename: function (req, file, cb) {
        
          cb(null,Date.now() + ' ' + file.originalname )
        }
      })

  var  upload = multer({ storage: storage})


    router.post("/commodity",upload.single('image'),commodityController.saveCommodityInfo);
    router.post('/diesel_image',commodityController.uploadImageInfo);
    router.get('/commodity', commodityController.getCommodityInfo);
    router.put('/commodity',commodityController.updateCommodityInfo);
    router.put('/commodity_delete',commodityController.deleteCommodityInfo);
    
    return router;


})();
module.exports = commodityRoutes;