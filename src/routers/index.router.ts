import { Request, Response, Router } from "express";
import { validateSchema } from "../middleware/schema.middleware";
import { signInSchema, signUpSchema } from "../schemas/index.schemas";
import { createUser, loginUser } from "../controllers/index.controlers";

const passRouter = Router()


passRouter.get("/health", (req: Request, res: Response) => {
    res.status(200).send("I'm OK!");
}
);

passRouter.post("/sign-up", validateSchema(signUpSchema), createUser);
passRouter.post("/sign-in", validateSchema(signInSchema), loginUser);
// passRouter.delete("/erase", deleteUser);
// passRouter.post("/credentials", validateSchema(credentialSchema), createCredential);
// passRouter.get("/credentials", getCredentials);
// passRouter.put("/credentials/:id", updateCredentials);
// passRouter.delete("/credentials/:id", deleteCredentials);



export default passRouter;