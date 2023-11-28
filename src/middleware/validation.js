import httpStatus from "http-status";

export const validationMiddleware = (schema, type) => {
  return async (req, res, next) => {
    const validationOption = {
      abortEarly: false,
      allowAny: true,
      allowScript: true,
    };
    try {
      const value = await schema.validateAsync(req.body, validationOption);
      req.body = value;
      next();
    } catch (error) {
      const errors = [];
      error.details.forEach((error) => {
        error.push(error.message);
      });
      res.status(httpStatus.BAD_REQUEST).json({
        error: "validation error",
        errors,
      });
    }
  };
};
