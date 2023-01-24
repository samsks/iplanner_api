import { Request, Response } from "express";
import {  listUserByIdService } from "../../services/users";


const listUserByIdController = async (req: Request, res: Response) => {
    const data = await listUserByIdService(req.params.id)

    return res.status(200).send(data)
}

export default  listUserByIdController
