import { Request, Response } from "express";
import { generateToken } from "../middleware/jwt.middleware";
import { user } from "../types/user.type";
import dotenv from 'dotenv';

dotenv.config();

export class AuthController {
    public async index(req: Request, res: Response) {
    const bodyUser: user = req.body
    const allowedUser = process.env.ALLOWED_USER
    const allowedPassword = process.env.ALLOWED_USER_PASSWORD
    if ( bodyUser.user != allowedUser || bodyUser.password != allowedPassword){
        return res.status(401).json({error:'BAD CREDENTIALS'});
      }
      const token = generateToken(bodyUser);
      return res.json({ token });
    }
}