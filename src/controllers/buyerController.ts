import { Request, Response } from "express"
import { buyerService } from "../services/buyerService";
import { cpf } from 'cpf-cnpj-validator';

export const buyerController = {
    createBuyer: async(req: Request, res: Response) => {
        try {
            const { name, email, CPF } = req.body;

            if(!cpf.isValid(CPF)) {
                return res.status(404).json({ message: "CPF inválido!" });
            }

            const buyer = await buyerService.createBuyer(name, email, CPF);

            return res.status(201).json({ buyer });
        } catch(err) {
            if(err instanceof Error) {
                return res.status(404).json({ err: err.message });
            }
        }
    }
}