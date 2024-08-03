import Joi from "joi";

export const tagValidator = Joi.object({
  tag: Joi.string()
    .regex(/^[^^&=+[\]{};:\\|?<>`,]{1,256}$/)
    .required()
    .max(256)
    .messages({
      "string.max": "Max length is 256 characters.",
      "any.required": "Tag is required",
    }),
});
