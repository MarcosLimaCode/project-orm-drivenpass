import joi from "joi";
import { signUpProtocol } from "protocols/index.protocol";

export const signUpSchema = joi.object<signUpProtocol>({
    name: joi.string().required().invalid(null),
    email: joi.string().required().email(),
    password: joi.string().required().min(8),
});


