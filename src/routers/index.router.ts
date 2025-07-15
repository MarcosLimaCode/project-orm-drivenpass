import { Request, Response, Router } from "express";
import { validateSchema } from "../middleware/schema.middleware";
import {
  credentialSchema,
  signInSchema,
  signUpSchema,
} from "../schemas/index.schemas";
import {
  createCredential,
  createUser,
  deleteCredentials,
  deleteUser,
  getCredentials,
  updateCredentials,
} from "../controllers/index.controlers";
import { loginUser } from "../controllers/user.controller";
import { validateToken } from "../middleware/auth.middleware";

const passRouter = Router();

passRouter.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm OK!");
});

passRouter.post("/sign-up", validateSchema(signUpSchema), createUser);
passRouter.post("/sign-in", validateSchema(signInSchema), loginUser);
passRouter.delete("/erase", validateToken, deleteUser);

passRouter.post(
  "/credentials",
  validateToken,
  validateSchema(credentialSchema),
  createCredential
);
passRouter.get("/credentials", validateToken, getCredentials);
passRouter.put("/credentials/:id", validateToken, updateCredentials);
passRouter.delete("/credentials/:id", validateToken, deleteCredentials);

export default passRouter;
