import joi from "joi";

export const createSchema = joi.object({
  type: joi.string().valid,
});
