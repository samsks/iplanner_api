import { Request, Response } from "express";
import { listAllUsersService } from "../../services/users";

const listAllUsersController = async (req: Request, res: Response) => {
  const data = await listAllUsersService();
  return res.status(200).send(data);
};

export default listAllUsersController;
