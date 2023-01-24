import { Request, Response } from "express";
import { updateUserService } from "../../services/users";

const updateUserController = async (req: Request, res: Response) => {
  const updatedUser = await updateUserService(req.body, req.params.id);

  return res.status(200).send(updatedUser);
};

export default updateUserController;
