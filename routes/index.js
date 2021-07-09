var express = require('express');
const router = express.Router();
// var user = require('../api/controller/users.controller');
var company = require('../api/controller/company.controller');
var multer = require('multer');

var companyLogo = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './public/company/')
  },
  filename: function (req, file, cb) {
      cb(null,file.originalname)
  }
})
var companyFileUpload = multer({ storage: companyLogo });
var reviwerImgae = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './public/reviewer/')
  },
  filename: function (req, file, cb) {
      console.log(file.originalname);
      cb(null,file.originalname)
  }
})
var reviewFileUpload = multer({ storage: reviwerImgae });

  router.route("/v1/createcompany/").post(companyFileUpload.single("file"),company.create);
  router.route("/v1/writeReview/").post(reviewFileUpload.single("file"),company.writeReview);
  router.route("/v1/getCompany/").get(company.getCompany);
  router.route("/v1/getReviewByCompany/").get(company.getReviewByCompany);
  
  
  module.exports = router

