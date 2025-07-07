import { signUpProtocol } from "protocols/index.protocol";
import { conflictError, notFoundError } from "../errors/errors";
import { createUserRepository } from "repositories/index.repository";


export async function createUserServices(req: signUpProtocol) {
    // const foundDocument = await verifyDocumentRepository(req.cpf);
    // const foundPhone = await verifyPhoneRepository(req.phone);

    // if (foundDocument.length >= 3) throw conflictError("Limite de três de telefones cadastrados.");
    // if (foundPhone.length !== 0) throw conflictError("Telefone já cadastrado.");

    return await createUserRepository(req);
};
