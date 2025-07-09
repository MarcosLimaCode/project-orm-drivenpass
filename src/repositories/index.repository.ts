import { signUpProtocol } from "../protocols/index.protocol";
import db from "../database/database";

export async function createUserRepository(req: signUpProtocol) {
    // const result = await db.query<RechargeData>();
    // return result;

    return console.log(req)
}

export async function verifyEmailRepository(email: string) {
    // const result = await db.query<RechargeData>();
    // FAZER VERIFICACAO DO EMAIL
    return []; // trocar para o result
}



export async function loginUserRepository(req: signUpProtocol) { // cuidado com o protocolo usado
    return console.log(req)
}

export async function deleteUserRepository(req: signUpProtocol) { // cuidado com o protocolo usado
    return console.log(req)
}

export async function createCredentialRepository(req: signUpProtocol) { // cuidado com o protocolo usado
    return console.log(req)
}

export async function getCredentialsRepository(req: signUpProtocol) { // cuidado com o protocolo usado
    return console.log(req)
}

export async function updateCredentialsRepository(req: signUpProtocol) { // cuidado com o protocolo usado
    return console.log(req)
}

export async function deleteCredentialsRepository(req: signUpProtocol) { // cuidado com o protocolo usado
    return console.log(req)
}