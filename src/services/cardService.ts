import prisma from "../prisma"

export const cardService = {
    createCard: async(cardHolder: string, cardNumber: string, cardExpiration: string, cvv: number) => {
        const card = await prisma.card.create({
            data: {
                cardHolder,
                cardNumber,
                cardExpiration,
                cvv
            }
        })

        return card;
    },
}