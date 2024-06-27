import { Request, Response } from "express";
import UserService from "./services";

export const createUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.createUser( req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};
export const GetUserAndDevice = async (req: Request, res: Response) => {
    try {
        const result = await UserService.GetUserAndDevice( );
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};
export const DeleteUserAndDevice = async (req: Request, res: Response) => {
    try {
        const result = await UserService.DeleteUserAndDevice( req.params.id);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};