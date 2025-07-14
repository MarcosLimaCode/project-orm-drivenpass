import { credentialProtocol, signInProtocol, signUpProtocol } from "../protocols/index.protocol";
import { conflictError, notFoundError } from "../errors/errors";
import { createCredentialRepository, createUserRepository, deleteCredentialsRepository, deleteUserRepository, getCredentialsRepository, loginUserRepository, updateCredentialsRepository, verifyEmailRepository, verifyTitleRepository } from "../repositories/index.repository";


export async function createUserServices(req: signUpProtocol) {
    const foundEmail = await verifyEmailRepository(req.email);
    if (foundEmail) throw conflictError("Email já cadastrado.");
    return await createUserRepository(req);
};

export async function deleteUserServices(req: signUpProtocol) { // cuidado com o protoco usado
    return await deleteUserRepository(req);
};

export async function loginUserServices(req: signUpProtocol) { // cuidado com o protoco usado
    return await loginUserRepository(req);
};


export async function createCredentialServices(req: credentialProtocol) { 
    const foundTitle = await verifyTitleRepository(req);
    if (foundTitle) throw conflictError("Título já cadastrado.");
    return await createCredentialRepository(req);
};

export async function getCredentialsServices(req: credentialProtocol) { 
    return await getCredentialsRepository(req);
};

export async function updateCredentialsServices(id: string) { // cuidado com o protoco usado
    return await updateCredentialsRepository(id);
};

export async function deleteCredentialsServices(id: string) { // cuidado com o protoco usado
    return await deleteCredentialsRepository(id);
};
