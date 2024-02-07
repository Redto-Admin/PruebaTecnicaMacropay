import jwt from 'jsonwebtoken'
import { user } from '../types/user.type'
import { NextFunction,Request,Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const secretKey = process.env.JWT_SECRET_KEY as string;

export const generateToken = (user:user) => {
    return jwt.sign(user, secretKey, { expiresIn:process.env.JWT_EXPIRATION_TIME });
}


export const validateTokenMiddleware = (req:Request,res:Response,next:NextFunction): any =>{
 const token = req.headers['authorization'];
 if(token){
    try {
        const test = jwt.verify(token.split(' ')[1],secretKey);
    } catch (error:any) {
        return res.status(401).json({'error':error.message});
    }
 }
 else{
    return res.status(400).json({'error':'Token is missing'});
 }
 next();
}
