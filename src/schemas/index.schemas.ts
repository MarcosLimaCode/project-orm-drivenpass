import joi from "joi";
import {
  credentialProtocol,
  signInProtocol,
  signUpProtocol,
} from "protocols/index.protocol";

export const signUpSchema = joi.object<signUpProtocol>({
  name: joi.string().required().invalid(null),
  email: joi.string().required().email(),
  password: joi.string().required().min(6),
});

export const signInSchema = joi.object<signInProtocol>({
  email: joi.string().required().email().invalid(null),
  password: joi.string().required().min(6),
});

export const credentialSchema = joi.object<credentialProtocol>({
  title: joi.string().required().invalid(null),
  url: joi.string().uri(),
  username: joi.string(),
  password: joi.string(),
});
