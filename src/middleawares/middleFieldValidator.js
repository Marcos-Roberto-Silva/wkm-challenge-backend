const { validationResult } = require("express-validator");
const errorMsg = require("../utils/messageError");
const httpstatus = require("../utils/httpStatus");

const validationFieldContent = (request, response, next) => {
  const errorObj = validationResult(request);
 
  if (request.body.cep < 0) {
    return response.status(httpstatus.BadRequest).json({ message: errorMsg.cepError });
  }

  if (!errorObj.isEmpty()) {
    switch (errorObj.errors[0]?.param) {
      case "name":
        return response.status(httpstatus.BadRequest).json({ message: errorMsg.nameError });
      case "uf":
        return response.status(httpstatus.BadRequest).json({ message: errorMsg.ufError });
      case "cep":
        return response.status(httpstatus.BadRequest).json({ message: errorMsg.cepError });
      default:
        next();
    }
  }
  next();
};

module.exports = validationFieldContent;
