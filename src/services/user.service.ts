import { conflictError, notFoundError, unauthorizedError } from "../errors/errors";
import jwt from "jsonwebtoken";
import { signInProtocol, signUpProtocol } from "../protocols/index.protocol";
import { createUserRepository, deleteUserRepository, verifyEmailRepository } from "../repositories/index.repository";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();


export async function createUserServices(req: signUpProtocol) {
    const foundEmail = await verifyEmailRepository(req.email);
    if (foundEmail) throw conflictError("Email já cadastrado.");
    return await createUserRepository(req);
};


export async function loginUserServices(req: signInProtocol) { 
    const foundEmail = await verifyEmailRepository(req.email);
    if (!foundEmail) throw notFoundError("Email não encontrado.");
    const token = jwt.sign({
        userId: foundEmail.id
    }, process.env.JWT_SECRET, { expiresIn: 86400 })

    const checkPassword = bcrypt.compareSync(req.password, foundEmail.password)
    if (!checkPassword) throw unauthorizedError("Senha incorreta.");

    return token
};

export async function deleteUserServices(req: signUpProtocol) { // cuidado com o protoco usado
    return await deleteUserRepository(req);
};