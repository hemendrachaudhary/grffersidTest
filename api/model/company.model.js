var Sequelize = require('sequelize');
var sequelize = require('../../config/database');

const checkCompany = async (where) => {
    var company = Promise.resolve(await sequelize.query(`SELECT count(id) as company_count
    FROM company_tbl 
    WHERE ${where} `, { type: Sequelize.QueryTypes.SELECT }));
    if (company._rejectionHandler0[0].company_count > 0)
        return company._rejectionHandler0[0].company_count;
    else
        return 0;
};

async function createCompany(query) {
    var company = Promise.resolve(await sequelize.query(`INSERT INTO company_tbl SET ${query}`, { type: Sequelize.QueryTypes.INSERT }));
    if (company._rejectionHandler0.length === 0)
        return company._rejectionHandler0;
    else {
        return company._rejectionHandler0[0];
    }
}

async function createreview(query) {
    var review = Promise.resolve(await sequelize.query(`INSERT INTO review_tbl SET ${query}`, { type: Sequelize.QueryTypes.INSERT }));
    if (review._rejectionHandler0.length === 0)
        return review._rejectionHandler0;
    else {
        return review._rejectionHandler0[0];
    }
}




async function getCompany(limit,offset) {
    var total_company = Promise.resolve(await sequelize.query(`SELECT count(id) as total_company FROM company_tbl`, { type: Sequelize.QueryTypes.SELECT }));
    var company = Promise.resolve(await sequelize.query(`SELECT c.*, ROUND(AVG(r.rating),2) AS rating,count(r.id) AS review_count FROM company_tbl c LEFT JOIN review_tbl r ON c.id = r.com_id GROUP BY c.id LIMIT ${limit} OFFSET ${offset} `, { type: Sequelize.QueryTypes.SELECT }));
    var data = { total: 0, company: [] }
    if (total_company._rejectionHandler0.length != 0) {
        data.total = total_company._rejectionHandler0[0].total_company;
    }
    if (company._rejectionHandler0.length != 0) {
        data.company = company._rejectionHandler0;
    }
    return data;
 }

 async function getReviewList(where,limit,offset) {
    var total_review = Promise.resolve(await sequelize.query(`SELECT count(id) as total_review FROM review_tbl  WHERE ${where} `, { type: Sequelize.QueryTypes.SELECT }));
    var review = Promise.resolve(await sequelize.query(`SELECT * FROM review_tbl WHERE ${where} LIMIT ${limit} OFFSET ${offset} `, { type: Sequelize.QueryTypes.SELECT }));
    var data = { total: 0, review: [] }
    if (total_review._rejectionHandler0.length != 0) {
        data.total = total_review._rejectionHandler0[0].total_review;
    }
    if (review._rejectionHandler0.length != 0) {
        data.review = review._rejectionHandler0;
    }
    return data;
 }

module.exports = {
    checkCompany  : checkCompany,
    createCompany : createCompany,
    createreview,createreview,
    getCompany    : getCompany,
    getReviewList : getReviewList,
}