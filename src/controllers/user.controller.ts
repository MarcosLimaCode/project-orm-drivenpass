import { Request, Response } from "express";
import { loginUserServices } from "../services/user.service";

export async function loginUser(req: Request, res: Response) {
    const result = await loginUserServices(req.body);
    res.status(200).send(result);
    return
};