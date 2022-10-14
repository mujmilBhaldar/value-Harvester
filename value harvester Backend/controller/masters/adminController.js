const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const {adminTableModel } = require('../../models/adminModel');

const  adminContoller = (() => {


    const saveAdmin = (req, res) => {

        let adminInfo = new  adminTableModel;
        adminInfo.name = req.body.name
        adminInfo.userName = req.body.userName 
        adminInfo.password = req.body.password
        adminInfo.role = req.body.role
    
        return adminInfo.save()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: "Please try again later", errorMsg: error });
            })

    }

    const getAdmin = (req, res) => {
        const display = {is_deleted:0}
        return  adminTableModel.find(display)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }


    const updateAdmin  = (req, res) => {
        const updatedBy = { _id: req.body._id }
        const updateValues = req.body;
        return adminTableModel.findOneAndUpdate(updatedBy, updateValues)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }


    const deleteAdmin = (req, res) => {
        const deleteId = { _id: req.body._id }
        const updateStatus = { is_deleted: 1 }
        return adminTableModel.findOneAndUpdate(deleteId, updateStatus)
            .then((result) => {
                res.json(result);

            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })

    }


   

    const admin_login = (req, res) => {
        const query = {  userName: req.body.userName, password: req.body.password }
        return adminTableModel.findOne(query)
            .then((result) => {
                // res.json(result);
                const user = {};
                const useInfo = {
                    userName:result.userName,
                    role:result.role,
                    name:result.name,
                }

                const token = jwt.sign(
                    {  userName: req.body.userName ,password: req.body.password },
                       process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );

                // save user token
                user.token = token;
                user.userInfo = useInfo;

                // user
                res.status(200).json(user);

            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }

    return {
        saveAdminInfo :  saveAdmin,
        getAdminInfo:getAdmin,
        updateAdminInfo : updateAdmin,
        deleteAdminInfo: deleteAdmin,
        admin_loginInfo:  admin_login,
       }
})();
module.exports =  adminContoller;