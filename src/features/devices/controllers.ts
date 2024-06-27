import { Request, Response } from "express";
import DeviceService from "./services";

export const createDevice = async (req: Request, res: Response) => {
    try {
        const result = await DeviceService.createDevice(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};