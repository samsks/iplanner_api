import { Request, Response } from "express";
import { listProfileService } from "../../services/profile";

const listProfileController = async (req: Request, res: Response) => {
  const userFullData = await listProfileService(req.user.id);

  return res.status(200).send(userFullData);
};

export default listProfileController;
