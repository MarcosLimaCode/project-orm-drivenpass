import { credentialProtocol, signInProtocol, signUpProtocol } from "../protocols/index.protocol";
import db from "../database/database";
import prisma from "../database/database";

export async function createUserRepository(req: signUpProtocol) {
    const result = await prisma.user.create({
        data: {
            name: req.name,
            email: req.email,
            password: req.password
        }
    })
    return result;
}

export async function verifyEmailRepository(email: string) {
    const result = await prisma.user.findFirst({
        where: {
            email
        }
    })
    return result;
}

export async function deleteUserRepository(req: signUpProtocol) { // cuidado com o protocolo usado
        // FAZER a exclusao do usuario
    return console.log(req)
}


export async function loginUserRepository(req: signUpProtocol) { // cuidado com o protocolo usado
    return console.log(req)
}


export async function createCredentialRepository(req: credentialProtocol) { // cuidado com o protocolo usado
    const result = await prisma.credential.create({
        data: {
            title: req.title,
            url: req.url,
            username: req.username,
            password: req.password,
            userid: 3 // arrumar para achar o id do usuario logado
        }
    })
    return result;
    
}

export async function verifyTitleRepository(req: credentialProtocol) {
    const result = await prisma.credential.findFirst({
        where: {
            title: req.title,
            userid: 3 // arrumar para achar o id do usuario logado
        }
    })
    return result;
}


export async function getCredentialsRepository(req: credentialProtocol) { // cuidado com o protocolo usado
    const result = await prisma.credential.findMany({
        where: {
            userid: 3 // arrumar para achar o id do usuario logado
        }
    })
    return result;
}

export async function updateCredentialsRepository(id: string) { // cuidado com o protocolo usado
    return console.log(id)
}

export async function deleteCredentialsRepository(id: string) { // cuidado com o protocolo usado
    return console.log(id)
}