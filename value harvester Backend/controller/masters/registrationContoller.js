const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const otpGenrator = require('otp-generator');
const axios = require('axios')
// const messagebird = require('messagebird')('<YOUR_ACCESS_KEY>');
const messagebird = require('messagebird')('0cgRcA4h4ysOA3efUkpFmFqSu');



const { OtpTableModel } = require('../../models/otpModel')

const { RegistrationTableModel } = require('../../models/registrationModel');

const registrationContoller = (() => {


    const saveRegistration = (req, res) => {

        let registrationInfo = new RegistrationTableModel;
        registrationInfo.mobileNo = req.body.mobileNo;
        registrationInfo.emailId = req.body.emailId;
        registrationInfo.password = req.body.password;
        registrationInfo.otp = req.body.otp;
        registrationInfo.verifyFlag = req.body.verifyFlag;
        registrationInfo.firstName = req.body.firstName;
        registrationInfo.lastName = req.body.lastName;
        registrationInfo.userType = req.body.userType;
        registrationInfo.entityType = req.body.entityType;
        registrationInfo.aadharNo = req.body.aadharNo;
        registrationInfo.panNo = req.body.panNo;
        registrationInfo.address = req.body.address;
        registrationInfo.pincode = req.body.pincode;
        registrationInfo.logitude = req.body.logitude;
        registrationInfo.latitude = req.body.latitude;
        registrationInfo.profile = req.body.profile;


        // const user = await RegistrationTableModel.findOne({
        //     mobileNo:req.body.mobileNo,
        //     emailId = req.body.emailId,
        //     password = req.body.password,
        //         otp = req.body.otp,
        //         verifyFlag = req.body.verifyFlag,
        //         firstName = req.body.firstName,
        //         lastName = req.body.lastName,
        //         userType = req.body.userType,
        //         entityType = req.body.entityType,
        //         aadharNo = req.body.aadharNo,
        //         panNo = req.body.panNo,
        //         address = req.body.address,
        //         pincode = req.body.pincode,
        //         logitude = req.body.logitude
        //         latitude = req.body.latitude;
        // })
        // if(user) return res.status(400).send("User already registered") ;




        return registrationInfo.save()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: "Please try again later", errorMsg: error });
            })

    }

    const getRegistration = (req, res) => {
        const display = { is_deleted: 0 }
        return RegistrationTableModel.find(display)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }

    const updateRegistration = (req, res) => {
        const updatedBy = { _id: req.body._id }
        const updateValues = req.body;
        return RegistrationTableModel.findOneAndUpdate(updatedBy, updateValues)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }


    const deleteRegistration = (req, res) => {
        const deleteId = { _id: req.body._id }
        const updateStatus = { is_deleted: 1 }
        return RegistrationTableModel.findOneAndUpdate(deleteId, updateStatus)
            .then((result) => {
                res.json(result);

            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })

    }


    const getRegistrations = (req, res) => {
        return RegistrationTableModel.find()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }

    const login = (req, res) => {
        const query = { emailId: req.body.emailId, password: req.body.password }
        return RegistrationTableModel.findOne(query)
            .then((result) => {
                // res.json(result);
                const user = {};
                const useInfo = {
                    emailId: result.emailId,
                    firstName: result.firstName,
                    lastName: result.firstName,
                }

                const token = jwt.sign(
                    { emailId: req.body.emailId, password: req.body.password },
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


    const emailSend = async (req, res) => {
        let data = await RegistrationTableModel.findOne({ emailId: req.body.emailId })
        console.log(data)
        const responseType = {};
        if (data) {
            let otpcode = Math.floor((Math.random() * 10000) + 1);
            let otpData = new OtpTableModel({
                emailId: req.body.emailId,
                code: otpcode,
                expiresIn: new Date().getTime() + 300 * 1000
            })
            let otpResponse = await otpData.save();
            responseType.statusText = "Success"
            // mailer(req.body.emailId,req.body.otp)
            mailer(req.body.emailId)
            responseType.message = "Please check your Email";
        } else {
            responseType.statusText = "error"
            responseType.message = "Email does not exist";
        }
        res.status(200).json(responseType)
    }


    //  const emailSend = async (req, res) => {

    //     let registrationInfo = new RegistrationTableModel;
    //     registrationInfo.mobileNo = req.body.mobileNo;
    //     registrationInfo.emailId = req.body.emailId;
    //     registrationInfo.password = req.body.password;

    //     registrationInfo.verifyFlag = req.body.verifyFlag;
    //     registrationInfo.firstName = req.body.firstName;
    //     registrationInfo.lastName = req.body.lastName;
    //     registrationInfo.userType = req.body.userType;
    //     registrationInfo.entityType = req.body.entityType;
    //     registrationInfo.aadharNo = req.body.aadharNo;
    //     registrationInfo.panNo = req.body.panNo;
    //     registrationInfo.address = req.body.address;
    //     registrationInfo.pincode = req.body.pincode;
    //     registrationInfo.logitude = req.body.logitude;
    //     registrationInfo.latitude = req.body.latitude;

    //     let data = await RegistrationTableModel.findOne({ emailId: req.body.emailId })
    //     console.log(data)
    //     const responseType = {};
    //     if (data) {
    //         let otpcode = Math.floor((Math.random() * 10000) + 1);
    //         let otpData = new RegistrationTableModel({
    //             emailId: req.body.emailId,
    //             code: otpcode,
    //             expiresIn: new Date().getTime() + 300 * 1000
    //         })
    //         let otpResponse = await otpData.save();
    //         let RegisterResponse = await registrationInfo.save();
    //         responseType.statusText = "Success"
    //         responseType.message = "Please check your Email";
    //     } else {
    //         responseType.statusText = "error"
    //         responseType.message = "Email does not exist";
    //     }
    //     res.status(200).json(responseType)
    // }

    const changePassword = async (req, res) => {

        let data = await OtpTableModel.find({ emailId: req.body.emailId, code: req.body.otpcode });
        const response = {}
        if (data) {
            let currentTime = new Date().getTime();
            let diff = data.expiresIn - currentTime;
            if (diff < 0) {
                // response.message = "Token Expire" 
                response.statusText = "error"

            } else {

                let user = await RegistrationTableModel.findOne({ emailId: req.body.emailId })
                user.password = req.body.password;
                user.save();

                response.message = 'Password Changed Suceesfully'

                response.statusText = 'Success'
            }
        } else {
            response.message = 'Invalid otp'
            response.statusText = 'errors'

        }
        res.status(200).json(response);
    }

    //     const changePassword = async (req, res) => {

    //     let data = await OtpTableModel.find({ emailId: req.body.emailId, code: req.body.otpcode });
    //     const response = {}
    //     if (data) {

    //             // const updatedBy = { _id: req.body._id }
    //             // const updateValues = req.body.password;
    //             const user = await RegistrationTableModel.findOneAndUpdate({ emailId })

    //             user.password = req.body.password;
    //             user.save();

    //             response.message = 'Password Changed Suceesfully'
    //             response.statusText = 'Success'

    //     } else {
    //         response.message = 'Invalid otp'
    //         response.statusText = 'errors'

    //     }
    //     res.status(200).json(response);
    // }
    // const mailer = (emailId, otp) => {
    //     var nodemailer = require('nodemailer');
    //     var trasporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         port: 587,
    //         secure: false,
    //         auth:{
    //             user:'msbhaldar@gmail.com',
    //             pass:'T12345'
    //         }
    //     });
    //     var mailOptions = {
    //         from: 'punetechnology123@gmail.com',
    //         to: 'punetechnology123@gmail.com',
    //         subject: "Sending Email using Node.js",
    //         text: 'Thank you sir!'
    //     };
    //     transporter.sendMail(mailOptions, function (error, info) {
    //         if (error) {
    //             console.log(error);
    //         } else {
    //             console.log('Email sent: ' + info.response);
    //         }
    //     });
    // }

    // const signUp = async (req,res)=>{
    //     let data = await RegistrationTableModel.findOne({mobileNo:req.body.mobileNo})
    //     console.log(data)
    //     const responseType={};
    //     if(data){
    //         let otpcode = Math.floor((Math.random()*10000)+1);
    //         let otpData = new OtpTableModel({
    //             mobileNo:req.body.mobileNo,
    //             code:otpcode,
    //             expiresIn: new Date().getTime() + 300*1000
    //         })
    //         let otpResponse = await otpData.save();
    //         responseType.statusText = "Success"
    //         responseType.message = "Please check your mobile";
    //     }else{
    //         responseType.statusText = "error"
    //         responseType.message = "mobileNo  does not exist";
    //     }
    //     res.status(200).json(responseType)
    // }


    //   const register = async(req,res)=>{
    //     const user = await RegistrationTableModel.findOne({
    //         mobileNo:req.body.mobileNo
    //     })
    //     if(user) return res.status(400).send("User already registered") ;

    //     const OTP = otpGenrator.generate(6,{
    //         digits:true, alphabates:false,upperCase:false,specialChars:false 
    //     });
    //     const mobileNo= req.body.mobileNo;
    //     console.log(OTP);

    //     // const otp = new OtpTableModel({mobileNo:mobileNo,otp:OTP});
    //     const otp = new OtpTableModel({mobileNo:mobileNo,otp:OTP});
    //     const salt = await bcrypt.genSalt(10);
    //     otp.otp = await bcrypt.hash(otp.otp,salt);
    //     const result = await otp.save();
    //     return res.status(200).send("Otp send successfully");


    // }

    const mailer = (emailId, otp) => {
        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'punetechnology123@gmail.com',
                // pass:'Msb@12345',
                pass: 'yxfsbjgavarofcrh'
            }
        });
        var mailOptions = {
            from: 'punetechnology123@gmail.com',
            to: 'punetechnology123@gmail.com',
            subject: "Sending Email using Node.js",
            text: 'Thank you sir,!',



        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
    const register = async (req, res) => {

        // const OTP = otpGenrator.generate(6, {
        //     digits: true, alphabates: false, upperCase: false, specialChars: false
        // });
        const selectedotp = Math.floor((Math.random() * 1000000) + 1);
        // const salt = await bcrypt.genSalt(10);
        // const selectedotp = await bcrypt.hash(OTP, salt);

        let registrationInfo = new RegistrationTableModel;
        registrationInfo.mobileNo = req.body.mobileNo;
        registrationInfo.emailId = req.body.emailId;
        registrationInfo.password = req.body.password;
        registrationInfo.otp = selectedotp;
        registrationInfo.verifyFlag = req.body.verifyFlag;
        registrationInfo.firstName = req.body.firstName;
        registrationInfo.lastName = req.body.lastName;
        registrationInfo.userType = req.body.userType;
        registrationInfo.entityType = req.body.entityType;
        registrationInfo.aadharNo = req.body.aadharNo;
        registrationInfo.panNo = req.body.panNo;
        registrationInfo.address = req.body.address;
        registrationInfo.pincode = req.body.pincode;
        registrationInfo.logitude = req.body.logitude;
        registrationInfo.latitude = req.body.latitude;

        const user = await RegistrationTableModel.findOne({
            mobileNo: req.body.mobileNo,
        })

        if (user) {
            return res.status(400).send("User already registered");
        } else {
            return registrationInfo.save()
                .then((result) => {
                    // res.json(result);
                    res.json({ message: "OTP Sent suucessfully!", result });
                })
                .catch((error) => {
                    res.json({ message: "Please try again later", errorMsg: error });
                })
        }

    }

    // const verifyOtp = async (req, res) => {
    //     const otpHolder = await OtpTableModel.find({
    //         mobileNo: req.body.mobileNo
    //     });
    //     if (otpHolder.length === 0) return res.status(400).send("You are expired OTP!");
    //     const rightOtpFind = otpHolder[otpHolder.length - 1];
    //     const validUser = await bcrypt.compare(req.body.otp, rightOtpFind.otp);
    //     if (rightOtpFind.mobileNo === req.body.mobileNo && validUser) {
    //         // const user = new RegistrationTableModel(_.pick(req.body,["mobileNo"]));
    //         const user = new RegistrationTableModel((req.body, ["mobileNo"]));
    //         const result = await OtpTableModel.deleteMany({
    //             mobileNo: rightOtpFind.mobileNo
    //         });
    //         return res.status(200).send({
    //             message: "User Registration Successfull!",
    //             // token:token,

    //             data: result
    //         })
    //     } else {
    //         return res.status(400).send("Your OTP was wrong")
    //     }


    const verifyOtp = async (req, res) => {

        let registrationInfo = new RegistrationTableModel;
        registrationInfo.mobileNo = req.body.mobileNo;
        registrationInfo.emailId = req.body.emailId;
        registrationInfo.password = req.body.password;
        registrationInfo.otp = req.body.otp;
        // registrationInfo.otp = selectedotp;
        registrationInfo.verifyFlag = req.body.verifyFlag;
        registrationInfo.firstName = req.body.firstName;
        registrationInfo.lastName = req.body.lastName;
        registrationInfo.userType = req.body.userType;
        registrationInfo.entityType = req.body.entityType;
        registrationInfo.aadharNo = req.body.aadharNo;
        registrationInfo.panNo = req.body.panNo;
        registrationInfo.address = req.body.address;
        registrationInfo.pincode = req.body.pincode;
        registrationInfo.logitude = req.body.logitude;
        registrationInfo.latitude = req.body.latitude;

        const otpHolder = await RegistrationTableModel.find({
            mobileNo: req.body.mobileNo

        });
        if (otpHolder.length === 0) return res.status(400).send("You are expired OTP!");
        const rightOtpFind = otpHolder[otpHolder.length - 1];
        // const validUser = await bcrypt.compare.compare(req.body.otp, rightOtpFind.otp);
        const validUser = await (req.body.otp === rightOtpFind.otp);
        if (rightOtpFind.mobileNo === req.body.mobileNo && validUser) {

            // const user = new RegistrationTableModel(_.pick(req.body,["mobileNo"]));
            // const user = new RegistrationTableModel((req.body, ["mobileNo"]));
            const user = registrationInfo;

            const result = await user.save()
            // const OTPDelete = await RegistrationTableModel.deleteMany({
            //     mobileNo: rightOtpFind.mobileNo
            // });
            return res.status(200).send({
                message: "Otp verify  Successfull!",
                // token:token,

                data: result
            })
        } else {
            return res.status(400).send("Your OTP was wrong")
        }






    }
    const userProfile = (req, res) => {
        // console.log(req.file.fileName)
        console.log(req.file)
        res.json({ message: 'uploaded' });

    }

    return {

        saveRegistrationInfo: saveRegistration,
        updateRegistrationnfo: updateRegistration,
        getRegistrationInfo: getRegistration,
        getRegistrationsInfo: getRegistrations,
        deleteRegistrationInfo: deleteRegistration,
        login: login,
        emailSendInfo: emailSend,
        changePasswordInfo: changePassword,
        registerInfo: register,
        verifyOtpInfo: verifyOtp,
        userProfileInfo: userProfile


    }
})();
module.exports = registrationContoller;