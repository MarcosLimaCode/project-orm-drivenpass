import { Request, Response } from "express";
import { createCredentialServices, deleteCredentialsServices, getCredentialsServices, updateCredentialsServices } from "../services/index.service";
import { createUserServices, deleteUserServices } from "../services/user.service";


export async function createUser(req: Request, res: Response) {
    await createUserServices(req.body);
    res.sendStatus(201);
    return
};

export async function deleteUser(req: Request, res: Response) {
    await deleteUserServices(req.body);
    res.sendStatus(204);
    return
};

export async function createCredential(req: Request, res: Response) {
    const userId = res.locals.user;
    await createCredentialServices(req.body, userId);
    res.sendStatus(200);
    return
};

export async function getCredentials(req: Request, res: Response) {
    const userId = res.locals.user;
    const result = await getCredentialsServices(req.body, userId);
    res.status(200).send(result);
    return
};

export async function updateCredentials(req: Request, res: Response) {
    const userId = res.locals.user;
    const id = Number(req.params.id);
    await updateCredentialsServices(id, req.body, userId);
    res.sendStatus(204);
    return
};

export async function deleteCredentials(req: Request, res: Response) {
    const id = Number(req.params.id);
    await deleteCredentialsServices(id);
    res.sendStatus(204);
    return
};