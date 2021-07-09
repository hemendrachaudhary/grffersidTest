const sendBadRequest = (res, msg = "Bad Request") => {
    return res.send({
        code : 400,
        msg : msg
    })
    res.end();
}

const sendSuccess = (res, msg = "Success",data) => {
    return res.send({
        code : 200,
        msg : msg,
        data : data
       
    })
    res.end();
}

const sendSuccessWithCount = (res, msg = "Success",total,data) => {
    return res.send({
        code : 200,
        msg : msg,
        total : total,
        data : data
    })
    res.end();
}

const sendSystemError = (res,err, msg = "System error.") => {
    console.log(err);
    return res.send({
        code : 500,
        msg : msg,
        err : err
    })
    res.end();
}

const sendError = (res, msg = "Error!") => {
    return res.send({
        code : 400,
        msg : msg
    })
    res.end();
}


module.exports = {
    sendBadRequest,
    sendSuccess,
    sendSystemError,
    sendError,
    sendSuccessWithCount
}