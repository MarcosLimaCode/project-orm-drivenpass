import {
  credentialProtocol,
  signUpProtocol,
} from "../protocols/index.protocol";
import bcrypt from "bcrypt";
import prisma from "../database/database";
import Cryptr from "cryptr";

const cryptr = new Cryptr(process.env.CryptrSecretKey);

export async function createUserRepository(req: signUpProtocol) {
  const result = await prisma.user.create({
    data: {
      name: req.name,
      email: req.email,
      password: bcrypt.hashSync(req.password, 10),
    },
  });
  return result;
}

export async function verifyEmailRepository(email: string) {
  const result = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  return result;
}

export async function deleteUserRepository(userId: number) {
  const credentialsById = await prisma.credential.findMany({
    where: {
      userid: userId,
    },
  });

  credentialsById.map((credential) => {
    deleteCredentialsRepository(credential.id);
  });

  const result = await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  return result;
}

export async function createCredentialRepository(
  req: credentialProtocol,
  userId: number
) {
  const result = await prisma.credential.create({
    data: {
      title: req.title,
      url: req.url,
      username: req.username,
      password: cryptr.encrypt(req.password),
      userid: userId,
    },
  });
  return result;
}

export async function verifyTitleRepository(
  req: credentialProtocol,
  userId: number
) {
  const result = await prisma.credential.findFirst({
    where: {
      title: req.title,
      userid: userId,
    },
  });
  return result;
}

export async function getCredentialsRepository(
  req: credentialProtocol,
  userId: number
) {
  const result = await prisma.credential.findMany({
    where: {
      userid: userId,
    },
  });
  return result;
}

export async function updateCredentialsRepository(
  id: number,
  req: credentialProtocol,
  userId: number
) {
  const result = await prisma.credential.update({
    where: {
      id,
    },
    data: {
      title: req.title,
      url: req.url,
      username: req.username,
      password: req.password,
      userid: userId,
    },
  });
  return result;
}

export async function deleteCredentialsRepository(id: number) {
  const result = await prisma.credential.delete({
    where: {
      id,
    },
  });
  return result;
}

export async function verifyIdRepository(id: number) {
  const result = await prisma.credential.findFirst({
    where: {
      id,
    },
  });
  return result;
}
