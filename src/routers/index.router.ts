import { Request, Response, Router } from "express";
import { validateSchema } from "../middleware/schema.middleware";
import { phoneSchema, passSchema } from "../schemas/index.schemas";
import { createPhone, createRecharge, getPhone, getRecharches, getSummary } from "../controllers/index.controlers";

const passRouter = Router()


passRouter.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
}
);

passRouter.post("/phones", validateSchema(phoneSchema), createPhone);
passRouter.post("/recharges", validateSchema(passSchema), createRecharge);
passRouter.get("/phones/:document", getPhone);
passRouter.get("/recharges/:number", getRecharches);
passRouter.get("/summary/:document", getSummary);


export default passRouter;