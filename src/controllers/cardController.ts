import { Request, Response } from "express"
import { number } from 'card-validator';
import { cardService } from "../services/cardService";
import creditCardType from 'credit-card-type';

export const cardController = {
    createCard: async(req: Request, res: Response) => {
        try {
            const { cardHolder, cardNumber, cardExpiration, cvv } = req.body;

            const isValidCardNumber = number(cardNumber).isValid;
            const cardTypes = creditCardType(cardNumber);

            const { niceType } = cardTypes[0];
            const emissor = niceType;

            if(!isValidCardNumber) {
                return res.status(400).json({ error: 'Número do cartão inválido' });
            }

            const card = await cardService.createCard(cardHolder, cardNumber, cardExpiration, cvv);

            return res.status(201).json({ card, emissor, cardHolder });
        } catch (err) {
            if(err instanceof Error) {
                return res.status(404).json({ err: err.message });
            }
        }
    }
}