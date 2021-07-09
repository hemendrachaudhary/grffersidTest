var companyModel = require('../model/company.model');
const jwt = require('jsonwebtoken');
const response = require("../../utils/response");
const messages = require("../../utils/messages")["company"];
const pagination = require("../../config")["pagination"];
const common = require("../../utils/common");
require('dotenv').config();


async function create(data, res) {
    try {
        //var token = data.headers['x-access-token'];
      // jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
      // if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      // })
        
        const requiredFields = ["name", "location",'registration_no'];
        if (!common.checkKeys(data.body, requiredFields)) {
          return response.sendBadRequest(res);
        }
        
      const { name, location, registration_no} = data.body;
      var where = `registration_no='${registration_no}'`;
      var exists_company = await companyModel.checkCompany(where);
    if (exists_company > 0) {
        return response.sendError(res, messages.com_exist);  
    } else{
        var logo = '';
        if(data.file != undefined){
          console.log(data.file.filename)
          logo = data.file.filename;
        }
        var insert = `name='${name}',location='${location}',registration_no='${registration_no}',image='${logo}'`;
        companyData =  companyModel.createCompany(insert);
         return response.sendSuccess(res, messages.created);
        }
    
  } catch (error) {
      return response.sendSystemError(res, error);
    }
  }

  async function writeReview(data, res) {
    try {
        //var token = data.headers['x-access-token'];
      // jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
      // if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      // })
        const requiredFields = ["com_id", "reviewer_name",'subject',"rating","body"];
        if (!common.checkKeys(data.body, requiredFields)) {
          return response.sendBadRequest(res);
        }
       const { com_id, reviewer_name, subject,rating,body} = data.body;
       if(rating > 5) {
        return response.sendError(res, messages.rating_err);
       } else if(rating < 1) {
        return response.sendError(res,messages.rating_err);
       }
       else {
       var image = '';
       if(data.file != undefined){
           image = data.file.filename;
         }
        var insert = `com_id='${com_id}',reviewer_name='${reviewer_name}',subject='${subject}',rating='${rating}',body='${body}',reviewer_image='${image}'`;
        reviewData =  companyModel.createreview(insert);
        return response.sendSuccess(res, messages.review);
        }
        } catch (error) {
      return response.sendSystemError(res, error);
    }
  }

  

async function getCompany(req, res) {
  try {
    
    var limit = req.query.limit
    var page_number = req.query.page_number
    var offset;
    if (page_number == null || page_number == 1) {
        offset = 0;
    }
     else {
        offset = limit * (page_number - 1);
    }
       
   
    if (limit == undefined || limit == null || limit == "") {
        res.json({ 'status': 'failed', 'message': 'limit  is required' });
        return response.sendError(res, messages.lmt); 
     }
    var companyData = await companyModel.getCompany(limit,offset);
    companyList = companyData.company
    total = companyData.total
    if (companyList.length > 0) {
      return response.sendSuccessWithCount(res, messages.retrive,total,{companyList});
        
    } else {
      return response.sendError(res, messages.com_not);
      
    }
  } catch (error) {
    return response.sendSystemError(res, error);
  }
}

async function getReviewByCompany(req, res) {
  try {
    
    var limit = req.query.limit
    var page_number = req.query.page_number
    var com_id = req.query.com_id
    var offset;
    if (page_number == null || page_number == 1) {
        offset = 0;
    }
     else {
        offset = limit * (page_number - 1);
    }
       
   
    if (limit == undefined || limit == null || limit == "") {
        return response.sendError(res, messages.lmt); 
     }
     if (com_id == undefined || com_id == null || com_id == "") {
      return response.sendError(res, messages.company_id_err); 
   }
   var where = `com_id='${com_id}'`
    var reviewData = await companyModel.getReviewList(where,limit,offset);
    reviewList = reviewData.review
    total = reviewData.total
    if (reviewList.length > 0) {
      return response.sendSuccessWithCount(res, messages.retrive,total,{reviewList});
        
    } else {
      return response.sendError(res, messages.com_not);
      
    }
  } catch (error) {
    return response.sendSystemError(res, error);
  }
}

module.exports = {
    create: create,
    writeReview,writeReview,
    getCompany: getCompany,
    getReviewByCompany:getReviewByCompany
       
}