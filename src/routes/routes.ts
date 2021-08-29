import { Express, NextFunction, Request, Response } from "express";
import service from "../services/services";


export default function (app: Express) {
  app.get("/api/v1/admin/getAllUsers", service.getAllUsers);

  app.post("/api/v1/admin/createUser", service.insertUser);

  app.put("/api/v1/admin/updateUser/:id/:keys/:values", service.updateUser);

  app.delete("/api/v1/admin/deleteUser/:id", service.deleteUser);

  app.get("/api/v1/admin/getUser/:id", service.getUser);

  app.all("/*", (req: Request, res: Response, next: NextFunction) => res.status(404).json({"message":"Invddddalid Api"}));
}
