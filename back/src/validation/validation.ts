import { assert, Struct } from "superstruct";
import { NextFunction, Response, Request } from "express";

export const validation =
  (model: Struct) => (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("start validation");
      assert(req.body, model);
      next();
    } catch (err) {
      const message = "validation";
      res.status(400).json({ error: message });
    }
  };
