import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { ISession, ISessionRes } from "../../interfaces/session";
import { compare } from "bcryptjs";
import { AppError } from "../../errors/AppError";
import "dotenv/config";
import { Repository } from "typeorm";

const createSessionService = async ({
  email,
  password,
}: ISession): Promise<ISessionRes> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("User or password invalid", 403);
  }

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) {
    throw new AppError("User or password invalid", 403);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
      isDeleted: user.isDeleted,
    },
    process.env.SECRET_KEY as string,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return { token };
};

export default createSessionService;
