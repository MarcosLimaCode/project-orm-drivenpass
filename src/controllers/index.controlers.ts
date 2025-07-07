import { Request, Response } from "express";
import { createUserServices } from "../services/index.service";


export async function createUser(req: Request, res: Response) {
    const result = await createUserServices(req.body);
    return result
};


