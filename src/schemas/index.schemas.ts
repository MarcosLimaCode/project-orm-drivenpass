import joi from "joi";
import { signInProtocol, signUpProtocol } from "protocols/index.protocol";

export const signUpSchema = joi.object<signUpProtocol>({
    name: joi.string().required().invalid(null),
    email: joi.string().required().email(),
    password: joi.string().required().min(6),
});

export const signInSchema = joi.object<signInProtocol>({
    name: joi.string().required().invalid(null),
    password: joi.string().required().min(6)
});
