import Joi from "joi";

export const contactValidator = Joi.object({
  firstName: Joi.string().required().max(100).messages({
    "string.max": "Max length is 100 characters.",
    "any.required": "Title is required",
  }),

  lastName: Joi.string().required().max(100).messages({
    "string.max": "Max length is 100 characters.",
    "any.required": "Title is required",
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});
