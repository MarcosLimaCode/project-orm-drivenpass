import { signUpProtocol } from "../protocols/index.protocol";
import { conflictError, notFoundError } from "../errors/errors";
import { createCredentialRepository, createUserRepository, deleteCredentialsRepository, deleteUserRepository, getCredentialsRepository, loginUserRepository, updateCredentialsRepository, verifyEmailRepository } from "../repositories/index.repository";


export async function createUserServices(req: signUpProtocol) {
    const foundEmail = await verifyEmailRepository(req.email);
    if (foundEmail.length !== 0) throw conflictError("Email já cadastrado.");
    return await createUserRepository(req);
};

export async function loginUserServices(req: signUpProtocol) { // cuidado com o protoco usado
    return await loginUserRepository(req);
};

export async function deleteUserServices(req: signUpProtocol) { // cuidado com o protoco usado
    return await deleteUserRepository(req);
};

export async function createCredentialServices(req: signUpProtocol) { // cuidado com o protoco usado
    return await createCredentialRepository(req);
};

export async function getCredentialsServices(req: signUpProtocol) { // cuidado com o protoco usado
    return await getCredentialsRepository(req);
};

export async function updateCredentialsServices(req: signUpProtocol) { // cuidado com o protoco usado
    return await updateCredentialsRepository(req);
};

export async function deleteCredentialsServices(req: signUpProtocol) { // cuidado com o protoco usado
    return await deleteCredentialsRepository(req);
};
