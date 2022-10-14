const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const { CommodityTableModel } = require('../../models/commodityModel');
// const appConfig = require('../config/config')
const appConfig = require('../../config/config')
const cloudinary = require('cloudinary');
cloudinary.config(appConfig.cloudinaryConfig);
const path = require("path")
const fs = require("fs")
const commodityController = (() => {




    const saveCommodity = (req, res) => {

        console.log(req.file)
        let image = (req.file) ? req.file.filename : null;


        let commodityInfo = new CommodityTableModel;
        commodityInfo.commodityName = req.body.commodityName;
        commodityInfo.description = req.body.description;
        commodityInfo.unit = req.body.unit;
        commodityInfo.moq = req.body.moq;
        commodityInfo.image = req.body.image;
        commodityInfo.hindiName = req.body.hindiName;
        commodityInfo.englishName = req.body.englishName;
        commodityInfo.minPrice = req.body.minPrice;
        commodityInfo.maxPrice = req.body.maxPrice;
        commodityInfo.nodalPrice = req.body.nodalPrice;


        return commodityInfo.save()
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: "Please try again later", errorMsg: error });
            })

    }

    const getCommodity = (req, res) => {
        const display = { is_deleted: 0 }
        return CommodityTableModel.find(display)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json({ message: 'please try again later' });
            })
    }

    const updateCommodity = (req, res) => {
        const updatedBy = { _id: req.body._id }
        const updateValues = req.body;
        return CommodityTableModel.findOneAndUpdate(updatedBy, updateValues)
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }


    const deleteCommodity = (req, res) => {
        const deleteId = { _id: req.body._id }
        const updateStatus = { is_deleted: 1 }
        return CommodityTableModel.findOneAndUpdate(deleteId, updateStatus)
            .then((result) => {
                res.json(result);

            })
            .catch((error) => {
                res.json({ message: 'Please try again later' });
            })
    }
    const uploadImage = async (req, res) => {

        var date = new Date();
        var day = date.getDate();
        var minutes = date.getMinutes();
        var hours = date.getHours();

        var datetime = day + '_' + hours + '_'+ minutes;
        var fileExtention1 = path.extname(req.files.file.name);
        var fileName1 = (req.files.file.name.split('.')[0]);
        var tempFileName1 = fileName1 + '_' + datetime + fileExtention1;

        var fileDirectory = path.join(__dirname, '../public/');
        // var fileDirectory = path.join(__dirname, '/public/');

        // ensure log directory exists
        if (!fs.existsSync(fileDirectory)) {
            fs.mkdirSync(fileDirectory);
        }

        var newpath1 = fileDirectory + tempFileName1
        // Get image file details
        // contain file name and file moving method
        let imageFile1 = req.files.file;

        imageFile1.mv(newpath1, function (err) {
            if (err) {
                res.send('Error Occured: ' + err.message);
                return;
            }

            cloudinary.v2.uploader.upload("./public/" + tempFileName1, {
                folder: 'Complaints',
                resource_type: "auto"
            },
                function (error, result) {
                    // res.status(HTTPStatus.OK);
                    res.json(result);
                })
        })
    }
    return {
        saveCommodityInfo: saveCommodity,
        updateCommodityInfo: updateCommodity,
        getCommodityInfo: getCommodity,
        deleteCommodityInfo: deleteCommodity,
        uploadImageInfo: uploadImage,

    }
})();
module.exports = commodityController;