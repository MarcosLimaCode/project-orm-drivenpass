import { Request, Response } from "express";
import { createCredentialServices, createUserServices, deleteCredentialsServices, deleteUserServices, getCredentialsServices, loginUserServices, updateCredentialsServices } from "../services/index.service";


export async function createUser(req: Request, res: Response) {
    await createUserServices(req.body);
    res.sendStatus(201);
    return
};

export async function loginUser(req: Request, res: Response) {
    const result = await loginUserServices(req.body);
    res.sendStatus(200);
    return
};

export async function deleteUser(req: Request, res: Response) {
    const result = await deleteUserServices(req.body);
    res.sendStatus(200);
    return
};

export async function createCredential(req: Request, res: Response) {
    const result = await createCredentialServices(req.body);
    res.sendStatus(200);
    return
};

export async function getCredentials(req: Request, res: Response) {
    const result = await getCredentialsServices(req.body);
    res.sendStatus(200);
    return
};

export async function updateCredentials(req: Request, res: Response) {
    const result = await updateCredentialsServices(req.body);
    res.sendStatus(200);
    return
};

export async function deleteCredentials(req: Request, res: Response) {
    const result = await deleteCredentialsServices(req.body);
    res.sendStatus(200);
    return
};