const registrationRoutes = (() => {
    const router = require('express').Router();
    const registrationController = require('../controller/masters/registrationContoller');
    const authentication = require("../config/authToken");
    const bodyParser = require('body-parser')
    router.use(bodyParser.json());
     
    
    const multer = require('multer');

   const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/')
        },
        filename: function (req, file, cb) {
            // console.log(file);
            let newName = Date.now() + '-' + file.orignalname;
            cb(null, newName);
        }
    })


const upload = multer({ storage: storage });
// const upload = multer({ dest:'public/' });

    router.post("/rg", registrationController.saveRegistrationInfo);
 
    router.get('/rg', registrationController.getRegistrationInfo);
    router.get('/rg', authentication, registrationController.getRegistrationsInfo);
    router.put('/rg_U', registrationController.updateRegistrationnfo);
    router.put('/rg_delete', registrationController.deleteRegistrationInfo);
    router.post('/profile',upload.single('profile_pic'), registrationController.userProfileInfo);
    // router.post('/profile', upload.single('profile_pic'), registrationController.userProfileInfo);
    // router.post('/profile', upload.array('profile_pic'), registrationController.userProfileInfo);

    router.post('/login', registrationController.login);



    router.post('/email_send', registrationController.emailSendInfo);
    // router.post('/change_password',registrationController.changePasswordInfo);
    router.put('/change_password', registrationController.changePasswordInfo);
    router.post('/register', registrationController.registerInfo);
    router.post('/verifyOtp', registrationController.verifyOtpInfo);

    return router;


})();
module.exports = registrationRoutes;