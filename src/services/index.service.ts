import { credentialProtocol } from "../protocols/index.protocol";
import {
  badRequastError,
  conflictError,
  notFoundError,
} from "../errors/errors";
import {
  createCredentialRepository,
  deleteCredentialsRepository,
  getCredentialsRepository,
  updateCredentialsRepository,
  verifyIdRepository,
  verifyTitleRepository,
} from "../repositories/index.repository";
import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.CryptrSecretKey);

export async function createCredentialServices(
  req: credentialProtocol,
  userId: number
) {
  const foundTitle = await verifyTitleRepository(req, userId);
  if (foundTitle) throw conflictError("Título já cadastrado.");
  return await createCredentialRepository(req, userId);
}

export async function getCredentialsServices(
  req: credentialProtocol,
  userId: number
) {
  const data = await getCredentialsRepository(req, userId);

  const descryptedData = data.map((newData) => ({
    ...newData,
    password: cryptr.decrypt(newData.password),
  }));

  if (descryptedData.length === 0)
    throw notFoundError("Credencial não encontrada.");

  return descryptedData;
}

export async function updateCredentialsServices(
  id: number,
  req: credentialProtocol,
  userId: number
) {
  const foundId = await verifyIdRepository(id);
  if (!foundId) throw badRequastError("Credencial não encontrada.");
  return await updateCredentialsRepository(id, req, userId);
}

export async function deleteCredentialsServices(id: number) {
  const foundId = await verifyIdRepository(id);
  if (!foundId) throw badRequastError("Credencial não encontrada.");
  return await deleteCredentialsRepository(id);
}
