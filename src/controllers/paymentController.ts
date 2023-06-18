import { Request, Response } from "express"
import { paymentService } from "../services/paymentService"

export const paymentController = {
    createPayment: async(req: Request, res: Response) => {
        const { amount, type, cardId } = req.body;

        if(type === "boleto") {
            const paymentBoleto = await paymentService.createPayment(amount, type);
        
            return res.status(201).json({ paymentBoleto });
        }

        const paymentCart = await paymentService.createPayment(amount, type, cardId);

        return res.status(201).json({ paymentCart })
    }
}